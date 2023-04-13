const { insertSubscription, getSubscriptions } = require("../../models/Newsletter/Newsletter.model");
const fs = require("fs");
const path = require("path");
const resolvekeys = require("../../utils/replacekeys");
const { sendNewsletterSubscriptonNotice } = require("../../lib/nodemailer");

async function controllerInsertSubscription(req, res) {
	let { email } = req.body;
	try {
		if (!email) {
			res.status(400).json({ error: "Please provide all needed data" });
			return;
		}

		await insertSubscription(email);
		// Send email  notification to user for subscription
		let emailMessage = fs.readFileSync(path.join(__dirname, "..", "..", "emails", "newsletter.html"), "utf-8");

		let emailStatus = await sendNewsletterSubscriptonNotice(emailMessage, email);
		if (emailStatus.error) {
			res.status(400).json({ error: emailStatus.error });
			return;
		}
		res.status(200).send({ success: "Newsletter subscription successful" });
	} catch (e) {
		console.log(e);
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
