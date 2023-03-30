let SmsClient = require("../../lib/twilioSms");
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

		let sms = new SmsClient(message);
		await sms.sendMessage();

		res.send({ success: true });
	} catch (e) {
		res.status(400).json({ error: e.message });
	}
}

module.exports = { receiveNewReservation };
