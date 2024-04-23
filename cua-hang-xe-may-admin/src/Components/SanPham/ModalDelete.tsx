import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { DeleteSanPham } from '../../services/sanphamService';

const ModalDelete = (props: any) => {
    const dispatch = useDispatch();
    const { show, setShow, dataDelete, getAllSanPhan } = props;

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
                    console.log(dataDelete)
                    const res = await DeleteSanPham(dataDelete.maSanPham);
                    if (res) {
                        Swal.fire("Thành công!", "Xóa thành công!", "success");
                        await getAllSanPhan();
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
                    <Modal.Title>Xác nhận xóa sản phẩm </Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn xóa sản phẩm:
                    {dataDelete && dataDelete.tenSP ? dataDelete.tenSP : ""} không ?</Modal.Body>
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
