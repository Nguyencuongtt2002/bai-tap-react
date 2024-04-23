using Model;

namespace BLL
{
    public interface INguoiDungBus
    {
        NguoiDungModel DangNhap(string TaiKhoan, string MatKhau);
        NguoiDungModel GetTheoMa(int ma);
        List<NguoiDungModel> GetALL();
        bool Create(NguoiDungModel model);
        bool Update(NguoiDungModel model);
        bool Delete(int ma);
    }
}