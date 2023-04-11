let SmsClient = require("../../lib/twilioSms");
const sendEmail = require("../../lib/nodemailer");
const fs = require("fs");
const path = require("path");
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

		// console.log(message);

		// let sms = new SmsClient(message);
		// await sms.sendMessage();

		let rt = await fs.readFileSync(path.join(__dirname, "..", "..", "newsletter.html"), "utf-8");

		let emailSent = await sendEmail("New Reservation request", rt);
		console.log(emailSent);

		// res.send({ success: true });
	} catch (e) {
		res.status(400).json({ error: e.message });
	}
}

module.exports = { receiveNewReservation };
