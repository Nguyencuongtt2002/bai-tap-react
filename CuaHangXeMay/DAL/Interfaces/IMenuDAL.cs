﻿using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public partial interface IMenuDAL
    {
        List<MenuModel> GetALLMenu();
        bool Create(MenuModel them);
        bool Update(MenuModel sua);
        bool Delete(int ma);

    }
}
