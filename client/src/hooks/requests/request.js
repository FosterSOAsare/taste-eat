const baseUrl = process.env.REACT_APP_API_BASE_URL;
import axios from "axios";

export async function httpFetchBlogs(limit = 6, skip = 0) {
	const { data } = await axios({
		url: `${baseUrl}/blogs`,
		method: "get",
		params: { limit, skip },
	});
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
export async function httpDeleteABlog(blogId) {
	try {
		let res = await axios({
			method: "delete",
			url: `${baseUrl}/blog/${blogId}`,
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
export async function httpFetchADish(dishId) {
	try {
		let res = await axios({
			method: "get",
			url: `${baseUrl}/dish/${dishId}`,
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
export async function httpUpdateDish(dishId, newData) {
	try {
		let res = await axios({
			method: "put",
			url: `${baseUrl}/dish/${dishId}`,
			data: newData,
		});
		return res?.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpDeleteADish(dishId) {
	try {
		let res = await axios({
			method: "delete",
			url: `${baseUrl}/dish/${dishId}`,
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

export async function httpFetchChefs(limit = "all") {
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

// For validating the token stored if any
export async function httpValidateAdminToken(token) {
	try {
		let res = await axios({
			method: "get",
			url: `${baseUrl}/users`,
			headers: { Authorization: "Bearer " + token },
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpLoginAdmin(password) {
	try {
		let res = await axios({
			method: "post",
			url: `${baseUrl}/users`,
			data: { password },
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function insertSubscription(email) {
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

export async function httpSendReservation(data) {
	try {
		let res = await axios({
			method: "post",
			url: `${baseUrl}/reservations`,
			data,
		});
		return res?.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function httpRequestPasswordReset() {
	try {
		let res = await axios({
			method: "get",
			url: `${baseUrl}/users/reset`,
		});
		return res?.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function httpValidatePasswordResetCode(code) {
	try {
		let res = await axios({
			method: "post",
			url: `${baseUrl}/users/reset`,
			data: { user: "admin", code },
		});
		return res?.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function httpSetNewPassword(password, token) {
	try {
		let res = await axios({
			method: "put",
			url: `${baseUrl}/users/reset`,
			data: { user: "admin", password },
			headers: {
				Authorization: "Bearer " + token,
			},
		});
		return res?.data;
	} catch (e) {
		return e.response.data;
	}
}
