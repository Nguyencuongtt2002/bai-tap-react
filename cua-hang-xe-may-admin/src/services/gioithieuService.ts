import axios from "../utils/axiosCustomize";
const GetGioiThieuAll = async () => {
    return axios.get("/api/GioiThieu/get-all");
}
export { GetGioiThieuAll }