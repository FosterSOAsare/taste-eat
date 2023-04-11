require("dotenv").config();
const nodemailer = require("nodemailer");

async function sendEmail(subject, message) {
	try {
		let transporter = nodemailer.createTransport({
			host: process.env.smtp_host,
			port: 587,
			secure: false,
			auth: {
				user: process.env.email_address,
				pass: process.env.email_password,
			},
			tls: {
				rejectUnauthorized: false,
			},
		});
		await transporter.sendMail({
			from: "fostersoasare@outlook.com",
			to: "asare4ster@gmail.com",
			subject: subject,
			html: message,
		});
		return { success: true };
	} catch (e) {
		return { error: e };
	}
}

module.exports = sendEmail;
