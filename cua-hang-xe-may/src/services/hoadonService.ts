import axios from "../utils/axiosCustomize";

const CreateHoaDon = async (obj: any) => {
    return axios.post("api/DonHang/them", obj);
}

export { CreateHoaDon };
