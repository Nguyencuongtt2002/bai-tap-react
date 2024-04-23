import axios from "../utils/axiosCustomize";
const GetAllTH = async () => {
    return axios.get("api/ThuongHieu/get-all");
}
const CreateTH = async (obj: any) => {
    return axios.post("api/ThuongHieu/them", { ...obj });
}
const UpdateTH = async (obj: any) => {
    return axios.put("api/ThuongHieu/update", { ...obj })
}
const DeleteTH = async (id: number) => {
    return axios.delete('api/ThuongHieu/xoa/' + id)
}
export { GetAllTH, CreateTH, UpdateTH, DeleteTH }