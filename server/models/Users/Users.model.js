const usersCollection = require("./Users.mongo");

async function fetchAdmin(password = false) {
	try {
		let res = await usersCollection.findOne({}, { password: password ? 1 : 0 });
		return res;
	} catch (e) {
		console.log(e);
	}
}
async function updateResetCode(adminId, code) {
	try {
		let res = await usersCollection.updateOne({ _id: adminId }, { $set: { code } });
	} catch (e) {
		console.log(e);
	}
}
async function updatePassword(adminId, code, password) {
	try {
		let res = await usersCollection.updateOne({ _id: adminId, code: code }, { $set: { password }, $unset: { code: "" } });
	} catch (e) {
		console.log(e);
	}
}

module.exports = {
	fetchAdmin,
	updateResetCode,
	updatePassword,
};
