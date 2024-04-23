﻿using DAL.Helper;
using DAL;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public partial class DonHangDAL : IDonHangDAL
    {
        private IDatabaseHelper _dbHelper;
        public DonHangDAL(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }
        public List<DonHangModel> GetALL()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_getall_DonHang");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<DonHangModel>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public DonHangModel GetTheoMa(int? ma)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_getbyid_DonHang", "@p_MaDonHang", ma);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<DonHangModel>().FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<ChiTietDonHangModel> GetCTDonHangTheoDonHang(int? MaDonHang)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_get_CTDonHang_by_DonHang",
                "@p_MaDonHang", MaDonHang);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<ChiTietDonHangModel>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<LienHeModel> ThongTinLienHe()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_get_thongtinlienhe_DonHang");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<LienHeModel>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool CreateDonHang(DonHangModel model)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "sp_create_donhang",
                "@p_HoTen", model.HoTen,
                "@p_DiaChi", model.DiaChi,
                "@p_SoDienThoai", model.SoDienThoai,
                "@p_MaNguoiDung", model.MaNguoiDung,
                "@p_TrangThai", model.TrangThai,
                "@p_NgayGiao", model.NgayGiao,
                "@p_list_json_chitiet_hoadon", model.p_list_json_chitiet_hoadon != null ? MessageConvert.SerializeObject(model.p_list_json_chitiet_hoadon) : null);
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