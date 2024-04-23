using BLL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace ShopThoiTrang.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    public class GioiThieuController : ControllerBase
    {
        private IGioiThieuBus _gioithieuBus;
        private string _path;
        public GioiThieuController(IGioiThieuBus gioithieuBus)
        {
            _gioithieuBus = gioithieuBus;
           
        }
      
        [Route("get-all")]
        [HttpGet]
        public IEnumerable<GioiThieuModel> GetALL()
        {
            return _gioithieuBus.GetALL();
        }
       
    }


}