import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import _ from "lodash";
import { UpdateSanPham } from "../../services/sanphamService";
const ModalUpdate = (props: any) => {
    const dispatch = useDispatch();
    const { show, setShow, dataEdit, setDataEdit, getAllSanPhan } = props;
    const [tenSP, setTenSP] = useState<string>("");
    const [moTa, setMoTa] = useState<string>("");
    const [maLoaiSanPham, setMaLoaiSanPham] = useState<string>("");
    const [maThuongHieu, setMaThuongHieu] = useState<string>("");
    const [anhDaiDien, setAnhDaiDien] = useState<string>("");
    const [donGia, setDonGia] = useState<number>(0);

    useEffect(() => {
        if (!_.isEmpty(dataEdit)) {
            setTenSP(dataEdit.tenSP)
            setMoTa(dataEdit.moTa)
            setMaLoaiSanPham(dataEdit.maLoaiSanPham)
            setMaThuongHieu(dataEdit.maThuongHieu)
            setDonGia(dataEdit.donGia)
        }
    }, [dataEdit])
    const handleClose = () => {
        setShow(false);
        setTenSP("");
        setMoTa("");
        setMaLoaiSanPham("");
        setAnhDaiDien("");
        setMaThuongHieu("");
        setDonGia(0)
        setDataEdit({});
    }
    const handleUploadImage = (event: any) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setAnhDaiDien(event.target.files[0])
        }
    }
    const hanleUpdate = async () => {
        if (!tenSP) {
            Swal.fire("Lỗi!", "Tên loại không được để trống!", "error");
            return;
        }
        const data = new FormData();
        data.append("maSanPham", dataEdit.maSanPham)
        data.append("tenSP", tenSP);
        data.append("moTa", moTa);
        data.append("maLoaiSanPham", maLoaiSanPham)
        data.append("maThuongHieu", maThuongHieu);
        data.append("file", anhDaiDien);
        //console.log(obj);
        const res = await UpdateSanPham(data);

        Swal.fire("Thành công!", "Cập nhật thành công!", "success");
        await getAllSanPhan();
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
                    <form className="row g-3" >
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Tên</label>
                            <input
                                type="text"
                                value={tenSP}
                                onChange={(event) => setTenSP(event.target.value)}
                                className="form-control"
                                id="inputEmail4"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Mô tả</label>
                            <textarea
                                value={moTa}
                                onChange={(event) => setMoTa(event.target.value)}
                                className="form-control"
                                style={{ height: "200px", resize: "none" }}
                            ></textarea>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Mã loại</label>
                            <input
                                type="text"
                                value={maLoaiSanPham}
                                onChange={(event) => setMaLoaiSanPham(event.target.value)}
                                className="form-control"
                                id="inputEmail4"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Ảnh</label>
                            <input
                                type="file"
                                onChange={handleUploadImage}
                                className="form-control"
                                id="inputPassword4"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Mã TH</label>
                            <input
                                type="text"
                                value={maThuongHieu}
                                onChange={(event) => setMaThuongHieu(event.target.value)}
                                className="form-control"
                                id="inputEmail4"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Đơn Giá</label>
                            <input
                                type="text"
                                value={donGia}
                                onChange={(event) => setDonGia(Number(event.target.value))}
                                className="form-control"
                                id="inputPassword4"
                            />
                        </div>
                    </form>
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
