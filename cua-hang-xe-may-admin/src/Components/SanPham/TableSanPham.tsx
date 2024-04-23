import React from 'react';

interface TableSanPhamProps {
    data: any[];
    hanleClickUpdate: (item: any) => void;
    hanleClickDelete: (item: any) => void;
}
const TableSanPham: React.FC<TableSanPhamProps> = ({ data, hanleClickUpdate, hanleClickDelete }) => {
    return (
        <>
            <input type="text" className="form-control" placeholder="Tìm kiếm..." />

            <p>Tổng có :{data.length}  sản phẩm </p>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr className="text-center">
                        <th >#</th>
                        <th >Tên</th>
                        <th> Mô tả</th>
                        <th>Ngày Tạo</th>
                        <th>Tên loại</th>
                        <th>Tên TH</th>
                        <th>Ảnh</th>
                        <th>SL</th>
                        <th>Đơn Giá</th>
                        <th colSpan={2}>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 &&
                        data.map((item, index) => (
                            <tr key={index} className="text-center">
                                <td>{index + 1}</td>
                                <td style={{ width: "15%" }}>{item.tenSP}</td>
                                <td style={{ width: "35%" }}>{item.moTa}</td>
                                <td>{new Date(item.ngayTao).toLocaleDateString()}</td>
                                <td style={{ width: "15%" }}>{item.tenLoaiSanPham}</td>
                                <td style={{ width: "15%" }}>{item.tenThuongHieu}</td>
                                <td>
                                    <img src={'/assets/Images/' + item.anhDaiDien} style={{ width: "50px", height: "50px" }} alt="" />
                                </td>
                                <td>{item.soLuong}</td>
                                <td>{(isNaN(parseFloat(item.donGia)) || item.donGia === null ? 0 : parseFloat(item.donGia)).toLocaleString()} đ</td>
                                <td className="w-100" colSpan={2}>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-primary mx-1 btn-xs"
                                            onClick={() => hanleClickUpdate(item)}
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger mx-1 btn-xs"
                                            onClick={() => hanleClickDelete(item)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};

export default TableSanPham;
