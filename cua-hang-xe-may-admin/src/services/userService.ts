import axios from "../utils/axiosCustomize";
const Login = async (obj: any) => {
    return axios.post("api/NguoiDung/dangnhap", { ...obj });
}
const CreateNguoiDung = async (obj: any) => {
    return axios.post("api/NguoiDung/them", obj);
}
export { Login, CreateNguoiDung }