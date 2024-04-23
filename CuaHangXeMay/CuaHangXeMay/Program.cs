using BLL;
using DAL;
using DAL.Helper;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddTransient<IDatabaseHelper, DatabaseHelper>();
builder.Services.AddTransient<IMenuDAL, MenuDAL>();
builder.Services.AddTransient<IMenuBus, MenuBus>();

builder.Services.AddTransient<ILoaiSanPhamDAL, LoaiSanPhamDAL>();
builder.Services.AddTransient<ILoaiSanphamBus, LoaiSanPhamBus>();

builder.Services.AddTransient<ISanPhamDAL, SanPhamDAL>();
builder.Services.AddTransient<ISanPhamBus, SanPhamBus>();

builder.Services.AddTransient<ILienHeDAL, LienHeDAL>();
builder.Services.AddTransient<ILienHeBus, LienHeBus>();

builder.Services.AddTransient<IDonHangDAL, DonHangDAL>();
builder.Services.AddTransient<IDonHangBus, DonHangBus>();

builder.Services.AddTransient<IGioiThieuDAL, GioiThieuDAL>();
builder.Services.AddTransient<IGioiThieuBus, GioiThieuBus>();

builder.Services.AddTransient<INguoiDungDAL, NguoiDungDAL>();
builder.Services.AddTransient<INguoiDungBus, NguoiDungBus>();

builder.Services.AddTransient<IThuongHieuDAL, ThuongHieuDAL>();
builder.Services.AddTransient<IThuongHieuBus, ThuongHieuBus>();

builder.Services.AddTransient<IThongKeDAL, ThongKeDAL>();
builder.Services.AddTransient<IThongKeBus, ThongKeBus>();
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();
app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());
app.UseAuthentication();
app.UseAuthorization();


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
