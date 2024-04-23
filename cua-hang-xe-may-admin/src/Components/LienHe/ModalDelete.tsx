import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { DeleteLienHe } from '../../services/lienheService';

const ModalDelete = (props: any) => {
    const dispatch = useDispatch();
    const { show, setShow, dataDelete, getAllLienHe } = props;

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
                    const res = await DeleteLienHe(dataDelete.maLienHe);
                    if (res) {
                        Swal.fire("Thành công!", "Xóa thành công!", "success");
                        await getAllLienHe();
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
                    <Modal.Title>Xác nhận xóa  </Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn xóa liên hệ có địa chỉ:
                    {dataDelete && dataDelete.diaChi ? dataDelete.diaChi : ""} không ?</Modal.Body>
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
