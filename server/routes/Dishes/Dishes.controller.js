const { getDishes, getADish, deleteADish, updateADish, postADish } = require("../../models/Dishes/Dishes.model");
const getServerBaseUrl = require("../../utils/getserverurl");

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

async function controllerDeleteADish(req, res) {
	let { dishId } = req.params;
	try {
		let response = await deleteADish(dishId);
		res.status(201).json({ success: `Dish of id ${dishId} has been deleted ` });
	} catch (e) {
		res.status(404).json({
			error: e.message,
		});
	}
}

async function controllerSaveDish(req, res) {
	let data = req.body;
	let { name, summary, type, price } = req.body;

	if (!name || !summary || !type || !price) {
		res.status(400).json({ error: "Please provide data for all fields" });
		return;
	}
	if (!req.files || !req.files[0]) {
		res.status(400).json({ error: "No file was uploaded" });
		return;
	}
	// Setting Image Url
	let baseUrl = getServerBaseUrl(req);
	let imageUrl = `${baseUrl}/photos/dishes/${req.files[0].filename}`;
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
	try {
		let data = req.body;
		let { name, summary, type, price, imageUrl } = req.body;

		if (!name || !summary || !type || !price) {
			res.status(400).json({ error: "Please provide data for all fields" });
			return;
		}
		if (!req.files && !imageUrl) {
			res.status(400).json({ error: "No file was uploaded" });
			return;
		}
		if (req.files?.length) {
			let baseUrl = getServerBaseUrl(req);
			data.imageUrl = `${baseUrl}/photos/dishes/${req.files[0].filename}`;
		}

		// Updating data in database
		let response = await updateADish(req.params.dishId, data);

		res.status(201).json(response);
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
