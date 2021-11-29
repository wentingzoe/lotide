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
module.exports = middle;


