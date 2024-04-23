import React, { useState, useEffect } from 'react';
import { GetLoaiSPAll } from '../services/loaispService';
import { Link, NavLink, useParams } from 'react-router-dom';
import { getById } from '../services/sanphamService';
import { addToCart } from '../redux/slices/cartSlice';
import { AxiosResponse } from 'axios'
import { useDispatch } from 'react-redux';
import { GetSanPhamMoi } from '../services/sanphamService'
interface Product {
    maSanPham: number;
    tenSP: string;
    anhDaiDien: string;
    soLuong: number;
    donGia: number;
}
const SanPham: React.FC = () => {
    const [loaisp, setLoaisp] = useState<any[]>([]);
    const [data1, setData1] = useState<any[]>([]);

    const getSanPham = async () => {
        const res: any = await GetSanPhamMoi()
        setData1(res)
    };

    const getLoaiSPAll = async () => {
        try {
            const res: any = await GetLoaiSPAll()
            setLoaisp(res ? res : []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const dispatch = useDispatch();
    const Themvaogio = (MaSanPham: number, soluong: number) => {
        getById(MaSanPham).then((res: AxiosResponse<Product>) => {
            // Đảm bảo rằng bạn truy cập vào dữ liệu thực sự của phản hồi
            const productData: any = res;
            // Tiếp tục xử lý với dữ liệu sản phẩm ở đây
            const sanpham = {
                MaSanPham: productData.maSanPham,
                TenSP: productData.tenSP,
                AnhDaiDien: productData.anhDaiDien,
                SoLuong: soluong,
                DonGia: productData.donGia,
            };
            console.log(sanpham)
            dispatch(addToCart(sanpham));
            alert("Sản phẩm đã được thêm vào giỏ hàng");
        });
    };


    useEffect(() => {
        getSanPham();

        getLoaiSPAll()
    }, []);

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
                                                <Link to={`/thuonghieu/${item.maLoaiSanPham}`}>
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
                        <div className="d-flex mb-4">
                            <div className="group">
                                <input
                                    id="TimKiem"
                                    type="text"
                                    name="tenSP"
                                    autoComplete="off"
                                    required
                                />
                                <label htmlFor="TimKiem" id="find">Tìm kiếm sản phẩm</label>
                            </div>
                            <button
                                className="btnTimKiem btn000 ml-3"
                                style={{ width: '90px', height: '40px', lineHeight: '16px' }}
                            >
                                Search
                            </button>
                        </div>
                        {data1?.length === 0 && <h4 className="text-center">Sản phẩm đã hết. Xin quý khách thông cảm</h4>}
                        {data1?.length !== 0 &&
                            <div className="row">
                                {data1?.map((item, index) => (
                                    <div className="col-md-4 mb-3" key={item.maSanPham} style={{ boxShadow: "0 0 8px rgba(0,0,0,0.2)" }}>
                                        <a>
                                            <img src={'/assets/Images/' + item.anhDaiDien} style={{ width: "100%", height: "300px" }} alt="" />
                                        </a>
                                        {item.phanTram == null ? (
                                            <div id="label">New</div>
                                        ) : (
                                            <div id="label">giảm: {item.phanTram}%</div>
                                        )}
                                        <input className="btn_muangay" onClick={() => { Themvaogio(item.maSanPham, 1) }} type="button" value="MUA NGAY" />
                                        <p
                                            className="mt-2 mb-0"

                                            style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", cursor: "pointer" }}
                                        >
                                            {item.tenSP}
                                        </p>
                                        {item.phanTram == null ? (
                                            <div><span style={{ color: 'red' }}>{item?.donGia.toLocaleString()} VNĐ</span></div>
                                        ) : (
                                            <div>
                                                <del style={{ fontSize: '13px' }} className="mr-2 p-2">{item.donGia.toLocaleString()} VNĐ</del>
                                                <span style={{ color: 'red' }}>{item.giaMoiKhiGiam.toLocaleString()} VNĐ</span>
                                            </div>
                                        )}
                                        <div style={{ color: "yellow", fontSize: "13px" }} className="text-right">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <span className="text-dark ml-2 mr-2">
                                                Đã bán 5,2k
                                                <svg height="12" viewBox="0 0 20 12" width="20" className="shopee-svg-icon icon-free-shipping">
                                                    <g fill="none" fillRule="evenodd" transform="">
                                                        <rect fill="#00bfa5" fillRule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                                                        <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect>
                                                        <rect fill="#00bfa5" fillRule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect>
                                                        <rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                                                        <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle>
                                                        <circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                                                        <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path>
                                                        <path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                        <path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                                                        <circle cx="8" cy="10" fill="#047565" r="1"></circle>
                                                        <circle cx="15" cy="10" fill="#047565" r="1"></circle>
                                                    </g>
                                                </svg>
                                            </span>
                                            <div className="text-dark my-2">
                                                Hồ chí Minh
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default SanPham;
