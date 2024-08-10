const add = function (a, b) {
	let args = Array.from(arguments);
	return args.reduce((accu, curr) => {
		return accu + curr;
	});
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (array) {
	return array.reduce((sum, curr) => {
		return sum + curr;
	}, 0);
};

const multiply = function (arr) {
	return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function (base, power) {
	let result = base;

	for (let i = 0; i < power - 1; i++) {
		result = result * base;
	}
	return result;
};

const factorial = function (num) {
	if (num == 0) {
		return 1;
	}
	if (num == 1) {
		return 1;
	}
	return factorial(num - 1) * num;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
