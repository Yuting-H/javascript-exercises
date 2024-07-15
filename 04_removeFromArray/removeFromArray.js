const removeFromArray = function (array, ...theArgs) {
	let returnArr = [];

	for (let i = 0; i < array.length; i++) {
		//check if this elem matches remove
		if (!theArgs.includes(array[i])) {
			returnArr.push(array[i]);
		}
	}
	return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
