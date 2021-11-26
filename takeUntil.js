const takeUntil = function(array, callback) {
	// ...
	const results = [];
	for (let item of array) {
		if (!callback(item)) {
			results.push(item);
		} else {
			return results;
		}
	}
};
/*     ----------------    */
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
/*     ----------------    */

const data1 = [ 1, 2, 5, 7, 2, -1, 2, 4, 5 ];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
const exp1 = [ 1, 2, 5, 7, 2 ];
assertArraysEqual(results1, exp1);

console.log('---');

const data2 = [ "I've", 'been', 'to', 'Hollywood', ',', "I've", 'been', 'to', 'Redwood' ];
const results2 = takeUntil(data2, (x) => x === ',');
console.log(results2);
const exp2 = [ "I've", 'been', 'to', 'Hollywood' ];
assertArraysEqual(results2, exp2);
