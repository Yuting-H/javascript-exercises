const palindromes = function (str) {
	str = str.toLowerCase();
	let arr = Array.from(str);
	arr = arr.filter((char) => {
		if (char == " " || char == "." || char == "!" || char == ",") {
			return false;
		} else {
			return true;
		}
	});

	for (let i = 0; i < arr.length / 2; i++) {
		if (arr.at(i) != arr.at((i + 1) * -1)) {
			return false;
		}
	}

	return true;
};

// Do not edit below this line
module.exports = palindromes;
