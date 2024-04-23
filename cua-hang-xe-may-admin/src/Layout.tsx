import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Admin from './Layout/Admin/Admin';
import LoaiSanPham from './Components/LoaiSanPham/loaisanpham';
import ThuongHieu from './Components/ThuongHieu/thuonghieu';
import SanPham from './Components/SanPham/sanpham';
import LienHe from './Components/LienHe/lienhe';
import DangNhap from './Auth/Login';
import Dashboard from './Components/DashBoard';

const Layout: React.FC = () => {
    return (
        <>
            <Router>
                <div className="app">
                    <div className="main">
                        <Routes>
                            <Route path="" element={<Admin />}>
                                <Route index element={<Dashboard />} />
                                <Route path='ad-loaisp' element={<LoaiSanPham />} />
                                <Route path='ad-thuonghieu' element={<ThuongHieu />} />
                                <Route path='ad-sanpham' element={<SanPham />} />
                                <Route path='ad-lienhe' element={<LienHe />} />
                            </Route>
                            <Route path='/login' element={<DangNhap />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default Layout;