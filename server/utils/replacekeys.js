function resolvekeys(keys, file) {
	keys.forEach((e) => {
		let reg = new RegExp(e.key, "g");
		file = file.replace(reg, e.value);
	});
	return file;
}

module.exports = resolvekeys;
