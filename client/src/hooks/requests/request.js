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
export async function httpFetchABlog(blogId) {
	try {
		let res = await axios({
			method: "get",
			url: `${baseUrl}/blog/${blogId}`,
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpUpdateBlog(blogId, newData) {
	try {
		let res = await axios({
			method: "put",
			url: `${baseUrl}/blog/${blogId}`,
			data: newData,
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function httpFetchDishes(type, limit = 6, skip = 0) {
	try {
		let res = await axios({
			method: "get",
			url: `${baseUrl}/dishes`,
			params: {
				type,
				limit,
				skip,
			},
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function httpFetchAllDishes(limit = 20, skip = 0) {
	try {
		let res = await axios({
			method: "get",
			url: `${baseUrl}/dishes`,
			params: {
				limit,
				skip,
			},
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
			params: {
				limit,
			},
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpFetchAChef(chefId) {
	try {
		let res = await axios({
			method: "get",
			url: `${baseUrl}/chef/${chefId}`,
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpUpdateChef(chefId, newData) {
	try {
		let res = await axios({
			method: "put",
			url: `${baseUrl}/chef/${chefId}`,
			data: newData,
		});
		return res?.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpDeleteChef(chefId) {
	try {
		let res = await axios({
			method: "delete",
			url: `${baseUrl}/chef/${chefId}`,
		});

		return res.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function httpValidateAdmin(type, value) {
	try {
		let res = await axios({
			method: "get",
			url: `${baseUrl}/users`,
			params: { type, value },
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function insertSubscription(email) {
	console.log(email);
	try {
		let res = await axios({
			method: "post",
			url: `${baseUrl}/newsletter`,
			data: { email },
		});
		return res?.data;
	} catch (e) {
		return e.response.data;
	}
}
