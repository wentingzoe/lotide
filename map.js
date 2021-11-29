// const assertArraysEqual = require("./assertArraysEqual");

const words = [ 'ground', 'control', 'to', 'major', 'tom' ];
// map function
const map = function(array, callback) {
	const results = [];
	for (let item of array) {
		results.push(callback(item));
	}
	return results;
};

module.exports = map;

// // course example
// const results1 = map(words, (word) => word[0]);
// console.log(`The first letter: ${results1}`);

// // testing 1 ///
// const results2 = map(words, (word) => word.length > 4);
// const exp = [ true, true, false, true, false ];
// assertArraysEqual(results2, exp);

// // testing 2//
// const results3 = map(words, (word) => word.length);
// console.log(results3);

// // testing 3//
// const results4 = map(words, (word) => word[word.length - 1]);
// console.log(`The last letter${results4}`);
