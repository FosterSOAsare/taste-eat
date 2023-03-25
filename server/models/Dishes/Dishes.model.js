const dishesCollection = require("./Dishes.mongo");
async function getDishes(type, limit, skip) {
	let totalCount = type === "all" ? await dishesCollection.countDocuments() : await dishesCollection.countDocuments({ type });
	let response = type === "all" ? await dishesCollection.find({}, { __v: 0 }).limit(limit).skip(skip) : await dishesCollection.find({ type }, { __v: 0 }).limit(limit).skip(skip);
	return { dishes: response, nextpage: parseInt(limit) + parseInt(skip) < totalCount };
}

async function getADish(dishId) {
	try {
		let res = await dishesCollection.findOne({ _id: dishId }, { __v: 0 });
		if (res) return res;
		throw new Error("No dish exists with the specified id");
	} catch (error) {
		throw new Error("No dish exists with the specified id");
	}
}

async function deleteADish(dishId) {
	console.log(dishId);
	try {
		await dishesCollection.deleteOne({ _id: dishId });
	} catch (e) {
		throw new Error("No dish exists with the specified id");
	}
}

async function updateADish(dishId, newData) {
	try {
		await dishesCollection.updateOne({ _id: dishId }, newData);
	} catch (e) {
		throw new Error("No dish exists with the specified id");
	}
}

async function postADish(dishData) {
	let res = await dishesCollection.create(dishData);
	if (res) return res;
	return { error: "An error occurred during post request" };
}

module.exports = {
	getDishes,
	getADish,
	deleteADish,
	updateADish,
	postADish,
};
