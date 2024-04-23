import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import App from './App';
import Home from './Components/Home';
import XemChiTiet from './Components/XemChiTiet';
import GioiThieu from './Components/GioiThieu';
import LienHe from './Components/LienHe';
import GioHang from './Components/GioHang';
import DangNhap from './Auth/Login';
import Thanhtoan from './Components/ThanhToan';
import Danhmuc from './Components/DanhMuc';
import ThuongHieu from './Components/ThuongHieu';
import DangKy from './Auth/DangKy';
import SanPham from './Components/sanpham';

const Layout: React.FC = () => {
    return (
        <>
            <Router>
                <div className="app">
                    <div className="main">
                        <Routes>
                            <Route path="/" element={<App />}>
                                <Route index element={<Home />} />
                                <Route path='sanpham' element={<SanPham />} />
                                <Route path='XemChiTiet/:id' element={<XemChiTiet />} />
                                <Route path='gioithieu' element={<GioiThieu />} />
                                <Route path='lienhe' element={<LienHe />} />
                                <Route path='giohang' element={<GioHang />} />
                                <Route path='thanhtoan' element={<Thanhtoan />} />
                                <Route path='danhmuc/:id' element={<Danhmuc />} />
                                <Route path='thuonghieu/:id' element={<ThuongHieu />} />
                            </Route>
                            <Route path='/login' element={<DangNhap />} />
                            <Route path='/dangky' element={<DangKy />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default Layout;