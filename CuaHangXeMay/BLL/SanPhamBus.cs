﻿using DAL;
using Model;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class SanPhamBus : ISanPhamBus
    {
        private ISanPhamDAL _res;
        public SanPhamBus(ISanPhamDAL res)
        {
            _res = res;
        }
        public SanPhamModel GetTheoMa(int ma)
        {
            return _res.GetTheoMa(ma);
        }
       
        public List<SanPhamModel> SanPhamMoi(int SL)
        {
            return _res.SanPhamMoi(SL);
        }
        public List<SanPhamModel> SanPhamBanChay(int SL)
        {
            return _res.SanPhamBanChay(SL);
        }
        public List<SanPhamModel> SanPhamGiamGia(int SL)
        {
            return _res.SanPhamGiamGia(SL);
        }
        public List<SanPhamModel> TimKiem(int? page, int? pageSize, out int total, int? MaSanPham, string TenSP, string TenThuongHieu, string TenLoaiSanPham, int? MinGia, int? MaxGia, int? MaLoaiSanPham, int? MaThuongHieu)
        {
            return _res.TimKiem(page, pageSize, out total, MaSanPham, TenSP, TenThuongHieu, TenLoaiSanPham, MinGia, MaxGia, MaLoaiSanPham, MaThuongHieu);
        }
        public List<SanPhamModel> GetALL()
        {
            return _res.GetALL();
        }
        public bool Create(SanPhamModel model)
        {
            return _res.Create(model);
        }
        public bool Update(SanPhamModel model)
        {
            return _res.Update(model);
        }
        public bool Delete(int ma)
        {
            return _res.Delete(ma);
        }
    }
}