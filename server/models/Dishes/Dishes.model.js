const dishesCollection = require("./Dishes.mongo");
function getDishes() {}

function getADish(blogId) {}

function deleteADish(blogId) {}

function updateADish(blogId) {}

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
