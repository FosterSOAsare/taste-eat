const { getBlogs, getABlog, deleteABlog, updateABlog, postABlog } = require("../../models/Blogs/Blogs.model");

async function controllerGetBlogs(req, res) {
	res.status(200).json(await getBlogs());
}

async function controllerGetABlog(req, res) {
	let { blogId } = req.params;
	try {
		let chef = await getABlog(blogId);
		res.status(200).json(chef);
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

	if (!req.files[0]) {
		res.status(400).json({ error: "No file was uploaded" });
		return;
	}
	// Setting Image Url
	let imageUrl = `http://localhost:8000/photos/blogs/${req.files[0].filename}`;
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
	let data = req.body;
	if (req.files?.length) {
		data.image = `http://localhost:8000/photos/blogs/${req.files[0].filename}`;
	}
	console.log(data);
	// Updating data in database
	try {
		await updateABlog(data._id, data);
		res.status(201).json(data);
	} catch (e) {
		res.status(404).json({
			error: e.message,
		});
	}
}

module.exports = {
	controllerGetBlogs,
	controllerGetABlog,
	controllerSaveBlog,
	controllerDeleteABlog,
	controllerUpdateABlog,
};
