const mongoose = require("mongoose");

const dishesSchema = new mongoose.Schema({});

module.exports = mongoose.model("dishes", dishesSchema);
