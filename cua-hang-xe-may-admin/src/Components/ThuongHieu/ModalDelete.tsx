import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { DeleteTH } from '../../services/thuongHieuSerice';

const ModalDelete = (props: any) => {
    console.log(props)
    const dispatch = useDispatch();
    const { show, setShow, dataDelete, getAllThuongHieu } = props;

    const handleClose = () => {
        setShow(false);
    }

    const hanleSubmitDelete = async () => {
        // Hiển thị một cửa sổ xác nhận với SweetAlert
        Swal.fire({
            title: "Bạn chắc chắn muốn xóa?",
            text: "Hành động này sẽ xóa !",
            icon: "warning",
            buttons: ["Hủy", "Xóa"],
            dangerMode: true,
        } as any)

            .then(async (result) => {
                if (result.isConfirmed) {
                    console.log(dataDelete.maThuongHieu)
                    const res = await DeleteTH(dataDelete.maThuongHieu);
                    if (res) {
                        Swal.fire("Thành công!", "Xóa thành công!", "success");
                        await getAllThuongHieu();
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
                    <Modal.Title>Xác nhận xóa TH </Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn xóa TH:
                    {dataDelete && dataDelete.tenThuongHieu ? dataDelete.tenThuongHieu : ""} không ?</Modal.Body>
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
