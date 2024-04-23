import axios from "../utils/axiosCustomize";
const GetLoaiSPAll = async () => {
    return axios.get("api/LoaiSanPham/get-all");
}
// const CreateLoaiSanPham = async (obj) => {
//     return axios.post("api/loaisp/them", { ...obj });
// }
// const UpdateLoaiSanPham = async (obj) => {
//     return axios.post("api/loaisp/update", { ...obj })
// }
// const DeleteLoaiSanPham = async (id) => {
//     return axios.delete('api/loaisp/xoa/' + id)
// }
export { GetLoaiSPAll }