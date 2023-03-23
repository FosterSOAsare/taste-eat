const newsletterSchema = require("./Newsletter.mongo");

async function insertSubscription(email) {
	let emailExists = await newsletterSchema.findOne({ email });
	if (emailExists) {
		throw new Error("Email has already been added to the subscription list");
		return;
	}
	await newsletterSchema.create({ email, status: "active" });
	return "success";
}

async function getSubscriptions() {
	let res = await newsletterSchema.find({}, { __v: 0 });
	return res;
}

module.exports = {
	insertSubscription,
	getSubscriptions,
};
