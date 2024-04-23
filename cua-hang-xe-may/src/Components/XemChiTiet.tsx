import React, { useState, useEffect } from 'react';
import { GetLoaiSPAll } from '../services/loaispService';
import { Link, NavLink, useParams } from 'react-router-dom';
import { getById } from '../services/sanphamService';
import { addToCart } from '../redux/slices/cartSlice';
import { AxiosResponse } from 'axios'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
interface Product {
    maSanPham: number;
    tenSP: string;
    anhDaiDien: string;
    donGia: number;
    moTa: string;
}

const XemChiTiet: React.FC = () => {
    const [quantity, setQuantity] = useState(1);
    const navige = useNavigate();


    const { id } = useParams<{ id: string }>();
    const [loaisp, setLoaisp] = useState<any[]>([]);
    const [product, setProduct] = useState<Product | null>(null);
    const dispatch = useDispatch();
    useEffect(() => {
        getLoaiSPAll();
        getTheoMa();
    }, []);

    const getTheoMa = async () => {
        if (id) {
            let res: any = await getById(Number(id)); // Convert id to number
            setProduct(res ? res : null);
        } else {
            // Handle the case when id is undefined
            console.error('ID is undefined');
        }
    }
    const getLoaiSPAll = async () => {
        try {
            const res: any = await GetLoaiSPAll()
            setLoaisp(res ? res : []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const Themvaogio = () => {
        if (product) {
            const sanpham = {
                MaSanPham: product.maSanPham,
                TenSP: product.tenSP,
                AnhDaiDien: product.anhDaiDien,
                SoLuong: quantity,
                DonGia: product.donGia,
            };
            dispatch(addToCart(sanpham));
            alert("Sản phẩm đã được thêm vào giỏ hàng");
        } else {
            console.error('Product is undefined');
        }
    };
    return (
        <>
            <div className="label"></div>
            <div className="py-5 container__custom">
                <div className="row" id="renderSearch">
                    <div className="col-md-3">
                        <nav>
                            <ul className="menuProduct">
                                <li>
                                    <a className="tpnam_btn mb-0 listAll">Danh mục sản phẩm</a>
                                    <ul className="tpnam_show">
                                        {loaisp.map((item) => (
                                            <li key={item.maLoaiSanPham}>
                                                <Link to={`/Danhmuc/${item.maLoaiSanPham}`}>
                                                    {item.tenLoaiSanPham}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-6 text-center" >
                                <a data-lightbox="listImg">
                                    <img src={`/assets/Images/${product?.anhDaiDien}`} className="img-fluid" alt="Product Image" /> {/* Fixed image source */}
                                </a>
                                <br />
                            </div>
                            <div className="col-md-6">
                                <h2 style={{ fontWeight: '400' }} className="pb-3" >{product?.tenSP}</h2>
                                {/* Quantity input field */}
                                <div className="row">
                                    <div className="col-auto" data-aos-duration="1000">
                                        <label htmlFor="quantity" className="form-label" style={{ fontSize: '16px' }}>Số lượng:</label>
                                    </div>
                                    <div className="col-auto" data-aos-duration="1000">
                                        <input
                                            type="number"
                                            id="quantity"
                                            value={quantity}
                                            onChange={(e) => { setQuantity(parseInt(e.target.value)) }}
                                            name="quantity"
                                            min="1"
                                            className="form-control form-control-sm"
                                            style={{ fontSize: '12px', maxWidth: '80px' }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: '400' }} className="pb-3" >Giá: <span className="text-danger">{product?.donGia} VNĐ</span></h4>
                                </div>
                                <p style={{ color: 'red', fontSize: '25px' }} >Chi tiết sản phẩm</p>
                                <p className="lead">{product?.moTa}</p>
                                <button type="button" className="btnStyle btn1 mr-3" onClick={Themvaogio} >
                                    THÊM VÀO GIỎ
                                </button>
                                <button className="btnStyle btn2">
                                    <a href="/" className="text-white" style={{ textDecoration: 'none' }}>XEM THÊM SẢN PHẨM</a>
                                </button>
                                <br />
                                <br />
                                <hr />
                                <p data-aos="fade-left" data-aos-duration="1000">Mã sản phẩm: {product?.maSanPham}</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default XemChiTiet;
