import React, { useEffect, useState } from 'react';
import ModalAddNew from './ModalAddNew';
import './lienhe.scss';
import { FcPlus } from "react-icons/fc";
import TableLienHe from './TableLienHe';
import { GetLienHeAll } from '../../services/lienheService';
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';

interface LienHeProps { }

const LienHe: React.FC<LienHeProps> = (props) => {
    const [data, setData] = useState<any[]>([]);
    const [dataEdit, setDataEdit] = useState<any>({});
    const [showModalAddNew, setShowModalAddNew] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
    const [dataDelete, setDataDelete] = useState<any>({});

    useEffect(() => {
        getAllLienHe();
    }, []);

    const getAllLienHe = async () => {
        try {
            const res: any = await GetLienHeAll();
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
                <div className='title'>Quản Lý Liên hệ</div>
                <div className='manage-content'>
                    <div className='btn-add-new'>
                        <button className='btn btn-primary' onClick={() => setShowModalAddNew(true)}> <FcPlus /> Thêm mới</button>
                    </div>
                    <div className='table-container'>
                        <TableLienHe
                            data={data}
                            hanleClickUpdate={hanleClickUpdate}
                            hanleClickDelete={hanleClickDelete}
                        />
                    </div>
                    <ModalAddNew
                        setShow={setShowModalAddNew}
                        show={showModalAddNew}
                        getAllLienHe={getAllLienHe}
                    />
                    <ModalUpdate
                        show={showModalUpdate}
                        setShow={setShowModalUpdate}
                        dataEdit={dataEdit}
                        setDataEdit={setDataEdit}
                        getAllLienHe={getAllLienHe}
                    />
                    <ModalDelete
                        show={showModalDelete}
                        setShow={setShowModalDelete}
                        dataDelete={dataDelete}
                        getgetAllLienHeAllLoaiSanPhan={getAllLienHe}
                    />
                </div>
            </div>
        </>
    );
};

export default LienHe;
