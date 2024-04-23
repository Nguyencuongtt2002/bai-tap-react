import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Login } from '../services/userService';
import Swal from 'sweetalert2';
import { loginSuccess } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const DangNhap: React.FC = () => {
    const dispatch = useDispatch();
    const [taiKhoan, setTaiKhoan] = useState<string>("");
    const [matKhau, setMatKhau] = useState<string>("");
    const navige = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const obj = {
            TaiKhoan: taiKhoan,
            MatKhau: matKhau
        };
        let res: any = await Login(obj);
        console.log(res)
        dispatch(loginSuccess(res.result));
        if (res && res.result) {
            Swal.fire({
                icon: 'success',
                title: 'Login thành công!',
                showConfirmButton: true,
                timer: 1500,
                allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    navige('/');
                }
            });
        }
    };

    return (
        <div className="py-5 container__custom">
            <div className="row" id="renderSearch">
                <div className="d-flex w-100">
                    <div className="modalLeft">
                        <h2>Đăng nhập</h2>
                        <p>
                            Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích, nhận nhiều ưu đãi hấp dẫn.
                        </p>
                        <img src="assets/Images/fashionGirl.png" className="img-fluid mt-3" alt="Fashion Girl" />
                    </div>
                    <div className="modalRight m-0 d-flex justify-content-center align-items-center" style={{ marginLeft: '15px' }}>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="tenTaiKhoan">Tài khoản</label>
                                <div className="flex-column d-flex">
                                    <input type="text" autoComplete="off" placeholder="Nhập tài khoản"
                                        value={taiKhoan} onChange={(e) => setTaiKhoan(e.target.value)} id="tenTaiKhoan" name="username" />
                                    <p className="text-danger"></p>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="matKhau">Mật khẩu</label>
                                <div className="flex-column d-flex">
                                    <input type="password" autoComplete="off"
                                        placeholder="Nhập mật khẩu"
                                        value={matKhau} onChange={(e) => setMatKhau(e.target.value)}
                                        id="matKhau" name="password" />
                                    <p className="text-danger"></p>
                                </div>
                            </div>
                            <button className="btn btn-primary mr-3" type="submit">Đăng nhập</button>
                            <button className="btn btn-success" type="button" onClick={() => navige('/dang-ky')}>Đăng ký</button>
                            <p className="text-danger mt-3"></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DangNhap;
