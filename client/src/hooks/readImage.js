function readImage(image) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onloadend = () => {
			resolve(reader.result);
		};
	});
}

export default readImage;
