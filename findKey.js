
// const assertEqual = require('./assertEqual');

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
module.exports = findKey;


