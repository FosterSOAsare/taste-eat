const { getChefs, getAChef, deleteAChef, updateAChef, postAChef } = require("../../models/Chefs/Chefs.model");
const getSecuredUrl = require("../../lib/cloudinary");

async function controllerGetChefs(req, res) {
	const { limit } = req.query;
	try {
		let chefs = await getChefs(limit);
		res.status(200).json(chefs);
	} catch (e) {
		res.status(404).json({
			error: e.message,
		});
	}
}

async function controllerGetAChef(req, res) {
	let { chefId } = req.params;
	try {
		let chef = await getAChef(chefId);
		res.status(200).json(chef);
	} catch (e) {
		res.status(404).json({
			error: e.message,
		});
	}
}

async function controllerDeleteAChef(req, res) {
	let { chefId } = req.params;
	try {
		let response = await deleteAChef(chefId);
		res.status(201).json({ success: `Chef of id ${chefId} has been deleted ` });
	} catch (e) {
		res.status(404).json({
			error: e.message,
		});
	}
}

async function controllerSaveChef(req, res) {
	let data = req.body;

	// Validations
	let { name, email, experience, location, summary, position } = data;
	if (!name || !email || !experience || !location || !summary || !position) {
		res.status(400).json({ error: "Please provide data for all fields" });
		return;
	}

	if (!req.file) {
		res.status(400).json({ error: "No file was uploaded" });
		return;
	}

	const image = await getSecuredUrl(req.file, "chefs");
	data = { ...data, experience: parseInt(data.experience), image };
	// Storing data in database

	try {
		const response = await postAChef(data);
		// Sending response
		res.status(201).json(response);
	} catch (e) {
		res.status(404).json({
			error: e.message,
		});
	}
}

async function controllerUpdateAChef(req, res) {
	let data = req.body;
	// Validations
	let { name, email, experience, location, summary, position } = data;
	if (!name || !email || !experience || !location || !summary || !position) {
		res.status(400).json({ error: "Please provide data for all fields" });
		return;
	}

	if (!req.file && !data.image) {
		res.status(400).json({ error: "No file was uploaded" });
		return;
	}

	if (req.file) {
		const image = await getSecuredUrl(req.file, "chefs");
		data.image = image;
	}
	// Updating data in database
	try {
		await updateAChef(req.params.chefId, data);
		res.status(201).json(data);
	} catch (e) {
		res.status(404).json({
			error: e.message,
		});
	}
}

module.exports = {
	controllerGetChefs,
	controllerGetAChef,
	controllerSaveChef,
	controllerDeleteAChef,
	controllerUpdateAChef,
};
