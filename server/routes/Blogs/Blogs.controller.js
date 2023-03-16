const { getBlogs, getABlog, deleteABlog, updateABlog, postABlog } = require("../../models/Blogs/Blogs.model");

async function controllerGetBlogs(req, res) {
	res.status(200).json(await getBlogs());
}

async function controllerGetABlog(req, res) {}

async function controllerDeleteABlog(req, res) {}

async function controllerSaveBlog(req, res) {
	let data = req.body;
	// Validations
	if (!data.title || !data.summary || !data.tag || !data.content) {
		res.status(400).json({ error: "Please provide data for all fields" });
		return;
	}

	if (!req.files[0]) {
		res.status(400).json({ error: "No file was uploaded" });
		return;
	}
	// Setting Image Url
	let imageUrl = `http://localhost:8000/photos/${req.files[0].filename}`;
	data.imageUrl = imageUrl;

	// Storing data in database
	const response = await postABlog(data);

	// Sending response
	if (response.error) {
		return res.status(404).json(response);
	}
	res.status(201).json(response);
}

async function controllerUpdateABlog(req, res) {}

module.exports = {
	controllerGetBlogs,
	controllerGetABlog,
	controllerSaveBlog,
	controllerDeleteABlog,
	controllerUpdateABlog,
};
