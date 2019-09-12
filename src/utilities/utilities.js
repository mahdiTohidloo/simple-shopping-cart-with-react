// convert engtlish number to persian number
export const  convertEnglishNumberToPersian = (number) => {
	// convert number to string
	const enteredNumber = number !== null ? number.toString() : '';
	if (enteredNumber) {
		// persian numbers array
		const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
		// convert string to array of chars
		const chars = number.toString().split('');
		
		for (let counter = 0; counter < chars.length; counter++) {
			if (/\d/.test(chars[counter])) {
				chars[counter] = persianNumbers[chars[counter]];
			} else {
				chars[counter] = chars[counter];
			}
		}
		return chars.join('');
	}
	return number;
}