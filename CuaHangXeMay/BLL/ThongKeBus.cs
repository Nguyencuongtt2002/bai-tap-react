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
    public class ThongKeBus : IThongKeBus
    {
        private IThongKeDAL _res;
        public ThongKeBus(IThongKeDAL res)
        {
            _res = res;
        }
        public ThongKeModel ThongKe_tongsoluong()
        {
            return _res.ThongKe_tongsoluong();
        }
    }
}