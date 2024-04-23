using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public interface ISanPhamBus
    {
        List<SanPhamModel> GetALL();
        SanPhamModel GetTheoMa(int ma);
        bool Create(SanPhamModel model);
        bool Update(SanPhamModel model);
        bool Delete(int ma);
        List<SanPhamModel> SanPhamMoi(int SL);
        List<SanPhamModel> SanPhamBanChay(int SL);
        List<SanPhamModel> SanPhamGiamGia(int SL);
        List<SanPhamModel> TimKiem(int? page, int? pageSize, out int total, int? MaSanPham, string TenSP, string TenThuongHieu, string TenLoaiSanPham, int? MinGia, int? MaxGia, int? MaLoaiSanPham, int? MaThuongHieu);

    }
}
