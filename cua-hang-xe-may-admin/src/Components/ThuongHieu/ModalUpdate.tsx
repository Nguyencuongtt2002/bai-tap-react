import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import _ from "lodash";
import { UpdateTH } from "../../services/thuongHieuSerice";
const ModalUpdate = (props: any) => {
    const dispatch = useDispatch();
    const { show, setShow, dataEdit, setDataEdit, getAllThuongHieu } = props;
    const [tenThuongHieu, setTenThuongHieu] = useState("");
    const [gioiThieu, setGioiThieu] = useState("");

    useEffect(() => {
        if (!_.isEmpty(dataEdit)) {
            setTenThuongHieu(dataEdit.tenThuongHieu)
            setGioiThieu(dataEdit.gioiThieu)
        }
    }, [dataEdit])
    const handleClose = () => {
        setShow(false);
        setTenThuongHieu("");
        setGioiThieu("")
        setDataEdit({});
    }

    const hanleUpdateLoaisp = async () => {
        if (!tenThuongHieu) {
            Swal.fire("Lỗi!", "Tên loại không được để trống!", "error");
            return;
        }
        const obj = {
            maThuongHieu: dataEdit.maThuongHieu,
            tenThuongHieu: tenThuongHieu,
            gioiThieu: gioiThieu
        };
        console.log(obj);
        const res = await UpdateTH(obj);

        Swal.fire("Thành công!", "Cập nhật thành công!", "success");
        await getAllThuongHieu();
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
                        <label className="col-md-12 control-label">Tên Loại Sản Phẩm :</label>
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
                    <Button variant="primary" onClick={hanleUpdateLoaisp}>
                        Cập nhật
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdate;
