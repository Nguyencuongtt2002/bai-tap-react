import axios from "../utils/axiosCustomize";
const GetMenuAll = async () => {
    return axios.get("/api/Menu/get-all");
}
export { GetMenuAll }