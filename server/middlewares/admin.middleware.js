const jwt = require("jsonwebtoken");
const { fetchAdmin } = require("../models/Users/Users.model");

async function admin(req, res, next) {
	try {
		// let response = await fetchAdmin(true);
		if (!req?.headers?.authorization || !req.headers.authorization.startsWith("Bearer ")) {
			res.status(401).json({ error: "User doesn't have authorization set up" });
			return;
		}
		let token = req?.headers.authorization.split(" ")[1];
		// Compare auth
		let valid = await jwt.verify(token, process.env.JWT_SECRET);

		if (!valid._id) {
			res.status(401).json({ error: "User is not authorized" });
			return;
		}
		// Fetch admin and compare the ids
		let admin = await fetchAdmin();
		if (valid._id != admin._id) {
			res.status(401).json({ error: "User is not authorized" });
			return;
		}
		req.isAdmin = true;
		next();
	} catch (e) {
		res.status(401).json({ error: "User is not authorized" });
	}
}

module.exports = admin;
