using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class ThongKeModel
    {
        public int? TongSanPham { get; set; }
        public int? TongNguoiDung { get; set; }
        public int? TongDoanhThu { get; set; }
        public int? TongDonHang { get; set; }
    }
}
