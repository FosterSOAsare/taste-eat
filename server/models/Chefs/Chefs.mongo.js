const mongoose = require("mongoose");

const chefsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	position: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	experience: {
		type: Number,
		required: true,
	},
	contact: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	summary: {
		type: String,
		required: true,
	},
	facebook: {
		type: String,
		required: false,
	},
	twitter: {
		type: String,
		required: false,
	},
	instagram: {
		type: String,
		required: false,
	},
	pinterest: {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model("chefs", chefsSchema);
