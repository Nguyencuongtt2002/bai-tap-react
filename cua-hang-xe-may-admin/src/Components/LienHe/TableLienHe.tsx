import React from 'react';

interface TableLoaiSanPhamProps {
    data: any[];
    hanleClickUpdate: (item: any) => void;
    hanleClickDelete: (item: any) => void;
}

const TableLoaiSanPham: React.FC<TableLoaiSanPhamProps> = ({ data, hanleClickUpdate, hanleClickDelete }) => {
    return (
        <>
            <input type="text" className="form-control" placeholder="Tìm kiếm..." />

            <p>Tổng có :{data.length} liên hệ </p>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr className="text-center">
                        <th style={{ width: "10%" }}>Mã</th>
                        <th style={{ width: "20%" }}>Email</th>
                        <th style={{ width: "40%" }}>Địa Chỉ </th>
                        <th style={{ width: "15%" }}>SĐT</th>
                        <th colSpan={2}>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 &&
                        data.map((item, index) => (
                            <tr key={index} className="text-center">
                                <td>{index + 1}</td>
                                <td>{item.email}</td>
                                <td>{item.diaChi}</td>
                                <td>{item.soDienThoai}</td>
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

export default TableLoaiSanPham;
