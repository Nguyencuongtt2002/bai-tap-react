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
    public class LoaiSanPhamBus : ILoaiSanphamBus
    {
        private ILoaiSanPhamDAL _res;
        public LoaiSanPhamBus(ILoaiSanPhamDAL res)
        {
            _res = res;
        }
        public List<LoaiSanPhamModel> GetALL()
        {
            return _res.GetALL();
        }
        public bool Create(LoaiSanPhamModel them)
        {
            return _res.Create(them);
        }
        public bool Update(LoaiSanPhamModel sua)
        {
            return _res.Update(sua);
        }
        public bool Delete(int ma)
        {
            return _res.Delete(ma);
        }
    }
}