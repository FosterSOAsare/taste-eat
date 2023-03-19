const { validateAdmin } = require("../../models/Users/Users.model");

async function controllerValidateAdmin(req, res) {
	try {
		let { type, value } = req.query;
		let response = await validateAdmin(type, value);
		res.status(200).json(response);
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
}

module.exports = {
	controllerValidateAdmin,
};
