const express = require("express");
const fs = require("fs");
const path = require("path");
const contactsRouter = express.Router();
const resolvekeys = require("../../utils/replacekeys");
const { sendContactMessage } = require("../../lib/nodemailer");

contactsRouter.post("/contacts", async (req, res) => {
	try {
		let { name, email, subject, message, phone } = req.body;
		if (!name || !email || !subject || !message || !phone) {
			res.status(404).json({ error: "Please fill in all fields" });
			return;
		}

		let file = fs.readFileSync(path.join(__dirname, "..", "..", "emails", "contact.html"), "utf-8");

		let data = [
			{ key: "{{name}}", value: name },
			{ key: "{{email}}", value: email },
			{ key: "{{phone}}", value: phone },
			{ key: "{{message}}", value: message },
		];

		let emailMessage = resolvekeys(data, file);
		let emailStatus = await sendContactMessage(subject, emailMessage, name, email);
		if (emailStatus?.error) {
			res.status(400).json({ error: emailStatus.error });
			return;
		}
		res.status(200).json({ success: true });
	} catch (e) {
		res.status(400).json({ error: e.message });
	}
});

module.exports = contactsRouter;
