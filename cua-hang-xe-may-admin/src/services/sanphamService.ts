import axios from "../utils/axiosCustomize";
const GetSanPhamMoi = async () => {
    return axios.get("/api/SanPham/getSPM/4");
}

const GetSanPhamGG = async () => {
    return axios.get("/api/SanPham/getSPGG/4");
}
const getById = async (id: number) => {
    return axios.get(`/api/SanPham/getbyid/${id}`)
}
const GetSanPhamAll = async () => {
    return axios.get("api/SanPham/get-all");
}
const searchSanPham = async (obj: any) => {
    return axios.post("api/SanPham/timkiem", obj)
}
const CreateSanPham = async (data: any) => {
    return axios.post("api/SanPham/them", data);
}
const UpdateSanPham = async (data: any) => {
    return axios.put("api/SanPham/update", data)
}
const DeleteSanPham = async (id: number) => {
    return axios.delete('api/SanPham/xoa/' + id)
}
export { GetSanPhamMoi, getById, GetSanPhamGG, GetSanPhamAll, CreateSanPham, UpdateSanPham, DeleteSanPham, searchSanPham }