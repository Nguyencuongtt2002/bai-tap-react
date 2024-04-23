using BLL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace ShopThoiTrang.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ThongKeController : ControllerBase
    {
        private IThongKeBus _thongkeBus;
        public ThongKeController(IThongKeBus thongkeBus)
        {
            _thongkeBus = thongkeBus;
        }
        [Route("tongsoluong")]
        [HttpGet]
        public ThongKeModel ThongKe_tongsoluong()
        {
            return _thongkeBus.ThongKe_tongsoluong();
        }
    }


}