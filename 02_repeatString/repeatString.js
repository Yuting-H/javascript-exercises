const repeatString = function (string, times) {
	let str = "";

	if (times < 0) {
		return "ERROR";
	}

	for (let index = 0; index < times; index++) {
		str = str.concat(string);
	}
	return str;
};

// Do not edit below this line
module.exports = repeatString;
