import React from 'react';

interface TableThuongHieuProps {
    data: any[];
    hanleClickUpdate: (item: any) => void;
    hanleClickDelete: (item: any) => void;
}

const TableThuongHieu: React.FC<TableThuongHieuProps> = ({ data, hanleClickUpdate, hanleClickDelete }) => {
    return (
        <>
            <input type="text" className="form-control" placeholder="Tìm kiếm..." />

            <p>Tổng có :{data.length} thương hiệu </p>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr className="text-center">
                        <th style={{ width: "10%" }}>Mã TH</th>
                        <th style={{ width: "35%" }}>Tên TH</th>
                        <th style={{ width: "35%" }}>Giới Thiệu</th>
                        <th colSpan={2}>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 &&
                        data.map((item, index) => (
                            <tr key={index} className="text-center">
                                <td>{index + 1}</td>
                                <td>{item.tenThuongHieu}</td>
                                <td>{item.gioiThieu}</td>
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

export default TableThuongHieu;
