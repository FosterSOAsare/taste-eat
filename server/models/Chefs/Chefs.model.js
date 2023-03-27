const chefsCollection = require("./Chefs.mongo");
async function getChefs(limit) {
	let totalCount = await chefsCollection.countDocuments();
	limit = limit || "all";
	// Note we don't use nextpages for chefs that is why we don't have skip implemented
	let res =
		limit === "all"
			? await chefsCollection.find({}, { name: 1, image: 1, position: 1 }).sort({ _id: -1 })
			: await chefsCollection.find({}, { name: 1, image: 1, position: 1 }).sort({ _id: -1 }).limit(limit);

	if (res) return { chefs: res, nextpage: totalCount > parseInt(limit === "all" ? totalCount : limit) };
	throw new Error("An error occurred while retrieving chefs");
}

async function getAChef(chefId) {
	try {
		let res = await chefsCollection.findOne({ _id: chefId }, { __v: 0 });
		if (res) return res;
		throw new Error("No chef exists with the specified id");
	} catch (error) {
		throw new Error("No chef exists with the specified id");
	}
}

async function deleteAChef(chefId) {
	try {
		await chefsCollection.deleteOne({ _id: chefId });
	} catch (e) {
		throw new Error("No chef exists with the specified id");
	}
}

async function updateAChef(chefId, newData) {
	try {
		// Check to see if the chefs  exists
		const exists = await chefsCollection.findOne({ _id: chefId });
		if (!exists) throw new Error("No chef exists with the specified id");
		let data = await chefsCollection.updateOne({ _id: chefId }, newData);
		return data;
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
