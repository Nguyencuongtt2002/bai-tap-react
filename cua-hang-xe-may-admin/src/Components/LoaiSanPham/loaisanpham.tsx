import React, { useEffect, useState } from 'react';
import ModalAddNew from './ModalAddNew';
import './loaisp.scss';
import { FcPlus } from "react-icons/fc";
import TableLoaiSanPham from './TableLoaiSanPham';
import { GetLoaiSPAll } from '../../services/loaispService';
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';

interface LoaiSanPhamProps { }

const LoaiSanPham: React.FC<LoaiSanPhamProps> = (props) => {
    const [data, setData] = useState<any[]>([]);
    const [dataLoaispEdit, setDataLoaispEdit] = useState<any>({});
    const [showModalAddNew, setShowModalAddNew] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
    const [dataLoaispDelete, setDataLoaispDelete] = useState<any>({});

    useEffect(() => {
        getAllLoaiSanPhan();
    }, []);

    const getAllLoaiSanPhan = async () => {
        try {
            const res: any = await GetLoaiSPAll();
            setData(res ? res : []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const hanleClickUpdate = (item: any) => {
        console.log(item)
        setShowModalUpdate(true);
        setDataLoaispEdit(item);
    };

    const hanleClickDelete = (item: any) => {
        setShowModalDelete(true);
        setDataLoaispDelete(item);
    };

    return (
        <>
            <div className='manage-container'>
                <div className='title'>Quản Lý Loại Sản Phẩm</div>
                <div className='manage-content'>
                    <div className='btn-add-new'>
                        <button className='btn btn-primary' onClick={() => setShowModalAddNew(true)}> <FcPlus /> Thêm mới</button>
                    </div>
                    <div className='table-container'>
                        <TableLoaiSanPham
                            data={data}
                            hanleClickUpdate={hanleClickUpdate}
                            hanleClickDelete={hanleClickDelete}
                        />
                    </div>
                    <ModalAddNew
                        setShow={setShowModalAddNew}
                        show={showModalAddNew}
                        getAllLoaiSanPhan={getAllLoaiSanPhan}
                    />
                    <ModalUpdate
                        show={showModalUpdate}
                        setShow={setShowModalUpdate}
                        dataLoaispEdit={dataLoaispEdit}
                        setDataLoaispEdit={setDataLoaispEdit}
                        getAllLoaiSanPhan={getAllLoaiSanPhan}
                    />
                    <ModalDelete
                        show={showModalDelete}
                        setShow={setShowModalDelete}
                        dataLoaispDelete={dataLoaispDelete}
                        getAllLoaiSanPhan={getAllLoaiSanPhan}
                    />
                </div>
            </div>
        </>
    );
};

export default LoaiSanPham;
