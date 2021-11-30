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


