const jwt = require("jsonwebtoken");
const SmsClient = require("../../lib/twilioSms");
const { validateAdmin, fetchAdmin, updateResetCode, updatePassword } = require("../../models/Users/Users.model");
const bcrypt = require("bcrypt");

async function controllerValidateAdmin(req, res) {
	try {
		if (req.isAdmin) {
			res.status(200).json({ success: true });
		}
	} catch (err) {
		console.log(err);
		res.status(404).json({ error: err.message });
	}
}

async function controllerLogInAdmin(req, res) {
	let { password } = req.body;
	if (!password) {
		res.status(400).json({ error: "Please provide a password" });
		return;
	}

	// Fetch admin
	let admin = await fetchAdmin(true);

	let valid = await bcrypt.compare(password, admin.password);
	if (!valid) {
		res.status(400).json({ error: "Invalid admin password" });
		return;
	}

	let token = await jwt.sign({ _id: admin.id }, process.env.JWT_SECRET, { expiresIn: "30d" });
	res.status(200).json({ token });
}
async function controllerRequestPasswordReset(req, res) {
	try {
		// Check phone number
		let { number } = req.query;
		if (!number) {
			res.status(400).json({ error: "Please provide a phone number" });
			return;
		}

		if (process.env.ADMIN_PHONE !== number) {
			res.status(400).json({ error: "Invalid admin number" });
			return;
		}
		// Generate sms code
		let nums = "1234567890";
		let code = "";
		for (let i = 0; i < 6; i++) {
			code += nums[Math.floor(Math.random() * nums.length)];
		}

		// Send sms
		let sms = new SmsClient(`Your password reset code is ${code}`);
		await sms.sendMessage();

		// Fetch admin
		let admin = await fetchAdmin();

		// Salt code
		code = await bcrypt.hash(code, 10);

		// Store code
		let updateResponse = await updateResetCode(admin._id, code);
		res.status(200).json({ success: true });
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
}
async function controllerValidatePassword(req, res) {
	try {
		let { user, code } = req.body;
		if (!user || !code) {
			res.status(400).json({ error: "Please provide valid credentials" });
			return;
		}

		// Check code
		let admin = await fetchAdmin();

		// Compare
		let valid = await bcrypt.compare(code, admin.code);
		if (!valid) {
			res.status(404).json({ error: "The provided code is invalid" });
			return;
		}

		// Set a jwt token to be used in setting new password

		let token = await jwt.sign({ id: admin._id, code: admin.code }, process.env.JWT_SECRET, { expiresIn: "1h" });

		res.status(200).json({ token });
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
}
async function controllerUpdatePassword(req, res) {
	try {
		let { user, password } = req.body;
		if (!user || !password) {
			res.status(400).json({ error: "Please provide valid credentials" });
			return;
		}

		if (!req?.headers?.authorization || !req.headers.authorization.startsWith("Bearer ")) {
			res.status(400).json({ error: "User doesn't have authorization set up" });
			return;
		}
		let token = req?.headers.authorization.split(" ")[1];

		// Compare auth
		let valid = await jwt.verify(token, process.env.JWT_SECRET);

		if ((!valid.id, !valid.code)) {
			res.status(404).json({ error: "The provided token is invalid" });
			return;
		}

		// Hash password
		password = await bcrypt.hash(password, 10);
		// Update admin
		await updatePassword(valid.id, valid.code, password);

		res.status(201).json({ success: true });
	} catch (err) {
		let message = err.message === "jwt malformed" ? "An invalid token was provided." : err.message;
		res.status(404).json({ error: message });
	}
}

module.exports = {
	controllerValidateAdmin,
	controllerValidatePassword,
	controllerRequestPasswordReset,
	controllerUpdatePassword,
	controllerLogInAdmin,
};
