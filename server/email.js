const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "smtp-relay.sendinblue.com",
	port: 587,
	secure: false,
	auth: {
		user: "donrixy@gmail.com",
		pass: "xsmtpsib-a8e01d41b046f55763aa175b5a89a5d27f0b6d0096450adfa166646991484333-rvm64KLIC9wGEHq3",
	},
});

const mailOptions = {
	from: "donrixy@gmail.com",
	to: "fostersoasare@example.com",
	subject: "Test email from Node.js",
	text: "Hello, this is a test email from Node.js using Sendinblue!",
};

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log("Email sent: " + info.response);
	}
});
