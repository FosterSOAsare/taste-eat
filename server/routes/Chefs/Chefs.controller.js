const { getChefs, getAChef, deleteAChef, updateAChef, postAChef } = require("../../models/Chefs/Chefs.model");

async function controllerGetChefs(req, res) {
	let chefs = await getChefs();
	res.status(200).json(chefs);
}

async function controllerGetAChef(req, res) {
	let { chefId } = req.params;
	let chef = await getAChef(chefId);
	res.status(200).json(chef);
}

async function controllerDeleteAChef(req, res) {}

async function controllerSaveChef(req, res) {
	let data = req.body;
	let image = `http://localhost:8000/photos/chefs/${req.files[0].filename}`;
	data = { ...data, experience: parseInt(data.experience), image };
	// Storing data in database
	const response = await postAChef(data);

	// Sending response
	if (response.error) {
		return res.status(404).json(response);
	}
	res.status(201).json(response);
	res.json(req.data);
}

async function controllerUpdateAChef(req, res) {}

module.exports = {
	controllerGetChefs,
	controllerGetAChef,
	controllerSaveChef,
	controllerDeleteAChef,
	controllerUpdateAChef,
};
