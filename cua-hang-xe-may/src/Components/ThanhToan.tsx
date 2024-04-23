import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { CreateHoaDon } from '../services/hoadonService';
import { xoaAll } from '../redux/slices/cartSlice';
import { useNavigate } from "react-router-dom";

interface CustomerInfo {
    TenKhachHang: string;
    DiaChi: string;
    SoDienThoai: string;
    NgayGiao: string;
}

const Thanhtoan: React.FC = () => {
    const user: any = useSelector((state: any) => state.user.account)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart.items);
    const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);
    const totalPrice = useSelector((state: any) => state.cart.totalPrice);

    const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
        TenKhachHang: '',
        DiaChi: '',
        SoDienThoai: '',
        NgayGiao: ''
    });

    useEffect(() => {
        // Effect logic here
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setCustomerInfo({ ...customerInfo, [id]: value });
    };

    const handlePayment = async () => {
        const { TenKhachHang, DiaChi, SoDienThoai, NgayGiao } = customerInfo;
        const obj = {
            hoTen: TenKhachHang,
            diaChi: DiaChi,
            soDienThoai: SoDienThoai,
            maNguoiDung: Number(user.maNguoiDung),
            ngayGiao: NgayGiao,
            trangThai: 1,
            p_list_json_chitiet_hoadon: [] as Array<{ maSanPham: number; soLuong: number; giaTien: number }>
        };
        cart.forEach((sanpham: any) => {
            obj.p_list_json_chitiet_hoadon.push({
                maSanPham: parseInt(sanpham.MaSanPham),
                soLuong: parseInt(sanpham.SoLuong),
                giaTien: parseFloat(sanpham.DonGia)
            });
        });

        try {
            const response = await CreateHoaDon(obj);
            if (response) {
                alert('Thanh toán thành công! Cảm ơn quý khách đã tin tưởng sản phẩm của shop.');
                dispatch(xoaAll());
                setCustomerInfo({
                    TenKhachHang: '',
                    DiaChi: '',
                    SoDienThoai: '',
                    NgayGiao: ''
                });
                navigate("/");
            }
        } catch (error) {
            console.error('Lỗi khi thanh toán:', error);
            // Xử lý lỗi nếu cần thiết
        }
    };

    return (
        <>
            <div>
                <div id="loading" style={{ display: "none" }}><img src="/assets/Images/loadingPage.gif" alt="Loading" /></div>
                <div className="label"></div>
                <div className="py-5 container__custom">
                    <div className="row" id="renderSearch">
                        <div className="col-md-7">
                            <div className="billInfo">
                                <h3>THÔNG TIN THANH TOÁN</h3>
                                <div className="d-flex mt-3">
                                    <label>Họ và tên:</label>
                                    <input type="text" id="TenKhachHang" className="mb-2" value={customerInfo.TenKhachHang} onChange={handleChange} />
                                </div>
                                <div className="d-flex">
                                    <label>Địa chỉ giao hàng:</label>
                                    <input type="text" id="DiaChi" className="mb-2" value={customerInfo.DiaChi} onChange={handleChange} />
                                </div>
                                <div className="d-flex">
                                    <label>Ngày giao hàng:</label>
                                    <input type="date" id="NgayGiao" className="mb-2" value={customerInfo.NgayGiao} onChange={handleChange} />
                                </div>
                                <div className="d-flex">
                                    <label>Số điện thoại:</label>
                                    <input type="text" id="SoDienThoai" className="mb-2" value={customerInfo.SoDienThoai} onChange={handleChange} />
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <button className="btn btn-danger" type="submit" id="btnDatHang" onClick={handlePayment}>Xác nhận đặt hàng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 p-4" style={{ border: "2px solid red" }}>
                            <h2 className="font-weight-bold">Chi tiết đơn hàng</h2>
                            <div className="detailOrder">
                                <div className="row mt-4">
                                    <div className="col-md-8">
                                        <p className="font-weight-bold">Tổng sản phẩm</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>{totalQuantity}</p>
                                    </div>
                                </div>
                                {cart.map((item: any) => (
                                    <div className="row" key={item.id}>
                                        <div className="col-md-8">
                                            <p className="text-lowercase font-weight-bold">{item.TenSP}</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p>{(item.DonGia * item.SoLuong).toLocaleString('en-US')} VNĐ</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className="font-weight-bold">Giao hàng:</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="text-muted">Giao hàng miễn phí</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className="font-weight-bold">Phương thức thanh toán</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="text-muted">Kiểm tra thanh toán</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className="font-weight-bold">Tổng thành tiền</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>{totalPrice.toLocaleString('en-US')} VNĐ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Thanhtoan;

