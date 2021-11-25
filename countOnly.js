const countOnly = function(allItems, itemsToCount) {
	let newItems = {};
	for (let name of allItems) {
		if (itemsToCount[name]) {
			if (newItems[name]) {
				newItems[name] += 1;
			} else {
				newItems[name] = 1;
			}
		}
	}

	return newItems;
};

// Test the countOnly function
const firstNames = [ 'Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe' ];

const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false });

console.log(result1);
