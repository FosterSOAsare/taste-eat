const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connection.once("open", () => {
	console.log("Database connection successful...");
});

mongoose.connection.once("err", (err) => {
	console.log("An error occurred in database connection");
});
async function startMongoose() {
	await mongoose.connect(process.env.MONGO_URL);
}

module.exports = { startMongoose };
