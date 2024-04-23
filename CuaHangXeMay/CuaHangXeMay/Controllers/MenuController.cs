using BLL;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace ShopThoiTrang.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private IMenuBus _menuBus;
        public MenuController(IMenuBus menuBus)
        {
            _menuBus = menuBus;
        }
        [Route("get-all")]
        [HttpGet]
        public IEnumerable<MenuModel> GetALL()
        {
            return _menuBus.GetALLMenu();
        }

        [Route("them")]
        [HttpPost]
        public IActionResult Create([FromBody] MenuModel them)
        {
            try
            {
                _menuBus.Create(them);
                return Ok(new { message = "Đã thêm thành công", results = true, status = 200 });
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Đã xảy ra lỗi:" + ex.Message);
            }
        }
        [Route("update")]
        [HttpPut]
        public IActionResult Update([FromBody] MenuModel sua)
        {
            try
            {
                _menuBus.Update(sua);
                return Ok(new { message = "Đã cập nhật thành công", results = true });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message, results = false });
            }
        }
        [Route("xoa/{ma}")]
        [HttpDelete]
        public bool Xoa(int ma)
        {
            return _menuBus.Delete(ma);
        }

    }


}