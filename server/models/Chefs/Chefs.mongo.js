const mongoose = require("mongoose");

const chefsSchema = new mongoose.Schema({});

module.exports = mongoose.model("chefs", chefsSchema);
