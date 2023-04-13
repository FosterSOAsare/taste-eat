require("dotenv").config();
const cloudinary = require("cloudinary");
const path = require("path");
const DataUri = require("datauri/parser");

const parser = new DataUri();

cloudinary.v2.config({
	cloud_name: process.env.cloudinary_cloud_name,
	api_key: process.env.cloudinary_api_key,
	api_secret: process.env.cloudinary_api_secret,
	secure: true,
});

async function getSecuredUrl(file, folder) {
	let public_id = path.parse(file.originalname).name;
	const extName = path.extname(file.originalname).toString();
	const file64 = parser.format(extName, file.buffer);
	let res = await cloudinary.v2.uploader.upload(file64.content, { folder: folder, use_filename: true, public_id });
	return res.secure_url;
}

module.exports = getSecuredUrl;
