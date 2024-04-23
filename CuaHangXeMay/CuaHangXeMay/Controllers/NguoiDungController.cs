using BLL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;
using System.IO;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
using DAL;
using System.Security.Cryptography;
using System.Text;

namespace ShopThoiTrang.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NguoiDungController : ControllerBase
    {
        private INguoiDungBus _nguoidungBus;
       
        private string _path;
        public NguoiDungController(INguoiDungBus nguoidungBus, IConfiguration configuration)
        {
            _nguoidungBus = nguoidungBus;
            _path = configuration["AppSettings:PATH_NguoiDung"];
        }
        [Route("dangnhap")]
        [HttpPost]
        public IActionResult DangNhap([FromBody] NguoiDungModel model)
        {
            var data = _nguoidungBus.DangNhap(model.TaiKhoan, model.MatKhau);
            if (data != null)
            {
                // Trả về kết quả thành công
                return Ok(new { result = data, message = "Đăng nhập thành công", status = 200 });
            }
            else
            {
                // Trả về thông báo lỗi
                return Ok(new { message = "Sai tên đăng nhập hoặc mật khẩu không chính xác", status = 404 });
            }
        }

       

        [Route("getbyid/{ma}")]
        [HttpGet]
        public NguoiDungModel GetTheoMa(int ma)
        {
            return _nguoidungBus.GetTheoMa(ma);
        }
        [Route("get-all")]
        [HttpGet]
        public IEnumerable<NguoiDungModel> GetALL()
        {
            return _nguoidungBus.GetALL();
        }
        [Route("them")]
        [HttpPost]
        public IActionResult Create([FromForm] NguoiDungModel model)
        {
            try
            {
                // Khởi tạo biến imagePath
                string imagePath = null;


                // Kiểm tra xem có dữ liệu file ảnh được gửi lên không và có dung lượng lớn hơn 0 không
                if (model.File != null && model.File.Length > 0)
                {
                    // Tạo tên file duy nhất bằng cách kết hợp GUID và tên file gốc
                    string uniqueFileName = Guid.NewGuid().ToString() + "_" + model.File.FileName;

                    // Kết hợp đường dẫn thư mục lưu trữ ảnh và tên file duy nhất để tạo đường dẫn đầy đủ
                    string filePath = Path.Combine(_path, uniqueFileName);

                    // Lưu file ảnh vào thư mục được chỉ định
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        model.File.CopyTo(stream); // Copy dữ liệu file vào stream
                    }

                    // Tạo đường dẫn tương đối của ảnh từ thư mục gốc
                    imagePath = uniqueFileName;
                }
                else
                {
                    imagePath = model.AnhDaiDien;
                }

                // Tạo đối tượng Model mới với các thông tin
                var Model = new NguoiDungModel
                {
                    TaiKhoan = model.TaiKhoan,
                    MatKhau = model.MatKhau,
                    Email = model.Email,
                    HoTen = model.HoTen,
                    NgaySinh = model.NgaySinh,
                    GioiTinh = model.GioiTinh,
                    DiaChi = model.DiaChi,
                    SoDienThoai = model.SoDienThoai,
                    AnhDaiDien = imagePath, // Đường dẫn tương đối của ảnh,
                    VaiTro = model.VaiTro,
                };

                // Gọi phương thức Create từ BLL để thêm mới vào cơ sở dữ liệu
                _nguoidungBus.Create(Model);
                // Trả về kết quả thành công
                return Ok(new { success = true, message = "Tạo mới thành công" });
            }
            catch (Exception ex)
            {
                // Nếu có lỗi xảy ra, trả về mã lỗi 500 và thông báo lỗi
                return StatusCode(500, new { success = false, message = "Đã xảy ra lỗi: " + ex.Message });
            }
        }

        [Route("update")]
        [HttpPut]
        public IActionResult Update([FromForm] NguoiDungModel model)
        {
            try
            {
                // Kiểm tra xem người dùng có tải lên một ảnh mới không
                if (Request.Form.Files.Count > 0)
                {
                    // Lấy file ảnh từ yêu cầu
                    var uploadedFile = Request.Form.Files[0];
                    // Tạo tên file duy nhất cho ảnh mới
                    string uniqueFileName = Guid.NewGuid().ToString() + "_" + uploadedFile.FileName;
                    // Kết hợp đường dẫn thư mục lưu trữ ảnh và tên file duy nhất để tạo đường dẫn đầy đủ
                    string filePath = Path.Combine(_path, uniqueFileName);

                    var Model = _nguoidungBus.GetTheoMa(model.MaNguoiDung);

                    // Xoá file ảnh cũ nếu có
                    if (!string.IsNullOrEmpty(Model.AnhDaiDien))
                    {
                        string oldFilePath = Path.Combine(_path, Model.AnhDaiDien);
                        if (System.IO.File.Exists(oldFilePath))
                        {
                            System.IO.File.Delete(oldFilePath);
                        }
                    }

                    // Lưu ảnh mới vào thư mục được chỉ định
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        uploadedFile.CopyTo(stream);
                    }

                    // Cập nhật đường dẫn ảnh mới vào đối tượng Model
                    model.AnhDaiDien = uniqueFileName;
                }

                // Gọi phương thức cập nhật từ BLL với thông tin mới
                _nguoidungBus.Update(model);

                return Ok(new { success = true, message = "Cập nhật thành công" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = "Đã xảy ra lỗi: " + ex.Message });
            }
        }

        [Route("xoa/{ma}")]
        [HttpDelete]
        public IActionResult Xoa(int ma)
        {
            try
            {
                // Lấy thông tin từ cơ sở dữ liệu
                var model = _nguoidungBus.GetTheoMa(ma);

                if (model == null)
                {
                    return NotFound(new { success = false, message = "Người dùng không tồn tại" });
                }

                // Xoá file ảnh từ thư mục lưu trữ
                if (!string.IsNullOrEmpty(model.AnhDaiDien))
                {
                    string filePath = Path.Combine(_path, model.AnhDaiDien);
                    if (System.IO.File.Exists(filePath))
                    {
                        System.IO.File.Delete(filePath);
                    }
                }

                // Xoá từ cơ sở dữ liệu
                bool result = _nguoidungBus.Delete(ma);

                if (result)
                {
                    return Ok(new { success = true, message = "Xóa thành công" });
                }
                else
                {
                    return NotFound(new { success = false, message = "Không thể xoá" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = "Đã xảy ra lỗi: " + ex.Message });
            }
        }
        
       
    }
}