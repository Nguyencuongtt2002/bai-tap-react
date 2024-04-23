import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { xoa1sp, xoaAll, tangSoLuong, giamSoLuong } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const GioHang: React.FC = () => {
    const dispatch = useDispatch();

    const deleteGioHang = (MaSanPham: number) => {
        dispatch(xoa1sp(MaSanPham))
    }

    const deleteAllGioHang = () => {
        dispatch(xoaAll())
    }

    const TangGioHang = (id: number) => {
        dispatch(tangSoLuong(id))
    }

    const giamGioHang = (id: number) => {
        dispatch(giamSoLuong(id))
    }

    const items = useSelector((state: any) => state.cart.items);
    let totalQuantity = useSelector((state: any) => state.cart.totalQuantity);
    console.log(totalQuantity)
    let totalPrice = useSelector((state: any) => state.cart.totalPrice);

    return (
        <>
            <div className="label"></div>
            <table className="table table-bordered table-hover" style={{ marginTop: "50px" }}>
                <thead className="thead-dark">
                    <tr className="text-center">
                        <th style={{ width: "10%" }}>Mã sản phẩm</th>
                        <th style={{ width: "22%" }}>Tên sản phẩm</th>
                        <th style={{ width: "15%" }}>Hình ảnh</th>
                        <th style={{ width: "13%" }}>Số lượng</th>
                        <th style={{ width: "15%" }}>Đơn giá</th>
                        <th style={{ width: "15%" }}>Thành tiền</th>
                        <th style={{ width: "10%" }} className="text-center">
                            <button className="btn btn-danger" onClick={() => { deleteAllGioHang() }}>
                                <span className="text-white" style={{ textDecoration: "none" }}>Xóa tất cả</span>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((gh: any) => (
                        <tr className="text-center" key={gh.MaSanPham}>
                            <td>{gh.MaSanPham}</td>
                            <td>{gh.TenSP}</td>
                            <td style={{ textAlign: "center" }}>
                                <a href="" data-lightbox="listImg">
                                    <img src={`/assets/Images/${gh.AnhDaiDien}`} height="70" alt="" />
                                </a>
                            </td>
                            <td style={{ textAlign: "center" }}>
                                <div className="input-group">
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" onClick={() => TangGioHang(gh.MaSanPham)} type="button"><i className="fa fa-caret-up"></i></button>
                                    </div>
                                    <input className="form-control col-6" type="number" value={gh.SoLuong} readOnly max="" style={{ textAlign: "center" }} />
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" onClick={() => giamGioHang(gh.MaSanPham)} type="button"><i className="fa fa-caret-down"></i></button>
                                    </div>
                                </div>
                            </td>
                            <td>{gh.DonGia} VNĐ</td>
                            <td>{gh.DonGia * gh.SoLuong} VNĐ</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteGioHang(gh.MaSanPham)}>
                                    <span className="text-white" style={{ textDecoration: "none" }}>Xóa</span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4} className="text-right">
                            Tổng cộng: <span className="text-danger">{totalQuantity}</span>
                        </td>
                        <td colSpan={2} className="text-right font-weight-bold">Tổng thành tiền:</td>
                        <td colSpan={2} className="text-right">
                            <span className="text-danger font-weight-bold">{totalPrice} VND</span>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="text-right">
                            <button className="btn btn-info" type="submit" id="btnUpdateQuantity">
                                <a href="" style={{ color: "white", textDecoration: "none" }}>Tiếp tục mua hàng</a>
                            </button>
                        </td>
                        <td colSpan={4} className="text-right">
                            <Link to="/thanhtoan" className="btn btn-outline-danger">Đặt hàng</Link>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default GioHang;
