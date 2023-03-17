const multer = require("multer");
const path = require("path");

function formatImageName(name) {
	return name.replace(/[^a-zA-Z0-9.]/g, "");
}
const storage = multer.diskStorage({
	destination: path.join(__dirname, "..", "..", "uploads", "blogs"),
	filename: (req, file, cb) => {
		cb(null, Date.now() + formatImageName(file.originalname));
	},
});
const blogsUpload = multer({
	storage,
});

module.exports = {
	blogsUpload,
};
