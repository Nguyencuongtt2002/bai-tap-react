create  DATABASE CuaHangXeMay
go 
use CuaHangXeMay 
go 
Create table Slide  
(
	MaSlide int identity(1,1) primary key ,
	Anh nvarchar(max)
)
Create table GioiThieu 
(
	MaGioiThieu  int identity(1,1) primary key ,
	TieuDe nvarchar(50),
	NoiDung Nvarchar(max) not null,
	HinhAnh nvarchar(Max) 
)
Create Table ThuongHieu
(
	MaThuongHieu int identity(1,1) primary key ,
	TenThuongHieu Nvarchar(50),
	GioiThieu nvarchar(Max) not null 
)
go
Create Table LienHe
(
	MaLienHe int identity(1,1) primary key ,
	Email nvarchar(30),
	DiaChi nvarchar(50) ,
	SoDienThoai nvarchar(15),
)
go
Create Table NhaCungCap
(
	MaNhaCungCap int identity(1,1) primary key ,
	TenNhaCungCap Nvarchar(25) not null,
	DiaChi nvarchar(25),
	SoDienThoai nvarchar(15),
	Email nvarchar(30)
)
go
create table Menu
(
	MaMenu int identity(1,1) primary key ,
	TenMenu nvarchar(30),
	Link nvarchar(20)
)
go
Create Table LoaiSanPham 
(
	MaLoaiSanPham int identity(1,1) primary key ,
	TenLoaiSanPham Nvarchar(35) not null,
	GioiThieu text 
)
go
Create table SanPham
(
	MaSanPham int identity(1,1) primary key,
	TenSP nvarchar(MAX) ,
	MoTa nvarchar(max),
	NgayTao datetime ,
	MaLoaiSanPham int foreign key (MaLoaiSanPham) references LoaiSanPham(MaLoaiSanPham) on delete cascade on update cascade,
	MaThuongHieu int foreign key (MaThuongHieu) references ThuongHieu(MaThuongHieu) on delete cascade on update cascade,
	AnhDaiDien nvarchar(max),
	SoLuong int 
)
go
Create table Gia 
(
	MaGia int identity(1,1) primary key,
	MaSanPham int foreign key  references SanPham(MaSanPham) on delete cascade on update cascade,
	NgayBD datetime,
	NgayKT datetime ,
	DonGia int 

)
go

CREATE table ThongSo
(
	MaThongSo int identity(1,1) primary key,
	TenThongSo nvarchar(50),
	MoTaThongTin nvarchar(max) ,
	MaSanPham int foreign key  references SanPham(MaSanPham) on delete cascade on update cascade
)
go
create table GiamGia
(
    MaGiamGia int identity(1,1) primary key ,
	MaSanPham int foreign key  references SanPham(MaSanPham) on delete cascade on update cascade,
	PhanTram int ,
	NgayBD datetime,
	NgayKT datetime
)
Create Table NguoiDung
(
	MaNguoiDung int identity(1,1) primary key ,
	TaiKhoan nvarchar(35),
	MatKhau nvarchar(50) not null ,
	Email nvarchar(50) not null ,
	HoTen nvarchar( 50) not null ,
	NgaySinh datetime ,
	DiaChi nvarchar(50) ,
	SoDienThoai nvarchar(15),
	GioiTinh nvarchar(10),
	AnhDaiDien nvarchar(Max),
	VaiTro nvarchar(30)
)
go
CREATE table TinTuc 
(
	MaTinTuc int identity (1,1) primary key ,
	TieuDe nvarchar(max) not null ,
	NgayDang datetime ,
	NoiDung nvarchar(max) not null ,
	AnhTinTuc nvarchar(max) ,
	MaNguoiDung int Foreign key references NguoiDung(MaNguoiDung) on delete cascade on update cascade,
)
create table chitiettintuc
(
	MaChiTiet int identity (1,1) primary key ,
	MaTinTuc int Foreign key references TinTuc(MaTinTuc) on delete cascade on update cascade,
	NoiDungChiTiet nvarchar(max)
)
CREATE Table HoaDonNhap
(
	MaHDN  int identity(1,1) primary key,
	NgayNhap datetime ,
	MaNhaCungCap int foreign key  references NhaCungCap(MaNhaCungCap) on delete cascade on update cascade,
	MaNguoiDung int Foreign key references NguoiDung (MaNguoiDung) on delete cascade on update cascade

)
go
CREATE Table ChiTietHoaDonNhap
(
	MaChiTiet int identity(1,1) primary key ,
	MaHDN   int Foreign key references HoaDonNhap(MaHDN) on delete cascade on update cascade,
	MaSanPham int Foreign key references SanPham(MaSanPham) on delete cascade on update cascade,
	SoLuong int ,
	GiaTien int 

)
go
CREATE Table DonHang
(
	MaDonHang  int identity(1,1) primary key,
	NgayDat datetime ,
	NgayGiao datetime,
	HoTen varchar(50),
	DiaChi varchar(50),
	SoDienThoai varchar(15),
	MaNguoiDung int Foreign key references NguoiDung(MaNguoiDung) on delete cascade on update cascade,
	TrangThai int ,

)
go
Create table ChiTietDonHang 
(
    MaChiTiet int identity(1,1) primary key ,
	MaDonHang int Foreign key references DonHang (MaDonHang) on delete cascade on update cascade,
	MaSanPham int Foreign key references SanPham(MaSanPham) on delete cascade on update cascade,
	SoLuong int ,
	GiaTien int 
)
go

-- Thêm dữ liệu vào bảng Slide
INSERT INTO slide (Anh) VALUES (N'slider1.jpeg');
INSERT INTO slide (Anh) VALUES (N'slider2.jpg');
INSERT INTO slide (Anh) VALUES (N'slider3.jpg');
INSERT INTO slide (Anh) VALUES (N'slider4.jpg');

INSERT INTO GioiThieu(TieuDe,NoiDung,HinhAnh) VALUES(N'TỔNG QUAN VỀ CÔNG TY', 
N'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”','');
INSERT INTO GioiThieu(TieuDe,NoiDung,HinhAnh) VALUES('',N'Sed ut perspiciatis unde omnis iste natus error sit
 voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
 et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
 aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',N'anh-gioi-thieu.jpg');
INSERT INTO GioiThieu(TieuDe,NoiDung,HinhAnh) VALUES('',N'Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, 
accompanied by English versions from the 1914 translation by H. Rackham','');

insert into NhaCungCap(TenNhaCungCap,DiaChi,SoDienThoai,Email) values(N'Công ty sản xuất xe máy','114Lê Trọng Tấn','0123456789','trongtan@gmail.com');

insert into lienhe(Email,DiaChi,SoDienThoai)
values(N'Mark@gmail.com',N'139 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú','01293012390');

INSERT INTO ThuongHieu(TenThuongHieu, GioiThieu) 
VALUES(N'Honda', N'Honda là một trong những thương hiệu xe máy hàng đầu thế giới. Với hơn một thế kỷ kinh nghiệm sản xuất xe máy, Honda luôn nổi tiếng với sự đa dạng và chất lượng cao của sản phẩm. Từ các dòng xe phổ thông đến những mẫu xe phân khối lớn, Honda đều mang lại sự tin cậy và hiệu suất tốt.');

INSERT INTO ThuongHieu(TenThuongHieu, GioiThieu) 
VALUES(N'Yamaha', N'Yamaha là một trong những thương hiệu hàng đầu trong ngành công nghiệp xe máy. Với sự kết hợp giữa công nghệ tiên tiến và kiểu dáng thời trang, các mẫu xe Yamaha luôn được người tiêu dùng đánh giá cao về độ bền, hiệu suất và kiểu dáng.');

INSERT INTO ThuongHieu(TenThuongHieu, GioiThieu) 
VALUES(N'Suzuki', N'Suzuki là một thương hiệu xe máy có uy tín và lịch sử lâu đời. Với sự đa dạng trong sản phẩm từ xe tay ga đến xe côn tay và xe phân khối lớn, Suzuki đáp ứng được nhu cầu của mọi đối tượng khách hàng với giá cả hợp lý và hiệu suất tốt.');

INSERT INTO ThuongHieu(TenThuongHieu, GioiThieu) 
VALUES(N'Kawasaki', N'Kawasaki là một trong những thương hiệu xe máy nổi tiếng của Nhật Bản. Với dòng sản phẩm đa dạng từ xe côn tay đến xe off-road và sportbike, Kawasaki luôn là lựa chọn hàng đầu của những người yêu thích tốc độ và hiệu suất.');

INSERT INTO ThuongHieu(TenThuongHieu, GioiThieu) 
VALUES(N'Ducati', N'Ducati là biểu tượng của sự sang trọng và hiệu suất trong thế giới xe máy. Với các mẫu sportbike và superbike độc đáo, Ducati luôn thu hút sự chú ý của những người đam mê xe máy với thiết kế đậm chất Ý và công nghệ tiên tiến.');


INSERT INTO LoaiSanPham(TenLoaiSanPham, GioiThieu) 
VALUES(N'Xe tay ga', N'Xe tay ga là loại xe máy phổ biến được sử dụng cho mục đích đi lại hàng ngày. Với sự tiện lợi và linh hoạt trong di chuyển, xe tay ga thường được lựa chọn cho việc đi làm, đi học hoặc đi lại trong thành phố.');

INSERT INTO LoaiSanPham(TenLoaiSanPham, GioiThieu) 
VALUES(N'Xe côn tay', N'Xe côn tay là loại xe máy thể thao và linh hoạt, thích hợp cho việc di chuyển trong thành phố và trên đường cao tốc. Với thiết kế gọn nhẹ và khả năng vận hành linh hoạt, xe côn tay là sự lựa chọn của những người trẻ tuổi và đam mê tốc độ.');

INSERT INTO LoaiSanPham(TenLoaiSanPham, GioiThieu) 
VALUES(N'Xe số', N'Xe số là loại xe máy phổ biến được sử dụng cho việc đi lại hàng ngày. Với thiết kế đơn giản và dễ sử dụng, xe số thích hợp cho cả người mới học lái xe và người đi lại trong thành phố.');

INSERT INTO LoaiSanPham(TenLoaiSanPham, GioiThieu) 
VALUES(N'Xe côn tay phân khối lớn', N'Xe côn tay phân khối lớn là loại xe máy thể thao và mạnh mẽ, thích hợp cho việc đi lại trong thành phố và trên đường cao tốc. Với động cơ mạnh mẽ và khả năng vận hành tốt, xe côn tay phân khối lớn là sự lựa chọn của những người đam mê tốc độ.');

INSERT INTO LoaiSanPham(TenLoaiSanPham, GioiThieu) 
VALUES(N'Xe Adventure', N'Xe Adventure là loại xe máy đa dụng được thiết kế cho việc khám phá các địa hình địa hình đa dạng. Với khả năng vận hành trên mọi địa hình từ đường phố đến địa hình gồ ghề, xe Adventure là sự lựa chọn của những người muốn khám phá và thám hiểm.');

INSERT INTO LoaiSanPham(TenLoaiSanPham, GioiThieu) 
VALUES(N'Xe chopper', N'Xe chopper là loại xe máy độc đáo với thiết kế độc đáo và sang trọng. Với yếu tố cá nhân hóa cao, xe chopper thường được chủ xe tùy chỉnh để phản ánh phong cách và cá tính riêng.');

INSERT INTO LoaiSanPham(TenLoaiSanPham, GioiThieu) 
VALUES(N'Xe cruiser', N'Xe cruiser là loại xe máy thể thao và thoải mái, thích hợp cho việc đi lại trong thành phố và trên đường cao tốc. Với thiết kế độc đáo và thoải mái, xe cruiser là sự lựa chọn của những người yêu thích phong cách cổ điển và độc đáo.');

INSERT INTO LoaiSanPham(TenLoaiSanPham, GioiThieu) 
VALUES(N'Xe mô tô phân khối lớn', N'Xe mô tô phân khối lớn là biểu tượng của sức mạnh và tốc độ trong thế giới xe máy. Với động cơ mạnh mẽ và thiết kế thể thao, xe mô tô phân khối lớn là sự lựa chọn của những người đam mê tốc độ và cuộc sống đầy thách thức.');

INSERT INTO Menu(TenMenu,Link) VALUES (N'TRANG CHỦ',N'/');
INSERT INTO Menu(TenMenu,Link) VALUES (N'SẢN PHẨM',N'/sanpham');
INSERT INTO Menu(TenMenu,Link) VALUES(N'THƯƠNG HIỆU',N'/thuonghieu');
INSERT INTO Menu(TenMenu,Link) VALUES (N'GIỚI THIỆU',N'/gioithieu');
INSERT INTO Menu(TenMenu,Link) VALUES (N'LIÊN HỆ',N'/lienhe');

insert into SanPham(TenSP,MoTa,NgayTao,MaLoaiSanPham,MaThuongHieu,AnhDaiDien,SoLuong) values(N'HONDA Lead 110 2011',N'Honda Lead 110, với năm sản xuất 2011, 
là một mẫu xe tay ga được ưa chuộng với sự kết hợp giữa hiệu suất và tiện ích. Với động cơ mạnh mẽ, Lead 110 mang 
lại sức mạnh đáng kinh ngạc trong khi vẫn duy trì sự êm ái và dễ điều khiển trên đường phố. Với thiết kế thời trang và tiện nghi,
Lead 110 là lựa chọn lý tưởng cho 
những người đam mê sự linh hoạt và tiện lợi trong giao thông đô thị.',N'2020-12-01',1,1,'sp1.jpg',40);

insert into SanPham(TenSP,MoTa,NgayTao,MaLoaiSanPham,MaThuongHieu,AnhDaiDien,SoLuong) values(N'YAMAHA EXCITER 135',N'Yamaha Exciter 135, còn được biết đến 
với cái tên Yamaha Y15ZR ở một số thị trường, là một mẫu xe máy côn tay thể thao được ưa chuộng. Với động cơ 135cc, Exciter 135 mang lại hiệu suất mạnh mẽ 
và khả năng vận hành linh hoạt trên mọi địa hình. Thiết kế thể thao và đậm chất đường đua làm nổi bật dòng xe này, cùng với các tính năng hiện đại như hệ 
thống phanh đĩa ABS, đèn LED và
hệ thống treo điều chỉnh được. Exciter 135 là sự lựa chọn phổ biến cho những người đam mê tốc độ và phong cách đường đua.',N'2020-12-02',2,2,'sp2.jpg',40);

insert into SanPham(TenSP,MoTa,NgayTao,MaLoaiSanPham,MaThuongHieu,AnhDaiDien,SoLuong) values(N'SUZUKI GZ150 2009',N'
Suzuki GZ150 là một mẫu xe máy cruiser được sản xuất bởi hãng Suzuki, và năm sản xuất 2009 là một phiên bản của dòng này. Dựa trên thiết kế cruiser cổ điển,
GZ150 mang đến sự thoải mái và phong cách khi di chuyển trên các con đường đô thị hoặc xa lộ..','2020-12-03',7,3,'sp3.jpeg',40);

insert into SanPham(TenSP,MoTa,NgayTao,MaLoaiSanPham,MaThuongHieu,AnhDaiDien,SoLuong) values(N'Xe Mô Tô Yamaha R15 v3 175cc',N'Yamaha R15 v3 175cc là mẫu xe
mô tô thể thao nhỏ gọn và mạnh mẽ của Yamaha. Với động cơ 175cc hiệu suất cao, nó cung cấp tốc độ và công suất tăng tốc mạnh mẽ. 
Thiết kế thể thao và đèn pha LED tạo nên vẻ ngoài hấp dẫn và hiện đại. 
Với khả năng xử lý linh hoạt và hệ thống phanh đĩa an toàn, Yamaha R15 v3 175cc là sự lựa chọn lý tưởng cho những người yêu thích 
đam mê và tốc độ trên đường.','2020-12-04',4,2,'sp4.jpg',40);

insert into SanPham(TenSP,MoTa,NgayTao,MaLoaiSanPham,MaThuongHieu,AnhDaiDien,SoLuong) values(N'KTM 790 Adventure R',N'KTM 790 Adventure R: Mô tô adventure hiệu suất 
cao, phù hợp cho mọi 
địa hình với động cơ mạnh mẽ và khả năng vận hành ổn định. Thiết kế off-road và tính linh hoạt cao, là lựa chọn hoàn 
hảo cho những cuộc phiêu lưu khám phá địa hình.','2020-12-05',5,1,'sp5.jpg',40);

insert into SanPham(TenSP,MoTa,NgayTao,MaLoaiSanPham,MaThuongHieu,AnhDaiDien,SoLuong) values(N'Gz150 độ nhẹ chopper',N'GZ150 là một dòng xe máy của hãng Suzuki, 
thường được phân loại trong phân khúc cruiser hoặc chopper nhẹ. Độ nhẹ chopper thường đề cập đến việc tinh chỉnh hoặc tùy chỉnh GZ150 để mang lại vẻ ngoài 
và trải nghiệm lái xe gần giống với các mẫu xe chopper truyền thống, nhưng vẫn giữ được khả năng vận hành và tiện ích hàng ngày của một chiếc xe nhỏ hơn. 
Các tùy chỉnh 
có thể bao gồm thay đổi về yên ngồi, gắn thêm phụ kiện như gù lái, và tinh chỉnh về hình dáng và phong cách của xe 
để tạo ra một diện mạo riêng biệt và cá nhân hóa..','2020-12-06',4,3,'sp6.jpg',40);


insert into Gia(MaSanPham,NgayBD,NgayKT,DonGia) values (1,'2020-05-05','2025-07-07',20000000);
insert into Gia(MaSanPham,NgayBD,NgayKT,DonGia) values (2,'2019-01-01','2025-01-01',25000000);
insert into Gia(MaSanPham,NgayBD,NgayKT,DonGia) values (3,'2017-01-02','2025-05-20',23000000);
insert into Gia(MaSanPham,NgayBD,NgayKT,DonGia) values (4,'2014-05-05','2025-07-07',24000000);
insert into Gia(MaSanPham,NgayBD,NgayKT,DonGia) values (5,'2012-05-20','2025-07-30',25500000);
insert into Gia(MaSanPham,NgayBD,NgayKT,DonGia) values (6,'2011-04-20','2025-04-19',21000000);

insert into GiamGia(MaSanPham,PhanTram,NgayBD,NgayKT) values(1,30,'2020-05-07','2025-10-10');
insert into GiamGia(MaSanPham,PhanTram,NgayBD,NgayKT) values(2,15,'2011-11-07','2026-01-30');
insert into GiamGia(MaSanPham,PhanTram,NgayBD,NgayKT) values(3,10,'2014-08-10','2025-11-11');
insert into GiamGia(MaSanPham,PhanTram,NgayBD,NgayKT) values(4,10,'2015-12-12','2025-10-10');
insert into GiamGia(MaSanPham,PhanTram,NgayBD,NgayKT) values(5,20,'2020-05-07','2025-12-10');
insert into GiamGia(MaSanPham,PhanTram,NgayBD,NgayKT) values(6,21,'2020-05-07','2025-10-10');

insert into NguoiDung(TaiKhoan,MatKhau,Email,HoTen,NgaySinh,DiaChi,SoDienThoai,GioiTinh,AnhDaiDien,VaiTro) values(N'Admin','123456789',N'cuong31139@gmail.com',N'Nguyễn cuuong','2002-07-14','Thái bình ',
'0818147402','Nam','ad.jpg',N'Admin');


CREATE PROCEDURE sp_lay_san_pham_moi
    @p_SoLuong INT
AS
BEGIN
    SELECT TOP (@p_SoLuong) s.*, l.TenLoaiSanPham, t.TenThuongHieu,
           g.DonGia AS DonGia,
           gg.PhanTram AS PhanTram,
           CAST((g.DonGia - (g.DonGia / 100 * gg.PhanTram)) AS INT) AS GiaMoiKhiGiam
    FROM SanPham s
    INNER JOIN LoaiSanPham l ON s.MaLoaiSanPham = l.MaLoaiSanPham
    INNER JOIN ThuongHieu t ON t.MaThuongHieu = s.MaThuongHieu
    LEFT JOIN Gia g ON g.MaSanPham = s.MaSanPham
    LEFT JOIN GiamGia gg ON gg.MaSanPham = s.MaSanPham
    WHERE s.SoLuong != 0 AND
          (
            (gg.PhanTram IS NOT NULL AND GETDATE() BETWEEN gg.NgayBD AND gg.NgayKT) OR
            (gg.PhanTram IS NULL AND GETDATE() BETWEEN g.NgayBD AND g.NgayKT) OR
            (GETDATE() BETWEEN g.NgayBD AND g.NgayKT AND gg.PhanTram IS NULL)
          )
    GROUP BY s.MaSanPham, s.TenSP, s.AnhDaiDien, s.Soluong,s.MoTa,s.NgayTao, s.MaLoaiSanpham,s.MaThuongHieu,g.DonGia, 
	gg.PhanTram , l.TenLoaiSanPham, t.TenThuongHieu
    ORDER BY s.NgayTao DESC
END


CREATE PROCEDURE sp_lay_san_pham_ban_chay
    @p_SoLuong INT
AS
BEGIN
    SELECT TOP (@p_SoLuong)
        s.MaSanPham, s.TenSP, s.AnhDaiDien, s.MoTa, g.DonGia AS DonGia, gg.PhanTram AS PhanTram, 
        SUM(CT.soluong) AS SoLuong,
        CAST((g.DonGia - (g.DonGia / 100 * gg.PhanTram)) AS INT) AS GiaMoiKhiGiam
    FROM SanPham s
    INNER JOIN Gia g ON g.MaSanPham = s.MaSanPham
    LEFT JOIN GiamGia gg ON gg.MaSanPham = s.MaSanPham
    INNER JOIN ChiTietDonHang CT ON CT.MaSanPham = s.MaSanPham
    INNER JOIN donhang dh ON dh.MaDonHang = CT.MaDonHang
    WHERE 
        dh.NgayDat >= DATEADD(DAY, -30, GETDATE()) AND dh.TrangThai = 1 AND 
        (
            (gg.PhanTram IS NOT NULL AND GETDATE() BETWEEN gg.NgayBD AND gg.NgayKT) OR
            (gg.PhanTram IS NULL AND GETDATE() BETWEEN g.NgayBD AND g.NgayKT) OR
            (GETDATE() BETWEEN g.NgayBD AND g.NgayKT AND gg.PhanTram IS NULL)
        )
    GROUP BY
        s.MaSanPham, s.TenSP, s.AnhDaiDien, s.MoTa, g.DonGia, gg.PhanTram
    ORDER BY
        SoLuong DESC;
END



CREATE PROCEDURE sp_lay_san_pham_giam_gia
    @p_SoLuong INT
AS
BEGIN
    SELECT TOP (@p_SoLuong) 
        s.MaSanPham,
        s.TenSP,
        s.AnhDaiDien,
        g.DonGia AS DonGia,
        l.TenLoaiSanPham,
        t.TenThuongHieu,
        gg.PhanTram AS PhanTram,
        s.SoLuong,
        CAST((g.DonGia - (g.DonGia * gg.PhanTram / 100)) AS INT) AS GiaMoiKhiGiam
    FROM
        SanPham s
        INNER JOIN Gia g ON g.MaSanPham = s.MaSanPham
        INNER JOIN GiamGia gg ON gg.MaSanPham = s.MaSanPham
        INNER JOIN LoaiSanPham l ON s.MaLoaiSanPham = l.MaLoaiSanPham
        INNER JOIN ThuongHieu t ON t.MaThuongHieu = s.MaThuongHieu
    WHERE
        s.SoLuong != 0 AND 
        GETDATE() BETWEEN gg.NgayBD AND gg.NgayKT
    GROUP BY
        s.MaSanPham, s.TenSP, s.AnhDaiDien, g.DonGia,
        l.TenLoaiSanPham, t.TenThuongHieu, gg.PhanTram,
        s.SoLuong
    ORDER BY
        PhanTram DESC;
END


CREATE PROCEDURE sp_getall_SanPham
AS
BEGIN
    SELECT s.*, l.TenLoaiSanPham,t.TenThuongHieu ,g.DonGia FROM SanPham s
	 INNER JOIN LoaiSanPham l ON s.MaLoaiSanPham = l.MaLoaiSanPham
     INNER JOIN ThuongHieu t ON t.MaThuongHieu = s.MaThuongHieu
	 left JOIN Gia g on g.MaSanPham = s.MaSanPham
END;
GO

CREATE PROCEDURE sp_getbyid_SanPham
    @p_MaSanPham INT
AS
BEGIN
    SELECT
        s.*, 
        l.TenLoaiSanPham, 
        t.TenThuongHieu,
        g.DonGia AS DonGia,
        gg.PhanTram AS PhanTram,
        CAST((g.DonGia - (g.DonGia / 100 * gg.PhanTram)) AS INT) AS GiaMoiKhiGiam,
        (SELECT
            JSON_QUERY(
                (SELECT
                    TenThongSo AS TenThongSo,
                    MoTa AS MoTa
                FROM
                    ThongSo
                WHERE
                    MaSanPham = s.MaSanPham
                FOR JSON PATH)
            )
        ) AS listjson_thongso
    FROM
        SanPham s
        INNER JOIN LoaiSanPham l ON s.MaLoaiSanPham = l.MaLoaiSanPham
        INNER JOIN ThuongHieu t ON t.MaThuongHieu = s.MaThuongHieu
        LEFT JOIN Gia g ON g.MaSanPham = s.MaSanPham
        LEFT JOIN GiamGia gg ON gg.MaSanPham = s.MaSanPham
    WHERE
        s.MaSanPham = @p_MaSanPham;
END



CREATE PROCEDURE sp_create_SanPham
    @p_TenSP varchar(20),
    @p_MoTa nvarchar(max),
    @p_MaLoaiSanPham int,
    @p_MaThuongHieu int,
    @p_AnhDaiDien VARCHAR(200)
AS
BEGIN
    INSERT INTO SanPham
    (
        TenSP, MoTa, NgayTao, MaLoaiSanPham, MaThuongHieu, AnhDaiDien, SoLuong 
    )
    VALUES
    (
        @p_TenSP, @p_MoTa, GETDATE(), @p_MaLoaiSanPham, @p_MaThuongHieu, @p_AnhDaiDien,40 
    );
END;
GO

CREATE PROCEDURE sp_update_SanPham
    @p_MaSanPham int,
	@p_TenSP nvarchar(max),
    @p_MoTa nvarchar(max),
	@p_MaLoaiSanPham int,
    @p_MaThuongHieu int,
    @p_AnhDaiDien VARCHAR(200),
    @p_SoLuong int 
AS
BEGIN
    UPDATE SanPham
    SET
        TenSP = ISNULL(@p_TenSP, TenSP),
        MoTa = ISNULL(@p_MoTa, MoTa),
        MaLoaiSanPham = ISNULL(@p_MaLoaiSanPham, MaLoaiSanPham),
        MaThuongHieu = ISNULL(@p_MaThuongHieu, MaThuongHieu),
        AnhDaiDien = ISNULL(@p_AnhDaiDien, AnhDaiDien),
        SoLuong = ISNULL(@p_SoLuong, SoLuong)
    WHERE MaSanPham = @p_MaSanPham;
END;
GO

CREATE PROCEDURE sp_delete_SanPham
    @p_MaSanPham INT
AS
BEGIN
    DELETE FROM SanPham
    WHERE MaSanPham = @p_MaSanPham;
END;
GO


CREATE PROCEDURE sp_search_SanPham
    @p_pageindex INT,
    @p_pagesize INT,
    @p_MaSanPham INT ,
    @p_TenSP NVARCHAR(255),
    @p_TenThuongHieu NVARCHAR(255),
    @p_TenLoaiSanPham NVARCHAR(255),
    @p_MinGia INT,
    @p_MaxGia INT ,
    @p_MaThuongHieu INT ,
    @p_MaLoaiSanPham INT
AS
BEGIN
    DECLARE @start_index INT;
    DECLARE @total_count INT;

    SET @start_index = (@p_pageindex - 1) * @p_pagesize;

    SELECT @total_count = COUNT(DISTINCT s.MaSanPham)
    FROM SanPham AS s
    INNER JOIN Gia AS g ON s.MaSanPham = g.MaSanPham
    INNER JOIN ThuongHieu AS t ON s.MaThuongHieu = t.MaThuongHieu
    INNER JOIN LoaiSanPham AS l ON s.MaLoaiSanPham = l.MaLoaiSanPham
    LEFT JOIN GiamGia AS gg ON s.MaSanPham = gg.MaSanPham 
    WHERE 
    (
        (@p_MaSanPham IS NULL OR s.MaSanPham = @p_MaSanPham) AND
        (@p_MaLoaiSanPham IS NULL OR s.MaLoaiSanPham = @p_MaLoaiSanPham) AND
        (@p_MaThuongHieu IS NULL OR s.MaThuongHieu = @p_MaThuongHieu) AND
        (@p_TenSP = '' OR s.TenSP LIKE '%' + @p_TenSP + '%') AND
        (@p_TenThuongHieu = '' OR t.TenThuongHieu LIKE '%' + @p_TenThuongHieu + '%') AND
        (@p_TenLoaiSanPham = '' OR l.TenLoaiSanPham LIKE '%' + @p_TenLoaiSanPham + '%') AND
        (
            (@p_MinGia IS NULL AND @p_MaxGia IS NULL)
            OR 
            (
                @p_MinGia IS NOT NULL 
                AND @p_MaxGia IS NULL 
                AND ISNULL(gg.PhanTram, g.DonGia) >= @p_MinGia
            )
            OR (
                @p_MinGia IS NULL 
                AND @p_MaxGia IS NOT NULL 
                AND ISNULL(gg.PhanTram, g.DonGia) <= @p_MaxGia
            )
            OR (
                @p_MinGia IS NOT NULL 
                AND @p_MaxGia IS NOT NULL 
                AND ISNULL(gg.PhanTram, g.DonGia) BETWEEN @p_MinGia AND @p_MaxGia
            )
        ) AND 
        (
            (gg.PhanTram IS NOT NULL AND GETDATE() BETWEEN gg.NgayBD AND gg.NgayKT)
            OR
            (gg.PhanTram IS NULL AND GETDATE() BETWEEN g.NgayBD AND g.NgayKT)
            OR
            (GETDATE() BETWEEN g.NgayBD AND g.NgayKT AND gg.PhanTram IS NULL)
        )
    );

    SELECT @total_count AS TotalCount,
        s.MaSanPham,
        s.TenSP,
        s.AnhDaiDien,
        t.TenThuongHieu,
        l.TenLoaiSanPham,
        g.DonGia AS DonGia, 
        gg.PhanTram AS PhanTram,
        s.SoLuong, 
        CAST((g.DonGia - (g.DonGia * ISNULL(gg.PhanTram, 0) / 100)) AS INT) AS GiaMoiKhiGiam
    FROM SanPham AS s
    INNER JOIN Gia AS g ON s.MaSanPham = g.MaSanPham
    INNER JOIN ThuongHieu AS t ON s.MaThuongHieu = t.MaThuongHieu
    INNER JOIN LoaiSanPham AS l ON s.MaLoaiSanPham = l.MaLoaiSanPham
    LEFT JOIN GiamGia AS gg ON s.MaSanPham = gg.MaSanPham
    WHERE
    (
        (@p_MaSanPham IS NULL OR s.MaSanPham = @p_MaSanPham) AND
        (@p_MaLoaiSanPham IS NULL OR s.MaLoaiSanPham = @p_MaLoaiSanPham) AND
        (@p_MaThuongHieu IS NULL OR s.MaThuongHieu = @p_MaThuongHieu) AND
        (@p_TenSP = '' OR s.TenSP LIKE '%' + @p_TenSP + '%') AND
        (@p_TenThuongHieu = '' OR t.TenThuongHieu LIKE '%' + @p_TenThuongHieu + '%') AND
        (@p_TenLoaiSanPham = '' OR l.TenLoaiSanPham LIKE '%' + @p_TenLoaiSanPham + '%') AND
        (
            (@p_MinGia IS NULL AND @p_MaxGia IS NULL)
            OR 
            (
                @p_MinGia IS NOT NULL 
                AND @p_MaxGia IS NULL 
                AND ISNULL(gg.PhanTram, g.DonGia) >= @p_MinGia
            )
            OR (
                @p_MinGia IS NULL 
                AND @p_MaxGia IS NOT NULL 
                AND ISNULL(gg.PhanTram, g.DonGia) <= @p_MaxGia
            )
            OR (
                @p_MinGia IS NOT NULL 
                AND @p_MaxGia IS NOT NULL 
                AND ISNULL(gg.PhanTram, g.DonGia) BETWEEN @p_MinGia AND @p_MaxGia
            )
        ) AND 
        (
            (gg.PhanTram IS NOT NULL AND GETDATE() BETWEEN gg.NgayBD AND gg.NgayKT)
            OR
            (gg.PhanTram IS NULL AND GETDATE() BETWEEN g.NgayBD AND g.NgayKT)
            OR
            (GETDATE() BETWEEN g.NgayBD AND g.NgayKT AND gg.PhanTram IS NULL)
        )
    )
    GROUP BY s.MaSanPham, s.TenSP, s.AnhDaiDien, t.TenThuongHieu, l.TenLoaiSanPham, g.DonGia, gg.PhanTram, s.SoLuong
    ORDER BY s.MaSanPham
	OFFSET @start_index ROWS FETCH NEXT @p_pagesize ROWS ONLY;
END;

CREATE PROCEDURE sp_getall_Menu
AS
BEGIN
    SELECT * FROM Menu;
END;
GO

CREATE PROCEDURE sp_create_Menu
  @p_TenMenu varchar(40),
  @p_Link varchar(20)
AS
BEGIN
  INSERT INTO menu (TenMenu, Link)
  VALUES (@p_TenMenu, @p_Link);
END;
GO


CREATE PROCEDURE sp_update_Menu
  @p_MaMenu int,
  @p_TenMenu varchar(40),
  @p_Link varchar(20)
AS
BEGIN
  UPDATE menu
  SET
    TenMenu = ISNULL(@p_TenMenu, TenMenu),
    Link = ISNULL(@p_Link, Link)
  WHERE MaMenu = @p_MaMenu;

END;
GO

CREATE PROCEDURE sp_delete_Menu
  @p_MaMenu INT
AS
BEGIN
  DELETE FROM menu
  WHERE MaMenu = @p_MaMenu;
END;
GO


CREATE PROCEDURE sp_getall_LoaiSanPham
AS
BEGIN
    SELECT * FROM LoaiSanPham;
END;
GO


CREATE PROCEDURE sp_create_LoaiSanPham
    @p_TenLoaiSanPham VARCHAR(50),
    @p_GioiThieu varchar(100)
AS
BEGIN
    INSERT INTO LoaiSanPham (TenLoaiSanPham, GioiThieu)
    VALUES (@p_TenLoaiSanPham, @p_GioiThieu);
END;
GO


CREATE PROCEDURE sp_update_LoaiSanPham
    @p_MaLoaiSanPham INT,
    @p_TenLoaiSanPham VARCHAR(50),
    @p_GioiThieu varchar(100)
AS
BEGIN
    UPDATE LoaiSanPham
    SET
        TenLoaiSanPham = ISNULL(@p_TenLoaiSanPham, TenLoaiSanPham),
        GioiThieu = ISNULL(@p_GioiThieu, GioiThieu)
    WHERE MaLoaiSanPham = @p_MaLoaiSanPham;
END;
GO


CREATE PROCEDURE sp_delete_LoaiSanPham
    @p_MaLoaiSanPham INT
AS
BEGIN
    DELETE FROM LoaiSanPham
    WHERE MaLoaiSanPham = @p_MaLoaiSanPham;
END;
GO


CREATE PROCEDURE sp_getall_GioiThieu
AS
BEGIN
    SELECT * FROM gioithieu;
END;
GO

CREATE PROCEDURE sp_create_GioiThieu
    @p_TieuDe VARCHAR(50),
    @p_NoiDung NVARCHAR(MAX),
    @p_HinhAnh NVARCHAR(MAX)
AS
BEGIN
    INSERT INTO GioiThieu
    (
        TieuDe,
        NoiDung,
        HinhAnh
    )
    VALUES
    (
        @p_TieuDe,
        @p_NoiDung,
        @p_HinhAnh
    );
END;
GO

CREATE PROCEDURE sp_update_GioiThieu
    @p_MaGioiThieu INT,
    @p_TieuDe VARCHAR(50),
    @p_NoiDung NVARCHAR(MAX),
    @p_HinhAnh NVARCHAR(MAX)
AS
BEGIN
    UPDATE gioithieu
    SET
        TieuDe = ISNULL(@p_TieuDe, TieuDe),
        NoiDung = ISNULL(@p_NoiDung, NoiDung),
        HinhAnh = ISNULL(@p_HinhAnh, HinhAnh)
    WHERE MaGioiThieu = @p_MaGioiThieu;
    
    SELECT '';
END;
GO

CREATE PROCEDURE sp_delete_GioiThieu
    @p_MaGioiThieu INT
AS
BEGIN
    DELETE FROM GioiThieu
    WHERE MaGioiThieu = @p_MaGioiThieu;
END;
GO


CREATE PROCEDURE sp_getall_NguoiDung
AS
BEGIN
    SELECT * FROM NguoiDung;
END;
GO

CREATE PROCEDURE sp_getbyid_NguoiDung
(
    @p_MaNguoiDung INT
)
AS
BEGIN
    SELECT * FROM nguoidung nd 
    WHERE nd.MaNguoiDung = @p_MaNguoiDung;
END;
GO

CREATE PROCEDURE sp_create_NguoiDung
(
    @p_TaiKhoan NVARCHAR(55),
    @p_MatKhau NVARCHAR(500),
    @p_Email NVARCHAR(25),
    @p_HoTen NVARCHAR(50),
    @p_NgaySinh DATETIME,
    @p_GioiTinh NVARCHAR(10),
    @p_DiaChi NVARCHAR(35),
    @p_SoDienThoai NVARCHAR(15),
    @p_AnhDaiDien TEXT,
    @p_VaiTro NVARCHAR(50)

)
AS
BEGIN
    INSERT INTO NguoiDung
    (
        TaiKhoan, MatKhau, Email, HoTen, NgaySinh, GioiTinh, DiaChi, SoDienThoai, AnhDaiDien, VaiTro
    )
    VALUES
    (
        @p_TaiKhoan, @p_MatKhau, @p_Email, @p_HoTen, @p_NgaySinh, @p_GioiTinh, @p_DiaChi, @p_SoDienThoai, @p_AnhDaiDien, @p_VaiTro
    );
END
GO

CREATE PROCEDURE sp_update_NguoiDung
(
    @p_MaNguoiDung INT,
    @p_MatKhau NVARCHAR(MAX),
    @p_Email NVARCHAR(50),
    @p_HoTen NVARCHAR(50),
    @p_NgaySinh DATE,
    @p_GioiTinh NVARCHAR(10),
    @p_DiaChi NVARCHAR(35),
    @p_SoDienThoai NVARCHAR(15),
    @p_AnhDaiDien TEXT,
    @p_VaiTro NVARCHAR(25)
)
AS
BEGIN
    UPDATE nguoidung 
    SET
        MatKhau = ISNULL(@p_MatKhau, MatKhau),
        Email = ISNULL(@p_Email, Email),
        HoTen = ISNULL(@p_HoTen, HoTen),
        NgaySinh = ISNULL(@p_NgaySinh, NgaySinh),
        GioiTinh = ISNULL(@p_GioiTinh, GioiTinh),
        DiaChi = ISNULL(@p_DiaChi, DiaChi),
        SoDienThoai = ISNULL(@p_SoDienThoai, SoDienThoai),
        AnhDaiDien = ISNULL(@p_AnhDaiDien, AnhDaiDien),
        VaiTro = ISNULL(@p_VaiTro, VaiTro)
    WHERE MaNguoiDung = @p_MaNguoiDung;
END
GO

CREATE PROCEDURE sp_delete_NguoiDung
(
    @p_MaNguoiDung INT
)
AS
BEGIN
    DELETE FROM nguoidung 
    WHERE MaNguoiDung = @p_MaNguoiDung;
END
GO

CREATE PROCEDURE sp_dangnhap_NguoiDung
(
    @p_TaiKhoan VARCHAR(100),
    @p_MatKhau VARCHAR(255)
)
AS
BEGIN
    SELECT * FROM NguoiDung WHERE TaiKhoan = @p_TaiKhoan AND MatKhau = @p_MatKhau;
END
GO

CREATE PROCEDURE sp_create_donhang
    @p_HoTen varchar(50),
    @p_DiaChi varchar(50),
    @p_SoDienThoai varchar(15),
    @p_MaNguoiDung INT,
    @p_TrangThai int,
    @p_NgayGiao DATETIME,
    @p_list_json_chitiet_hoadon NVARCHAR(MAX)
AS
BEGIN
    DECLARE @p_hoadon_id INT;
    -- Chèn thông tin đơn hàng
    INSERT INTO DonHang(NgayDat, NgayGiao, HoTen, DiaChi, SoDienThoai, MaNguoiDung, TrangThai)
    VALUES (GETDATE(), @p_NgayGiao, @p_HoTen, @p_DiaChi, @p_SoDienThoai, @p_MaNguoiDung, @p_TrangThai);
    SET @p_hoadon_id = SCOPE_IDENTITY();
    -- Chèn chi tiết đơn hàng 
   IF @p_list_json_chitiet_hoadon IS NOT NULL 
BEGIN
    -- Bắt đầu giao dịch
    BEGIN TRANSACTION;
    
    INSERT INTO ChiTietDonHang(MaDonHang, MaSanPham, SoLuong, GiaTien)
    SELECT
        @p_hoadon_id,
        JSON_VALUE(chitiet.value, '$.maSanPham'),
        JSON_VALUE(chitiet.value, '$.soLuong'),
        JSON_VALUE(chitiet.value, '$.giaTien')
    FROM OPENJSON(@p_list_json_chitiet_hoadon) AS chitiet;
    -- Cập nhật số lượng trong bảng sản phẩm
    UPDATE sp
    SET sp.SoLuong = sp.SoLuong - ctdh.SoLuong
    FROM SanPham sp
    INNER JOIN ChiTietDonHang ctdh ON sp.MaSanPham = ctdh.MaSanPham
    WHERE ctdh.MaDonHang = @p_hoadon_id;

    COMMIT;
	END
END



CREATE PROCEDURE sp_getall_ThuongHieu
AS
BEGIN
    SELECT * FROM ThuongHieu;
END;
GO


CREATE PROCEDURE sp_create_ThuongHieu
    @p_TenThuongHieu VARCHAR(50),
    @p_GioiThieu TEXT
AS
BEGIN
    INSERT INTO ThuongHieu (TenThuongHieu, GioiThieu)
    VALUES (@p_TenThuongHieu, @p_GioiThieu);
END;
GO


CREATE PROCEDURE sp_update_ThuongHieu
    @p_MaThuongHieu INT,
    @p_TenThuongHieu VARCHAR(50),
    @p_GioiThieu TEXT
AS
BEGIN
    UPDATE ThuongHieu
    SET TenThuongHieu = @p_TenThuongHieu,
        GioiThieu = ISNULL(@p_GioiThieu, GioiThieu)
    WHERE MaThuongHieu = @p_MaThuongHieu;
END;
GO

CREATE PROCEDURE sp_delete_ThuongHieu
    @p_MaThuongHieu INT
AS
BEGIN
    DELETE FROM ThuongHieu
    WHERE MaThuongHieu = @p_MaThuongHieu;
END;
GO

-- Create procedure for inserting into LienHe table
CREATE PROCEDURE sp_create_LienHe
    @p_Email VARCHAR(25),
    @p_DiaChi NVARCHAR(30),
    @p_SoDienThoai VARCHAR(15)
AS
BEGIN
    INSERT INTO LienHe (Email, DiaChi, SoDienThoai)
    VALUES (@p_Email, @p_DiaChi, @p_SoDienThoai);
END;
GO

-- Create procedure for updating LienHe table
CREATE PROCEDURE sp_update_LienHe
    @p_MaLienHe INT,
    @p_Email VARCHAR(25),
    @p_DiaChi NVARCHAR(MAX),
    @p_SoDienThoai VARCHAR(15)
AS
BEGIN
    UPDATE LienHe
    SET
        Email = ISNULL(@p_Email, Email),
        DiaChi = ISNULL(@p_DiaChi, DiaChi),
        SoDienThoai = ISNULL(@p_SoDienThoai, SoDienThoai)
    WHERE MaLienHe = @p_MaLienHe;
END;
GO

-- Create procedure for deleting from LienHe table
CREATE PROCEDURE sp_delete_LienHe
    @p_MaLienHe INT
AS
BEGIN
    DELETE FROM LienHe
    WHERE MaLienHe = @p_MaLienHe;
END;
GO
