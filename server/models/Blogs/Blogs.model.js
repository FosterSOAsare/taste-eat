const blogsCollection = require("./Blogs.mongo");

async function getBlogs(limit, skip) {
	let totalCount = await blogsCollection.countDocuments();
	let res = await blogsCollection.find({}, { __v: 0, content: 0 }).skip(skip).limit(limit);
	if (res) {
		return { blogs: res, nextpage: parseInt(limit) + parseInt(skip) < totalCount };
	}
	return { error: "An error occurred during get request" };
}

async function getABlog(blogId) {
	try {
		let res = await blogsCollection.findOne({ _id: blogId }, { __v: 0 });
		if (res) return res;
		throw new Error("No blog exists with the specified id");
	} catch (error) {
		throw new Error("No blog exists with the specified id");
	}
}

async function deleteABlog(blogId) {
	try {
		await blogsCollection.deleteOne({ _id: blogId });
	} catch (e) {
		throw new Error("No blog exists with the specified id");
	}
}

async function updateABlog(blogId, newData) {
	try {
		await blogsCollection.updateOne({ _id: blogId }, newData);
	} catch (e) {
		throw new Error("No chef exists with the specified id");
	}
}

async function postABlog(blogData) {
	blogData = { ...blogData, date: new Date() };
	let res = await blogsCollection.create(blogData);
	if (res) return res;
	return { error: "An error occurred during post request" };
}

module.exports = {
	getBlogs,
	getABlog,
	deleteABlog,
	updateABlog,
	postABlog,
};
