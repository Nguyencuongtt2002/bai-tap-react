import axios from "../utils/axiosCustomize";
const GetLoaiSPAll = async () => {
    return axios.get("api/LoaiSanPham/get-all");
}
const CreateLoaiSanPham = async (obj: any) => {
    return axios.post("api/LoaiSanPham/them", { ...obj });
}
const UpdateLoaiSanPham = async (obj: any) => {
    return axios.put("api/LoaiSanPham/update", { ...obj })
}
const DeleteLoaiSanPham = async (id: number) => {
    return axios.delete('api/LoaiSanPham/xoa/' + id)
}
export { GetLoaiSPAll, CreateLoaiSanPham, UpdateLoaiSanPham, DeleteLoaiSanPham }