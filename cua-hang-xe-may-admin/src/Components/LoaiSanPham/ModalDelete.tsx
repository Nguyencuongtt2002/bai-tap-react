import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { DeleteLoaiSanPham } from '../../services/loaispService';

const ModalDelete = (props: any) => {
    const dispatch = useDispatch();
    const { show, setShow, dataLoaispDelete, getAllLoaiSanPhan } = props;

    const handleClose = () => {
        setShow(false);
    }

    const hanleSubmitDelete = async () => {
        // Hiển thị một cửa sổ xác nhận với SweetAlert
        Swal.fire({
            title: "Bạn chắc chắn muốn xóa?",
            text: "Hành động này sẽ xóa loại sản phẩm!",
            icon: "warning",
            buttons: ["Hủy", "Xóa"],
            dangerMode: true,
        } as any)

            .then(async (result) => {
                if (result.isConfirmed) {
                    const res = await DeleteLoaiSanPham(dataLoaispDelete.maLoaiSanPham);
                    if (res) {
                        Swal.fire("Thành công!", "Xóa thành công!", "success");
                        await getAllLoaiSanPhan();
                        handleClose();
                    }
                } else {
                    Swal.fire("Hủy", "Dữ liệu không bị xóa :)", "info");
                }
            });
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa loại sản phẩm </Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn xóa loại sản phẩm:
                    {dataLoaispDelete && dataLoaispDelete.tenLoaiSanPham ? dataLoaispDelete.tenLoaiSanPham : ""} không ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hanleSubmitDelete}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;
