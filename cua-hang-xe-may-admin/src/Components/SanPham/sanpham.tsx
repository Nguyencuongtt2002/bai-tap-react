import React, { useEffect, useState } from 'react';
import ModalAddNew from './ModalAddNew';
import './sanpham.scss';
import { FcPlus } from "react-icons/fc";
import TableSanPham from './TableSanPham';
import { GetSanPhamAll } from '../../services/sanphamService';
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';

interface SanPhamProps { }

const SanPham: React.FC<SanPhamProps> = (props) => {
    const [data, setData] = useState<any[]>([]);
    const [dataEdit, setDataEdit] = useState<any>({});
    const [showModalAddNew, setShowModalAddNew] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
    const [dataDelete, setDataDelete] = useState<any>({});

    useEffect(() => {
        getAllSanPhan();
    }, []);

    const getAllSanPhan = async () => {
        try {
            const res: any = await GetSanPhamAll();
            console.log(res)
            setData(res ? res : []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const hanleClickUpdate = (item: any) => {
        console.log(item)
        setShowModalUpdate(true);
        setDataEdit(item);
    };

    const hanleClickDelete = (item: any) => {
        setShowModalDelete(true);
        setDataDelete(item);
    };

    return (
        <>
            <div className='manage-container'>
                <div className='title'>Quản Lý  Sản Phẩm</div>
                <div className='manage-content'>
                    <div className='btn-add-new'>
                        <button className='btn btn-primary' onClick={() => setShowModalAddNew(true)}> <FcPlus /> Thêm mới</button>
                    </div>
                    <div className='table-container'>
                        <TableSanPham
                            data={data}
                            hanleClickUpdate={hanleClickUpdate}
                            hanleClickDelete={hanleClickDelete}
                        />
                    </div>
                    <ModalAddNew
                        setShow={setShowModalAddNew}
                        show={showModalAddNew}
                        getAllSanPhan={getAllSanPhan}
                    />
                    <ModalUpdate
                        show={showModalUpdate}
                        setShow={setShowModalUpdate}
                        dataEdit={dataEdit}
                        setDataEdit={setDataEdit}
                        getAllSanPhan={getAllSanPhan}
                    />
                    <ModalDelete
                        show={showModalDelete}
                        setShow={setShowModalDelete}
                        dataDelete={dataDelete}
                        getAllSanPhan={getAllSanPhan}
                    />
                </div>
            </div>
        </>
    );
};

export default SanPham;
