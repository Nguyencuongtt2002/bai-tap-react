import axios from "../utils/axiosCustomize";
const thongKeSoluong = async () => {
    return axios.get("api/ThongKe/tongsoluong");
}

export { thongKeSoluong }