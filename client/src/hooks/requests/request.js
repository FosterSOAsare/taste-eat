const baseUrl = "http://localhost:8000";
import axios from "axios";

export async function httpFetchBlogs() {
	const { data } = await axios.get(`${baseUrl}/blogs`);
	return data;
}

export async function httpStoreBlog(data) {
	try {
		let res = await axios({
			method: "post",
			url: `${baseUrl}/blogs`,
			data,
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function httpStoreDish(data) {
	try {
		let res = await axios({
			method: "post",
			url: `${baseUrl}/dishes`,
			data,
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
