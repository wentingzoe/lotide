const assertEqual = function(actual, expected) {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

const findKey = function(mainobjects, callback) {
	let results = '';
	const objects = Object.keys(mainobjects);
	for (let name of objects) {
		if (callback(mainobjects[name])) {
			results = name;
			return results;
		}
	}
};

// TEST Example
const test = findKey(
	{
		'Blue Hill': { stars: 1 },
		Akaleri: { stars: 3 },
		noma: { stars: 2 },
		elBulli: { stars: 3 },
		Ora: { stars: 2 },
		Akelarre: { stars: 3 }
	},
	(x) => x.stars === 2
);
console.log(test);
assertEqual(test, 'noma');
