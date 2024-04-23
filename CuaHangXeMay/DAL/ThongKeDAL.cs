using DAL.Helper;
using DAL;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public partial class ThongKeDAL : IThongKeDAL
    {
        private IDatabaseHelper _dbHelper;
        public ThongKeDAL(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }
        public ThongKeModel ThongKe_tongsoluong()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_ThongKe_tongsoluong");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<ThongKeModel>().FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}