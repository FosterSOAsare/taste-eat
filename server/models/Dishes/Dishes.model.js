const dishesCollection = require("./Dishes.mongo");
async function getDishes() {
	return await dishesCollection.find({}, { __v: 0 });
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
