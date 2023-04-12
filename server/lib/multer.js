const multer = require("multer");
const path = require("path");

function formatImageName(name) {
	return name.replace(/[^a-zA-Z0-9.]/g, "");
}

function createUpload(folder) {
	const storage = multer.diskStorage({
		destination: path.join(__dirname, "..", "uploads", folder),
		filename: (req, file, callback) => {
			callback(null, Date.now() + formatImageName(file.originalname));
		},
	});
	const upload = multer({
		storage: storage,
	});
	return upload;
}

module.exports = createUpload;
