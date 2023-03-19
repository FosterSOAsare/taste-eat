const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
	password: {
		required: true,
		type: "String",
	},
});

module.exports = mongoose.model("Users", usersSchema);
