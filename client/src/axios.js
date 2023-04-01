import axios from "axios";
const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
});
let token = localStorage.getItem("admin-token");
if (token) {
	axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + token;
}

export default axiosInstance;
