
// const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let index = sentence[i];
    if (index !== ' ') {
      if (results[index]) {
        results[index].push(i);
      } else {
        results[index] = [ i ];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

// // Test the function
// console.log(letterPositions('lighthouse in the house'));

// // Test
// assertArraysEqual(letterPositions('hello').e, [ 1 ]);
