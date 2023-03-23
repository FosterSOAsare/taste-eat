class Validations {
	checkTextLength(text, length) {
		return text.length > length;
	}
	validateNumber(number) {
		return /^[0-9]+$/.test(number);
	}
	validatePhoneNumber(number) {
		return /^(?:(?:\+|00)([1-9]\d{0,2}))?[\-\.\(\)\s]*(?:([1-9]\d{0,3})[\-\.\(\)\s]*){2,3}([0-9]{4})$/.test(number);
	}
	validateEmail(email) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}
}

export default Validations;
