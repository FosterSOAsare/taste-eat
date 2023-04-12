import axios from "axios";
const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
});

// Always check that there is a token or not before sending the request
// Also modifies the headers if necessary
axiosInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem("admin-token");
	if (token) {
		config.headers["Authorization"] = `Bearer ${token}`;
	} else {
		delete config.headers["Authorization"];
	}
	return config;
});
export default axiosInstance;
