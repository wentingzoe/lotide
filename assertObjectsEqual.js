const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
	const inspect = require('util').inspect;
	if (eqObjects(actual, expected)) {
		console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
	}
};
module.exports = assertObjectsEqual;

// TEST//

// const cd = { c: '1', d: [ '2', 3 ] };
// const dc = { d: [ '2', 3 ], c: '1' };
// assertObjectsEqual(cd, dc);

// const cd2 = { c: '1', d: [ '2', 3, 4 ] };
// assertObjectsEqual(cd, cd2);
