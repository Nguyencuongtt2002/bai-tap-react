import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import { CreateSanPham } from "../../services/sanphamService";
import { toast } from "react-toastify";
const ModalAddNew = (props: any) => {
    const { show, setShow } = props;
    const [tenSP, setTenSP] = useState<string>("");
    const [moTa, setMoTa] = useState<string>("");
    const [maLoaiSanPham, setMaLoaiSanPham] = useState<string>("");
    const [maThuongHieu, setMaThuongHieu] = useState<string>("");
    const [anhDaiDien, setAnhDaiDien] = useState<string>("");
    const [donGia, setDonGia] = useState<number>(0);

    const handleClose = () => {
        setShow(false);
        setTenSP("");
        setMoTa("");
        setMaLoaiSanPham("");
        setAnhDaiDien("");
        setDonGia(0)
    }
    const handleUploadImage = (event: any) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setAnhDaiDien(event.target.files[0])
        }
    }
    const hanleCreateLoaisp = async () => {
        if (!tenSP) {
            // Swal.fire({
            //     icon: 'error',
            //     text: 'Tên loại không được để trống',
            // });
            toast.error("cg")
            return;
        }

        const data = new FormData();
        data.append("tenSP", tenSP);
        data.append("moTa", moTa);
        data.append("maLoaiSanPham", maLoaiSanPham);
        data.append("maThuongHieu", maThuongHieu);
        data.append("file", anhDaiDien);
        data.append("donGia", String(donGia)); // Convert to string

        let res = await CreateSanPham(data);
        console.log(res);

        if (res) {
            Swal.fire({
                icon: 'success',
                text: 'Thêm thành công!',
            }).then(async () => {
                handleClose();
                await props.getAllSanPhan();
            });
        }
    }

    return (
        <>

            <Modal show={show}
                size={"xl"}
                onHide={handleClose}
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới</Modal.Title>
                </Modal.Header>
                <Modal.Body >
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
                    <Button variant="primary" onClick={hanleCreateLoaisp}>
                        Thêm mới
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default ModalAddNew;
