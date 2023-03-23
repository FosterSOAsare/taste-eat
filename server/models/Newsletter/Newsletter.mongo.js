const mongoose = require("mongoose");

const newsletterSchema = new mongoose.Schema({
	email: {
		required: true,
		type: String,
	},
	status: {
		required: true,
		type: String,
	},
});

module.exports = mongoose.model("Newsletters", newsletterSchema);
