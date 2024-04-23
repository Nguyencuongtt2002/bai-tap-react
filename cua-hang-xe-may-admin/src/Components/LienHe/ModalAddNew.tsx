import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import { CreateLienHe } from "../../services/lienheService";
import { toast } from "react-toastify";
const ModalAddNew = (props: any) => {
    const { show, setShow } = props;
    const [email, setEmail] = useState<string>("");
    const [diaChi, setDiaChi] = useState<string>("");
    const [soDienThoai, setSoDienThoai] = useState<string>("");
    const handleClose = () => {
        setShow(false);
        setEmail("");
        setDiaChi("");
        setSoDienThoai("");
    }

    const hanleCreateLoaisp = async () => {
        if (!email) {
            // Swal.fire({
            //     icon: 'error',
            //     text: 'Tên loại không được để trống',
            // });
            toast.error("cg")
            return;
        }

        const obj = {
            email: email,
            diaChi: diaChi,
            soDienThoai: soDienThoai

        };

        let res = await CreateLienHe(obj);
        console.log(res);

        if (res) {
            Swal.fire({
                icon: 'success',
                text: 'Thêm thành công!',
            }).then(async () => {
                handleClose();
                await props.getAllLienHe();
            });
        }
    }

    return (
        <>

            <Modal show={show}
                //size="xl"
                onHide={handleClose}
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group row">
                        <label className="col-md-12 control-label">Email :</label>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <input type="text" id="idTenLoaiSanPham"
                                className="form-control" name="TenLoaiSanPham"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-12 control-label">Địa Chỉ :</label>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <input type="text" id="idTenLoaiSanPham"
                                className="form-control" name="TenLoaiSanPham"
                                value={diaChi}
                                onChange={(event) => setDiaChi(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-12 control-label">SĐT :</label>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <input type="text" id="idTenLoaiSanPham"
                                className="form-control" name="TenLoaiSanPham"
                                value={soDienThoai}
                                onChange={(event) => setSoDienThoai(event.target.value)}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hanleCreateLoaisp}>
                        Thêm mới
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAddNew;
