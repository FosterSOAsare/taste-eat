const multer = require("multer");
const path = require("path");

function formatImageName(name) {
	return name.replace(/[^a-zA-Z0-9.]/g, "");
}
const storage = multer.diskStorage({
	destination: path.join(__dirname, "uploads"),
	filename: (req, file, cb) => {
		cb(null, Date.now() + formatImageName(file.originalname));
	},
});
const uploads = multer({
	storage,
});

module.exports = {
	uploads,
};
