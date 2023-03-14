const { getDishes, getADish, deleteADish, updateADish, postADish } = require("../../models/Dishes/Dishes.model");

async function controllerGetDishes(req, res) {
	res.status(200).json({ dishes: "ok" });
}

async function controllerGetADish(req, res) {}

async function controllerDeleteADish(req, res) {}

async function controllerSaveDish(req, res) {}

async function controllerUpdateADish(req, res) {}

module.exports = {
	controllerGetDishes,
	controllerGetADish,
	controllerSaveDish,
	controllerDeleteADish,
	controllerUpdateADish,
};
