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
    public partial class LienHeDAL : ILienHeDAL
    {
        private IDatabaseHelper _dbHelper;
        public LienHeDAL(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }
        public List<LienHeModel> GetALL()
        {
            string msgError = "";
            
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_getall_LienHe");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<LienHeModel>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool CreateLienHe(LienHeModel themlienhe)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "sp_create_LienHe",
                "@p_Email", themlienhe.Email,
                "@p_DiaChi", themlienhe.DiaChi,
                "@p_SoDienThoai", themlienhe.SoDienThoai);
                if ((result != null && !string.IsNullOrEmpty(result.ToString())) || !string.IsNullOrEmpty(msgError))
                {
                    throw new Exception(Convert.ToString(result) + msgError);
                }
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool UpdateLienHe(LienHeModel sualienhe)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "sp_update_LienHe",
                "@p_MaLienHe", sualienhe.MaLienHe,
                "@p_Email", sualienhe.Email,
                "@p_DiaChi", sualienhe.DiaChi,
                "@p_SoDienThoai", sualienhe.SoDienThoai);
                if ((result != null && !string.IsNullOrEmpty(result.ToString())) || !string.IsNullOrEmpty(msgError))
                {
                    throw new Exception(Convert.ToString(result) + msgError);
                }
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool DeleteLienHe(int ma)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "sp_delete_LienHe",
                "@p_MaLienHe", ma);
                if ((result != null && !string.IsNullOrEmpty(result.ToString())) || !string.IsNullOrEmpty(msgError))
                {
                    throw new Exception(Convert.ToString(result) + msgError);
                }
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}