const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	summary: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	tag: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
});

module.exports = mongoose.model("blogs", blogsSchema);
