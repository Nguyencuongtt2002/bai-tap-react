import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import _ from "lodash";
import { UpdateLienHe } from "../../services/lienheService";
const ModalUpdate = (props: any) => {
    const dispatch = useDispatch();
    const { show, setShow, dataEdit, setDataEdit, getAllLienHe } = props;
    const [email, setEmail] = useState<string>("");
    const [diaChi, setDiaChi] = useState<string>("");
    const [soDienThoai, setSoDienThoai] = useState<string>("");
    useEffect(() => {
        if (!_.isEmpty(dataEdit)) {
            setEmail(dataEdit.email)
            setDiaChi(dataEdit.diaChi)
            setSoDienThoai(dataEdit.soDienThoai)
        }
    }, [dataEdit])
    const handleClose = () => {
        setShow(false);
        setEmail("");
        setDiaChi("");
        setSoDienThoai("");
    }

    const hanleUpdate = async () => {
        if (!email) {
            Swal.fire("Lỗi!", "Tên loại không được để trống!", "error");
            return;
        }
        const obj = {
            maLienHe: dataEdit.maLienHe,
            email: email,
            diaChi: diaChi,
            soDienThoai: soDienThoai
        };
        console.log(obj);
        const res = await UpdateLienHe(obj);
        console.log(res)
        Swal.fire("Thành công!", "Cập nhật thành công!", "success");
        await getAllLienHe();
        handleClose();
    }
    return (
        <>

            <Modal show={show}
                onHide={handleClose}
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật </Modal.Title>
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
                    <Button variant="primary" onClick={hanleUpdate}>
                        Cập nhật
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdate;
