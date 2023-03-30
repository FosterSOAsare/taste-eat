let SmsClient = require("../../lib/twilioSms");
async function receiveNewReservation(req, res) {
	try {
		let { type, time, name, email, reservationType } = req.body;
		if (!type || !name || !email || !reservationType) {
			res.status(400).json({ error: "Please fill in required fields" });
			return;
		}
		let message = `

    NEW RESERVATION REQUEST

    Name : ${name}

    Email : ${email}

    ReservationType : ${reservationType}
    
    Time : ${time}
    `;

		let sms = new SmsClient(message);
		await sms.sendMessage();

		res.send({ success: true });
	} catch (e) {
		res.status(400).json({ error: e.message });
	}
}

module.exports = { receiveNewReservation };
