const words = [ 'ground', 'control', 'to', 'major', 'tom' ];
// map function
const map = function(array, callback) {
	const results = [];
	for (let item of array) {
		results.push(callback(item));
	}
	return results;
};

// course example
const results1 = map(words, (word) => word[0]);
console.log(`The first letter: ${results1}`);

// assert Array Equal function
const eqArrays = function(arr1, arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2)) {
		if (arr1.length === arr2.length) {
			for (let i in arr1) {
				if (arr1[i] !== arr2[i]) {
					return false;
				}
			}
			return true;
		}
	} else {
		return false;
	}
};
const assertArraysEqual = function(actual, expected) {
	if (eqArrays(actual, expected)) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

// testing 1 ///
const results2 = map(words, (word) => word.length > 4);
const exp = [ true, true, false, true, false ];
assertArraysEqual(results2, exp);

// testing 2//
const results3 = map(words, (word) => word.length);
console.log(results3);

// testing 3//
const results4 = map(words, (word) => word[word.length - 1]);
console.log(`The last letter${results4}`);
