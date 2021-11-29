// const assertEqual = require('./assertEqual');
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
module.exports = findKeyByValue;

// /// test ////
// const bestTVShowsByGenre = {
// 	sciFi: 'The Expanse',
// 	comedy: 'Brooklyn Nine-Nine',
// 	drama: 'The Wire'
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
