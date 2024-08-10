const findTheOldest = function (people) {
	people.sort((a, b) => {
		let aAge, bAge;

		let currYear = new Date().getFullYear();

		if (a.yearOfDeath) {
			aAge = a.yearOfDeath - a.yearOfBirth;
		} else {
			aAge = currYear - a.yearOfBirth;
		}

		if (b.yearOfDeath) {
			bAge = b.yearOfDeath - b.yearOfBirth;
		} else {
			bAge = currYear - b.yearOfBirth;
		}

		if (aAge < bAge) {
			return 1;
		} else {
			return -1;
		}
	});

	console.table(people);
	return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
