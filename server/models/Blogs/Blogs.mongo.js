const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({});

module.exports = mongoose.model("blogs", blogsSchema);
