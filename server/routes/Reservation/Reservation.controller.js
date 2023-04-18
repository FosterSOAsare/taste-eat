let SmsClient = require("../../lib/twilioSms");
const { sendRequestNotice } = require("../../lib/nodemailer");
const fs = require("fs");
const path = require("path");
const resolvekeys = require("../../utils/replacekeys");

async function receiveNewReservation(req, res) {
	try {
		let { time, name, email, reservationType } = req.body;
		if (!time || !name || !email || !reservationType) {
			res.status(400).json({ error: "Please fill in required fields" });
			return;
		}
		let array = Array.from(Object.keys(req.body));
		let present = array.every((res) => res);
		if (!present) {
			res.status(400).json({ error: "Please fill in required fields" });
		}

		let message = `NEW RESERVATION REQUEST\n\n`;
		array.forEach((e) => {
			// This formatting is necessary, D
			let key = `${e.toUpperCase()} : ${req.body[e]}`;
			message += key + "\n\n";
		});

		// let sms = new SmsClient(message);
		// await sms.sendMessage();

		let file = fs.readFileSync(path.join(__dirname, "..", "..", "emails", "reservation.html"), "utf-8");

		let data = [
			{ key: "{{name}}", value: name },
			{ key: "{{email}}", value: email },
			{ key: "{{phone}}", value: req.body?.phone || "" },
			{ key: "{{time}}", value: time },
			{ key: "{{reservationType}}", value: reservationType },
		];
		let emailMessage = resolvekeys(data, file);

		let emailStatus = await sendRequestNotice("New Reservation request", emailMessage);
		if (emailStatus.error) {
			res.status(400).json({ error: emailStatus.error });
			return;
		}
		res.status(200).send({ success: true });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: e.message });
	}
}

module.exports = { receiveNewReservation };
