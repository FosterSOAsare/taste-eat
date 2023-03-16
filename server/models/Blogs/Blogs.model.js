const blogsCollection = require("./Blogs.mongo");

async function getBlogs() {
	let res = await blogsCollection.find({}, { __v: 0 });
	if (res) return res;
	return { error: "An error occurred during get request" };
}

function getABlog(blogId) {}

function deleteABlog(blogId) {}

function updateABlog(blogId) {}

async function postABlog(blogData) {
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
