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

const middle = function(arr) {
	let newarr = [];
	if (arr.length <= 2) {
		newarr = [];
	} else if (arr.length % 2 === 1) {
		const i = (arr.length - 1) / 2;
		newarr.push(arr[i]);
	} else {
		const j = arr.length / 2 - 1;
		const k = j + 1;
		newarr.push(arr[j], arr[k]);
	}
	return newarr;
};
assertArraysEqual(middle([ 1 ]), []);
assertArraysEqual(middle([ 1, 2 ]), []);
assertArraysEqual(middle([ 1, 2, 3 ]), [ 2 ]);
assertArraysEqual(middle([ 1, 2, 3, 4, 5 ]), [ 3 ]);
assertArraysEqual(middle([ 1, 2, 3, 4 ]), [ 2, 3 ]);
assertArraysEqual(middle([ 1, 2, 3, 4, 5, 6 ]), [ 3, 4 ]);
