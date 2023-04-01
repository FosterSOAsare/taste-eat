const baseUrl = process.env.REACT_APP_API_BASE_URL;
import axiosInstance from "../../axios";

export async function httpFetchBlogs(limit = 6, skip = 0) {
	const { data } = await axiosInstance({
		url: `/blogs`,
		method: "get",
		params: { limit, skip },
	});
	return data;
}

export async function httpStoreBlog(data) {
	try {
		let res = await axiosInstance({
			method: "post",
			url: `/blogs`,
			data,
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpFetchABlog(blogId) {
	try {
		let res = await axiosInstance({
			method: "get",
			url: `/blog/${blogId}`,
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpUpdateBlog(blogId, newData) {
	try {
		let res = await axiosInstance({
			method: "put",
			url: `/blog/${blogId}`,
			data: newData,
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpDeleteABlog(blogId) {
	try {
		let res = await axiosInstance({
			method: "delete",
			url: `/blog/${blogId}`,
		});

		return res.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function httpFetchDishes(type, limit = 6, skip = 0) {
	try {
		let res = await axiosInstance({
			method: "get",
			url: `/dishes`,
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
		let res = await axiosInstance({
			method: "get",
			url: `/dishes`,
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
		let res = await axiosInstance({
			method: "get",
			url: `/dish/${dishId}`,
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpStoreDish(data) {
	try {
		let res = await axiosInstance({
			method: "post",
			url: `/dishes`,
			data,
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpUpdateDish(dishId, newData) {
	try {
		let res = await axiosInstance({
			method: "put",
			url: `dish/${dishId}`,
			data: newData,
		});
		return res?.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpDeleteADish(dishId) {
	try {
		let res = await axiosInstance({
			method: "delete",
			url: `/dish/${dishId}`,
		});

		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpStoreChef(data) {
	try {
		let res = await axiosInstance({
			method: "post",
			url: `/chefs`,
			data,
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function httpFetchChefs(limit = "all") {
	try {
		let res = await axiosInstance({
			method: "get",
			url: `/chefs`,
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
		let res = await axiosInstance({
			method: "get",
			url: `/chef/${chefId}`,
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpUpdateChef(chefId, newData) {
	try {
		let res = await axiosInstance({
			method: "put",
			url: `/chef/${chefId}`,
			data: newData,
		});
		return res?.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpDeleteChef(chefId) {
	try {
		let res = await axiosInstance({
			method: "delete",
			url: `/chef/${chefId}`,
		});

		return res.data;
	} catch (e) {
		return e.response.data;
	}
}

// For validating the token stored if any
export async function httpValidateAdminToken(token) {
	try {
		let res = await axiosInstance({
			method: "get",
			url: `/users`,
			headers: { Authorization: "Bearer " + token },
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}
export async function httpLoginAdmin(password) {
	try {
		let res = await axiosInstance({
			method: "post",
			url: `/users`,
			data: { password },
		});
		return res.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function insertSubscription(email) {
	try {
		let res = await axiosInstance({
			method: "post",
			url: `/newsletter`,
			data: { email },
		});
		return res?.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function httpSendReservation(data) {
	try {
		let res = await axiosInstance({
			method: "post",
			url: `/reservations`,
			data,
		});
		return res?.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function httpRequestPasswordReset() {
	try {
		let res = await axiosInstance({
			method: "get",
			url: `/users/reset`,
		});
		return res?.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function httpValidatePasswordResetCode(code) {
	try {
		let res = await axiosInstance({
			method: "post",
			url: `/users/reset`,
			data: { user: "admin", code },
		});
		return res?.data;
	} catch (e) {
		return e.response.data;
	}
}

export async function httpSetNewPassword(password, token) {
	try {
		let res = await axiosInstance({
			method: "put",
			url: `/users/reset`,
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
