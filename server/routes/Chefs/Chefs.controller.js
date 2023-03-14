const { getChefs, getAChef, deleteAChef, updateAChef, postAChef } = require("../../models/Chefs/Chefs.model");

async function controllerGetChefs(req, res) {
	res.status(200).json({ chefs: "ok" });
}

async function controllerGetAChef(req, res) {}

async function controllerDeleteAChef(req, res) {}

async function controllerSaveChef(req, res) {}

async function controllerUpdateAChef(req, res) {}

module.exports = {
	controllerGetChefs,
	controllerGetAChef,
	controllerSaveChef,
	controllerDeleteAChef,
	controllerUpdateAChef,
};
