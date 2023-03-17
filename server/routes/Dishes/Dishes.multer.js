const multer = require("multer");
const path = require("path");

function formatImageName(name) {
	return name.replace(/[^a-zA-Z0-9.]/g, "");
}
const storage = multer.diskStorage({
	destination: path.join(__dirname, "..", "..", "uploads", "dishes"),
	filename: (req, file, cb) => {
		cb(null, Date.now() + formatImageName(file.originalname));
	},
});
const dishesUpload = multer({
	storage,
});

module.exports = {
	dishesUpload,
};
