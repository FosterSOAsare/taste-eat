require("dotenv").config();
const nodemailer = require("nodemailer");

async function sendEmail(subject, message, to) {
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
			from: process.env.email_address,
			to: to,
			subject: subject,
			html: message,
		});
		return { success: true };
	} catch (e) {
		console.log(e);
		return { error: e };
	}
}

async function sendRequestNotice(subject, message) {
	return await sendEmail(subject, message, "asare4ster@gmail.com");
}

async function sendContactMessage(subject, message, name, email) {
	return await sendEmail(subject, message, "asare4ster@gmail.com");
}

async function sendNewsletterSubscriptonNotice(message, email) {
	return await sendEmail("Newsletter subscription was successful", message, email);
}

module.exports = { sendRequestNotice, sendContactMessage, sendNewsletterSubscriptonNotice };
