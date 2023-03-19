const dishesCollection = require("./Dishes.mongo");
async function getDishes(type, limit, skip) {
	let totalCount = await dishesCollection.countDocuments({ type });
	let response = await dishesCollection.find({ type }, { __v: 0 }).limit(limit).skip(skip);
	return { dishes: response, nextpage: parseInt(limit) + parseInt(skip) < totalCount };
}

async function getADish(blogId) {}

async function deleteADish(blogId) {}

async function updateADish(blogId) {}

async function postADish(blogData) {
	let res = await dishesCollection.create(blogData);
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
