const fibonacci = function (num) {
	num = parseInt(num);

	if (num < 0) {
		return "OOPS";
	}

	let num1 = 1;
	let num2 = 1;
	let nextnum = num1 + num2;

	switch (num) {
		case 0:
			return 0;
			break;

		case 1:
			return num1;
			break;
		case 2:
			return num2;
			break;
		case 3:
			return nextnum;
			break;

		default:
			break;
	}

	for (let i = 3; i < num; i++) {
		//updates
		num1 = num2;
		num2 = nextnum;

		//iterate
		nextnum = num1 + num2;
	}

	return nextnum;
};

// Do not edit below this line
module.exports = fibonacci;
