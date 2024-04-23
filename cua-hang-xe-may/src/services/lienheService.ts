import axios from "../utils/axiosCustomize";
const GetLienHeAll = async () => {
    return axios.get("/api/LienHe/get-all");
}
// const CreateLienHe = async (obj) => {
//     return axios.post("api/lien-he/them", { ...obj });
// }
// const UpdateLienHe = async (obj) => {
//     return axios.post("api/lien-he/update", { ...obj })
// }
// const DeleteLienHe = async (id) => {
//     return axios.delete('api/lien-he/xoa/' + id)
// }
export { GetLienHeAll }