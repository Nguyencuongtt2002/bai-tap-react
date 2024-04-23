import React, { useState, FormEvent } from 'react';
import { CreateNguoiDung } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function DangKy() {
    const [hoTen, setHoTen] = useState<string>('');
    const [taiKhoan, setTaiKhoan] = useState<string>('');
    const [matKhau, setMatKhau] = useState<string>('');
    const [diaChi, setDiaChi] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [soDienThoai, setSoDienThoai] = useState<string>('');

    const navige = useNavigate();

    const handleRegister = async (event: FormEvent) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('hoTen', hoTen);
        formData.append('taiKhoan', taiKhoan);
        formData.append('matKhau', matKhau);
        formData.append('DiaChi', diaChi);
        formData.append('soDienThoai', soDienThoai);
        formData.append('email', email);
        formData.append('vaiTro', 'khách hàng');
        let res = await CreateNguoiDung(formData);
        if (res) {
            Swal.fire({
                icon: 'success',
                title: 'Đăng ký thành công!',
                showConfirmButton: true,
                timer: 1500,
                allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    navige('/login');
                }
            });
        }
    };

    return (
        <div className="py-5 container__custom">
            <div className="row" id="renderSearch">
                <div className="d-flex w-100">
                    <div className="modalLeft">
                        <h2>Tạo tài khoản</h2>
                        <p>
                            Tạo tài khoản để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích, nhận nhiều ưu đãi hấp dẫn.
                        </p>
                        <img src="assets/Images/fashionGirl.png" className="img-fluid mt-3" alt="Fashion Girl" />
                    </div>
                    <div className="modalRight m-0 d-flex justify-content-center align-items-center" style={{ marginLeft: '15px' }}>
                        <form onSubmit={handleRegister}>
                            <div className="form-group d-flex align-items-center">
                                <label htmlFor="hoTen">Họ tên</label>
                                <div className="flex-column d-flex">
                                    <input type="text" id="hoTen" value={hoTen} onChange={(e) => setHoTen(e.target.value)} placeholder="Nhập họ tên" />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <label htmlFor="taiKhoan">Tài khoản</label>
                                <div className="flex-column d-flex">
                                    <input type="text" id="taiKhoan" value={taiKhoan} onChange={(e) => setTaiKhoan(e.target.value)} placeholder="Nhập tài khoản" />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <label htmlFor="matKhau">Mật khẩu</label>
                                <div className="flex-column d-flex">
                                    <input type="password" id="matKhau" value={matKhau} onChange={(e) => setMatKhau(e.target.value)} placeholder="Nhập mật khẩu" />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <label htmlFor="email">Email</label>
                                <div className="flex-column d-flex">
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email" />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <label htmlFor="diaChi">Địa chỉ</label>
                                <div className="flex-column d-flex">
                                    <input type="text" id="diaChi" value={diaChi} onChange={(e) => setDiaChi(e.target.value)} placeholder="Nhập địa chỉ" />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <label htmlFor="soDienThoai">Số điện thoại</label>
                                <div className="flex-column d-flex">
                                    <input type="text" id="soDienThoai" value={soDienThoai} onChange={(e) => setSoDienThoai(e.target.value)} placeholder="Nhập số điện thoại" />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <button className="btn btn-success" style={{ width: '400px' }} type="submit">Đăng kí</button>
                            </div>
                            <div className="form-group row mt-3">
                                <div className="col-sm-9">
                                    <p className="mt-3">Nếu bạn đã có tài khoản, <a href="/Dang-nhap-user">nhấn vào đây để đăng nhập</a>.</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DangKy;
