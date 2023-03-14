const { getBlogs, getABlog, deleteABlog, updateABlog, postABlog } = require("../../models/Blogs/Blogs.model");

async function controllerGetBlogs(req, res) {
	res.status(200).json({ blogs: "ok" });
}

async function controllerGetABlog(req, res) {}

async function controllerDeleteABlog(req, res) {}

async function controllerSaveBlog(req, res) {}

async function controllerUpdateABlog(req, res) {}

module.exports = {
	controllerGetBlogs,
	controllerGetABlog,
	controllerSaveBlog,
	controllerDeleteABlog,
	controllerUpdateABlog,
};
