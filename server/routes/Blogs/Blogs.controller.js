const { getBlogs, getABlog, deleteABlog, updateABlog, postABlog } = require("../../models/Blogs/Blogs.model");
const getSecuredUrl = require("../../lib/cloudinary");

async function controllerGetBlogs(req, res) {
	let { limit, skip, order } = req.query;
	res.status(200).json(await getBlogs(limit, skip, order));
}

async function controllerGetABlog(req, res) {
	let { blogId } = req.params;
	try {
		let blog = await getABlog(blogId);
		res.status(200).json(blog);
	} catch (e) {
		res.status(404).json({
			error: e.message,
		});
	}
}

async function controllerDeleteABlog(req, res) {
	let { blogId } = req.params;
	try {
		let response = await deleteABlog(blogId);
		res.status(201).json({ success: `Blog of id ${blogId} has been deleted ` });
	} catch (e) {
		res.status(404).json({
			error: e.message,
		});
	}
}

async function controllerSaveBlog(req, res) {
	let data = req.body;

	// Validations
	if (!data.title || !data.summary || !data.tag || !data.content) {
		res.status(400).json({ error: "Please provide data for all fields" });
		return;
	}

	if (!req.file) {
		res.status(400).json({ error: "No file was uploaded" });
		return;
	}
	// Setting Image Url
	const imageUrl = await getSecuredUrl(req.file, "blogs");
	data.imageUrl = imageUrl;

	// Storing data in database
	const response = await postABlog(data);

	// Sending response
	if (response.error) {
		return res.status(404).json(response);
	}
	res.status(201).json(response);
}

async function controllerUpdateABlog(req, res) {
	// Updating data in database
	try {
		let data = req.body;
		// Validations
		if (!data.title || !data.summary || !data.tag || !data.content) {
			res.status(400).json({ error: "Please provide data for all fields" });
			return;
		}

		if (!req.file && !data.imageUrl) {
			res.status(400).json({ error: "No file was uploaded" });
			return;
		}
		if (req.file) {
			const imageUrl = await getSecuredUrl(req.file, "blogs");
			data.imageUrl = imageUrl;
		}
		let response = await updateABlog(req.params.blogId, data);
		res.status(201).json(response);
	} catch (e) {
		console.log(e);
		res.status(404).json({ error: "An error occurred" });
	}
}

module.exports = {
	controllerGetBlogs,
	controllerGetABlog,
	controllerSaveBlog,
	controllerDeleteABlog,
	controllerUpdateABlog,
};
