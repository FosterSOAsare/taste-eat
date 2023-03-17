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

export async function httpStoreChef(data) {
	try {
		let res = await axios({
			method: "post",
			url: `${baseUrl}/chefs`,
			data,
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function httpFetchChefs(limit = 6) {
	try {
		let res = await axios({
			method: "get",
			url: `${baseUrl}/chefs`,
		});
		console.log(res);
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpFetchAChef(id) {
	try {
		let res = await axios({
			method: "get",
			url: `${baseUrl}/chef/${id}`,
		});
		console.log(res);
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
