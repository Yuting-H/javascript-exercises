const reverseString = function (string) {
	//split the string into array
	let stringArr = string.split();
	let returnStr = "";

	for (let index = string.length - 1; index > -1; index--) {
		returnStr = returnStr + string[index];
	}
	return returnStr;
};

// Do not edit below this line
module.exports = reverseString;
