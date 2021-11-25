const findKeyByValue = function(mainobjects, value) {
	let results = '';
	const objects = Object.keys(mainobjects);
	for (let x of objects) {
		if (mainobjects[x] === value) {
			results = x;
		}
	}
	return results;
};

/// test ////
const assertEqual = function(actual, expected) {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};
const bestTVShowsByGenre = {
	sciFi: 'The Expanse',
	comedy: 'Brooklyn Nine-Nine',
	drama: 'The Wire'
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
