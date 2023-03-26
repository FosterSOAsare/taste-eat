const { insertSubscription, getSubscriptions } = require("../../models/Newsletter/Newsletter.model");

async function controllerInsertSubscription(req, res) {
	let { email } = req.body;
	try {
		if (!email) {
			res.status(400).json({ error: "Please provide all needed data" });
			return;
		}

		await insertSubscription(email);
		// Send email  notification to user for subscription
		res.status(201).json({ success: "Newsletter subscription successful" });
	} catch (e) {
		res.status(404).json({ error: e.message });
	}
}

async function controllerGetSubscriptions(req, res) {
	try {
		let results = await getSubscriptions();
		res.status(200).json(results);
	} catch (e) {
		res.status(404).json({ error: e.message });
	}
}

module.exports = {
	controllerInsertSubscription,
	controllerGetSubscriptions,
};
