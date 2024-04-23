import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GetMenuAll } from '../services/menuService';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { logout, loginSuccess } from '../redux/slices/userSlice'
import { useNavigate } from 'react-router-dom';
const Header: React.FC = () => {
    const navige = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        getMenu();
    }, []);
    let totalQuantity: number = useSelector((state: any) => state.cart.totalQuantity);
    const user: any = useSelector((state: any) => state.user.account)
    const loggedIn = useSelector((state: any) => state.user.loggedIn);
    //console.log(a)
    const getMenu = async () => {
        try {
            const res: any = await GetMenuAll()
            console.log(res)
            setData(res ? res : []);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const onLogout = () => {
        dispatch(logout())
        navige('/')
    }

    return (
        <>
            <header className="header__navbar fixed-top">
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#000' }}>
                    <a className="navbar-brand" href="/">
                        <img src="/assets/Images/logo.jpg" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
                            {data && data.length > 0 &&
                                data.map(item => (
                                    <li className="nav-item" key={item.maMenu}>
                                        <NavLink to={item.link} >{item.tenMenu}</NavLink>
                                    </li>
                                ))}
                            {!user.taiKhoan && (
                                <>
                                    <li className="nav-item position-relative login">
                                        <span className="text-white font-weight-bold" style={{ textDecoration: 'none', cursor: 'pointer' }}>ĐĂNG NHẬP</span>
                                    </li>
                                    <li className="nav-item position-relative login">
                                        <a href="/Dang-Ky" className="font-weight-bold text-white" style={{ cursor: 'pointer' }}>ĐĂNG KÝ</a>
                                    </li>
                                </>
                            )}
                            {user.taiKhoan && (
                                <>
                                    <li style={{ width: '200px' }} className="text-right text-white position-relative">
                                        <span className="mr-2">Xin chào:</span>
                                        <span className="text-white" style={{ textDecoration: 'none', cursor: 'pointer' }} >{user.taiKhoan}</span>
                                        <div className="optionLogin">
                                            <a style={{ cursor: "pointer" }} onClick={onLogout}>Đăng xuất</a>
                                        </div>
                                    </li>
                                </>
                            )}
                            <li className="nav-item lastLi text-center position-relative GH">
                                <NavLink to="/giohang" className="position-relative cart-icon text-center"><img src="/assets/Images/bag.png" alt="Cart" /><span>{totalQuantity}</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
