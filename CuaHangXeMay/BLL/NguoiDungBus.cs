using BLL;
using DAL;
using Microsoft.Extensions.Configuration;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class NguoiDungBus : INguoiDungBus
    {
        private INguoiDungDAL _res;
        private string Secret;
        public NguoiDungBus(INguoiDungDAL res)
        {
           
            _res = res;
        }
        public NguoiDungModel DangNhap(string TaiKhoan, string MatKhau)
        {
            var nguoidung = _res.DangNhap(TaiKhoan, MatKhau);

            return nguoidung;
        }
        public NguoiDungModel GetTheoMa(int ma)
        {
            return _res.GetTheoMa(ma);
        }
        public bool Create(NguoiDungModel model)
        {
            return _res.Create(model);
        }
        public bool Update(NguoiDungModel model)
        {
            return _res.Update(model);
        }
        public bool Delete(int ma)
        {
            return _res.Delete(ma);
        }
        public List<NguoiDungModel> GetALL()
        {
            return _res.GetALL();
        }
    }
}