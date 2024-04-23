import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import { CreateTH } from "../../services/thuongHieuSerice";
import { toast } from "react-toastify";
const ModalAddNew = (props: any) => {
    const { show, setShow } = props;
    const [tenThuongHieu, setTenThuongHieu] = useState("");
    const [gioiThieu, setGioiThieu] = useState("");
    const handleClose = () => {
        setShow(false);
        setTenThuongHieu("");
        setGioiThieu("")
    }

    const hanleCreate = async () => {
        if (!tenThuongHieu) {
            // Swal.fire({
            //     icon: 'error',
            //     text: 'Tên loại không được để trống',
            // });
            toast.error("cg")
            return;
        }

        const obj = {
            tenThuongHieu: tenThuongHieu,
            gioiThieu: gioiThieu

        };

        let res = await CreateTH(obj);
        console.log(res);

        if (res) {
            Swal.fire({
                icon: 'success',
                text: 'Thêm thành công!',
            }).then(async () => {
                handleClose();
                await props.getAllThuongHieu();
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
                        <label className="col-md-12 control-label">Tên TH :</label>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <input type="text" id="idTenLoaiSanPham"
                                className="form-control" name="TenLoaiSanPham"
                                value={tenThuongHieu}
                                onChange={(event) => setTenThuongHieu(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-12 control-label">Giới Thiệu :</label>
                    </div>
                    <textarea
                        value={gioiThieu}
                        onChange={(event) => setGioiThieu(event.target.value)}
                        id="idTenLoaiSanPham"
                        className="form-control"
                        style={{ height: "200px", resize: "none" }}

                    ></textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hanleCreate}>
                        Thêm mới
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAddNew;
