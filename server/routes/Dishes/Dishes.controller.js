const { getDishes, getADish, deleteADish, updateADish, postADish } = require("../../models/Dishes/Dishes.model");

async function controllerGetDishes(req, res) {
	let { type, limit, skip } = req.query;
	let correspondingType = type === "starters" ? "Starter" : type === "main dishes" ? "Main Dish" : type === "dessert" ? "Dessert" : "all";
	let response = await getDishes(correspondingType, limit, skip);
	if (!res) {
		res.status(404).json({ error: "An error occurred" });
		return;
	}
	response = { ...response, type };
	res.status(200).json(response);
}

async function controllerGetADish(req, res) {}

async function controllerDeleteADish(req, res) {}

async function controllerSaveDish(req, res) {
	let data = req.body;
	if (!req.files[0]) {
		res.status(400).json({ error: "No file was uploaded" });
		return;
	}
	// Setting Image Url
	let imageUrl = `http://localhost:8000/photos/dishes/${req.files[0].filename}`;
	data.imageUrl = imageUrl;
	data.price = parseFloat(data.price);

	// Storing data in database
	const response = await postADish(data);

	// Sending response
	if (response.error) {
		return res.status(404).json(response);
	}
	res.status(201).json(response);
}

async function controllerUpdateADish(req, res) {}

module.exports = {
	controllerGetDishes,
	controllerGetADish,
	controllerSaveDish,
	controllerDeleteADish,
	controllerUpdateADish,
};
