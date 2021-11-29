
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
module.exports = eqArrays;


