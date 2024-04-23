import axios from "../utils/axiosCustomize";
const GetLienHeAll = async () => {
    return axios.get("/api/LienHe/get-all");
}
const CreateLienHe = async (obj: any) => {
    return axios.post("api/LienHe/them", { ...obj });
}
const UpdateLienHe = async (obj: any) => {
    return axios.put("api/LienHe/update", { ...obj })
}
const DeleteLienHe = async (id: number) => {
    return axios.delete('api/LienHe/xoa/' + id)
}
export { GetLienHeAll, CreateLienHe, UpdateLienHe, DeleteLienHe }