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

async function controllerGetADish(req, res) {
	let { dishId } = req.params;
	try {
		let dish = await getADish(dishId);
		res.status(200).json(dish);
	} catch (e) {
		res.status(404).json({
			error: e.message,
		});
	}
}

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

async function controllerUpdateADish(req, res) {
	let data = req.body;
	if (req.files?.length) {
		data.imageUrl = `http://localhost:8000/photos/dishes/${req.files[0].filename}`;
	}

	// Updating data in database
	try {
		await updateADish(data._id, data);
		res.status(201).json(data);
	} catch (e) {
		res.status(404).json({
			error: e.message,
		});
	}
}

module.exports = {
	controllerGetDishes,
	controllerGetADish,
	controllerSaveDish,
	controllerDeleteADish,
	controllerUpdateADish,
};
