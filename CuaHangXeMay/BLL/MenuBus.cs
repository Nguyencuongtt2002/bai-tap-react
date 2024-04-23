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
    public class MenuBus : IMenuBus
    {
        private IMenuDAL _res;
        public MenuBus(IMenuDAL res)
        {
            _res = res;
        }
        public List<MenuModel> GetALLMenu()
        {
            return _res.GetALLMenu();
        }
        public bool Create(MenuModel them)
        {
            return _res.Create(them);
        }
        public bool Update(MenuModel sua)
        {
            return _res.Update(sua);
        }
        public bool Delete(int ma)
        {
            return _res.Delete(ma);
        }

    }
}
