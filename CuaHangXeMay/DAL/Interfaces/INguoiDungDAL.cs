using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public partial interface INguoiDungDAL
    {
        NguoiDungModel DangNhap(string TaiKhoan, string MatKhau);
        NguoiDungModel GetTheoMa(int ma);
        List<NguoiDungModel> GetALL();
        bool Create(NguoiDungModel model);
        bool Update(NguoiDungModel model);
        bool Delete(int ma);

    }
}
