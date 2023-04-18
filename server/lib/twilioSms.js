require("dotenv").config();

class SmsClient {
	constructor(message) {
		this.sid = process.env.sid;
		this.token = process.env.token;
		this.client = require("twilio")(this.sid, this.token);
		this.message = message;
	}

	async sendMessage() {
		try {
			let message = await this.client.messages.create({
				body: this.message,
				from: process.env.phone,
				to: "+233550529015",
			});
			console.log("Message sent with id " + message.sid);
		} catch (e) {
			console.log(e);
		}
	}
}

module.exports = SmsClient;
