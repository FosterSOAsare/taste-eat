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
	const upload = multer({ storage: storage });
	return upload;
}

function createCloudinaryUpload() {
	const storage = multer.memoryStorage({});
	let upload = multer({ storage: storage });
	return upload;
}

const uploadToCloudinary = createCloudinaryUpload();

module.exports = { createUpload, uploadToCloudinary };
