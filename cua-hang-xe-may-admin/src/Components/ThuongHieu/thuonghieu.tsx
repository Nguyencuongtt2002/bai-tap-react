import React, { useEffect, useState } from 'react';
import ModalAddNew from './ModalAddNew';
import './thuonghieu.scss';
import { FcPlus } from "react-icons/fc";
import TableThuongHieu from './TableThuongHieu';
import { GetAllTH } from '../../services/thuongHieuSerice';
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';

interface ThuongHieuProps { }

const ThuongHieu: React.FC<ThuongHieuProps> = (props) => {
    const [data, setData] = useState<any[]>([]);
    const [dataEdit, setDataEdit] = useState<any>({});
    const [showModalAddNew, setShowModalAddNew] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
    const [dataDelete, setDataDelete] = useState<any>({});

    useEffect(() => {
        getAllThuongHieu();
    }, []);

    const getAllThuongHieu = async () => {
        try {
            const res: any = await GetAllTH();
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
                <div className='title'>Quản Lý Thương hiệu</div>
                <div className='manage-content'>
                    <div className='btn-add-new'>
                        <button className='btn btn-primary' onClick={() => setShowModalAddNew(true)}> <FcPlus /> Thêm mới</button>
                    </div>
                    <div className='table-container'>
                        <TableThuongHieu
                            data={data}
                            hanleClickUpdate={hanleClickUpdate}
                            hanleClickDelete={hanleClickDelete}
                        />
                    </div>
                    <ModalAddNew
                        setShow={setShowModalAddNew}
                        show={showModalAddNew}
                        getAllThuongHieu={getAllThuongHieu}
                    />
                    <ModalUpdate
                        show={showModalUpdate}
                        setShow={setShowModalUpdate}
                        dataEdit={dataEdit}
                        setDataEdit={setDataEdit}
                        getAllThuongHieu={getAllThuongHieu}
                    />
                    <ModalDelete
                        show={showModalDelete}
                        setShow={setShowModalDelete}
                        dataDelete={dataDelete}
                        getAllThuongHieu={getAllThuongHieu}
                    />
                </div>
            </div>
        </>
    );
};

export default ThuongHieu;
