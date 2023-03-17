const chefsCollection = require("./Chefs.mongo");
async function getChefs(limit) {
	let res = await chefsCollection.find({}, { name: 1, image: 1, position: 1 }).limit(limit);
	return res;
}

async function getAChef(chefId) {
	let res = await chefsCollection.findOne({ _id: chefId }, { __v: 0 });
	if (res) return res;
	return { error: "No chef exists with the specified id" };
}

async function deleteAChef(chefId) {}

async function updateAChef(chefId, newData) {
	try {
		let res = await chefsCollection.findOne({ _id: chefId }, { name: 1 });
		if (!res) {
			return { error: "No chef exists with the specified id" };
		}
		await chefsCollection.updateOne({ _id: chefId }, newData);
		console.log("updated");
	} catch (e) {
		console.log(e);
	}
}

async function postAChef(chefData) {
	let res = await chefsCollection.create(chefData);
	if (res) return res;
	return { error: "An error occurred during post request" };
}

module.exports = {
	getChefs,
	getAChef,
	deleteAChef,
	updateAChef,
	postAChef,
};
