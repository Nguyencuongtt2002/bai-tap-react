import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react';
import { GetSanPhamMoi, getById, GetSanPhamGG, GetSanPhamBC } from '../services/sanphamService';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
interface Product {
    maSanPham: number;
    tenSP: string;
    anhDaiDien: string;
    soLuong: number;
    donGia: number;
}
const Home: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [data1, setData1] = useState<any[]>([])
    const [data2, setData2] = useState<any[]>([])
    const navigate = useNavigate();
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
        getSanPhamMoi();
        getSanPhamGG();
        getSanPhamBC();
    }, []);

    const getSanPhamMoi = async () => {
        try {
            const res: any = await GetSanPhamMoi(); // Xác định kiểu dữ liệu của res là một mảng các đối tượng Product
            setData(res || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const getSanPhamGG = async () => {
        try {
            const res1: any = await GetSanPhamGG();
            console.log("vv", res1);
            setData1(res1 || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const getSanPhamBC = async () => {
        try {
            const res1: any = await GetSanPhamBC();
            setData2(res1 || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <>
            <section className="content">
                <div className="banner" style={{ marginTop: '70px' }}>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="assets/Images/slider1.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="assets/Images/slider2.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="assets/Images/slider3.jpg" alt="Third slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="assets/Images/slider4.jpg" alt="Fourth slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <section className="product mt-5">
                    <div className="container__custom">
                        <h4 className="mt-3">SẢN PHẨM MỚI</h4>
                        <div className="row">
                            {data && data.length > 0 &&
                                data.map(item => (
                                    <div className="col-md-3 mb-2" key={item.maSanPham} style={{ boxShadow: "0 0 8px rgba(0,0,0,0.2)" }}>
                                        <a>
                                            <img src={'/assets/Images/' + item.anhDaiDien} style={{ width: "100%", height: "300px" }} alt="" />
                                        </a>
                                        {item.phanTram == null ? (
                                            <div id="label">New</div>
                                        ) : (
                                            <div id="label">giảm: {item.phanTram}%</div>
                                        )}
                                        <input className="btn_muangay" type="button" value="MUA NGAY" onClick={() => { Themvaogio(item.maSanPham, 1) }} />
                                        <p
                                            className="mt-2 mb-0"
                                            onClick={() => navigate(`/XemChiTiet/${item.maSanPham}`)}
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
                    </div>


                    <div className="container__custom">
                        <h4 className="mt-3">SẢN PHẨM BÁN CHẠY</h4>
                        <div className="row">
                            {data2 && data2.length > 0 &&
                                data2.map(item => (
                                    <div className="col-md-3 mb-2" key={item.maSanPham} style={{ boxShadow: "0 0 8px rgba(0,0,0,0.2)" }}>
                                        <a>
                                            <img src={'/assets/Images/' + item.anhDaiDien} style={{ width: "100%", height: "300px" }} alt="" />
                                        </a>
                                        <input className="btn_muangay" type="button" value="MUA NGAY" onClick={() => { Themvaogio(item.maSanPham, 1) }} />
                                        <p
                                            className="mt-2 mb-0"
                                            onClick={() => navigate(`/XemChiTiet/${item.maSanPham}`)}
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
                    </div>
                    <div className="container__custom">
                        <h4 className="mt-3">SẢN PHẨM GIẢM GIÁ</h4>
                        <div className="row">
                            {data1 && data1.length > 0 &&
                                data1.map(item => (
                                    <div className="col-md-3 mb-2" key={item.maSanPham} style={{ boxShadow: "0 0 8px rgba(0,0,0,0.2)" }}>
                                        <a>
                                            <img src={'/assets/Images/' + item.anhDaiDien} style={{ width: "100%", height: "300px" }} alt="" />
                                        </a>
                                        {item.phanTram !== null ? (
                                            <div id="label">giảm: {item.phanTram}%</div>
                                        ) : (
                                            <div id="label">New</div>
                                        )}
                                        <input className="btn_muangay" type="button" value="MUA NGAY" onClick={() => { Themvaogio(item.maSanPham, 1) }} />
                                        <p
                                            className="mt-2 mb-0"
                                            onClick={() => navigate(`/XemChiTiet/${item.maSanPham}`)}
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
                    </div>
                </section>
            </section>
        </>
    );
};

export default Home;
