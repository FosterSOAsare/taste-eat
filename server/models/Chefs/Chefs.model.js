const chefsCollection = require("./Chefs.mongo");
async function getChefs(limit) {
	let res = limit === "all" ? await chefsCollection.find({}, { name: 1, image: 1, position: 1 }) : await chefsCollection.find({}, { name: 1, image: 1, position: 1 }).limit(limit);
	if (res) return res;
	throw new Error("An error occurred while retrieving chefs");
}

async function getAChef(chefId) {
	try {
		let res = await chefsCollection.findOne({ _id: chefId }, { __v: 0 });
		return res;
	} catch (error) {
		throw new Error("No chef exists with the specified id");
	}
}

async function deleteAChef(chefId) {
	try {
		await chefsCollection.findOne({ _id: chefId }, { name: 1 });
		await chefsCollection.deleteOne({ _id: chefId });
	} catch (e) {
		throw new Error("No chef exists with the specified id");
	}
}

async function updateAChef(chefId, newData) {
	try {
		await chefsCollection.findOne({ _id: chefId }, { name: 1 });
		await chefsCollection.updateOne({ _id: chefId }, newData);
	} catch (e) {
		throw new Error("No chef exists with the specified id");
	}
}

async function postAChef(chefData) {
	let res = await chefsCollection.create(chefData);
	if (res) return res;
	throw new Error("An error occurred during post request");
}

module.exports = {
	getChefs,
	getAChef,
	deleteAChef,
	updateAChef,
	postAChef,
};
