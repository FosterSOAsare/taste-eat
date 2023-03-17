const mongoose = require("mongoose");

const dishesSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},

	imageUrl: {
		type: String,
		required: true,
	},
	summary: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("dishes", dishesSchema);
