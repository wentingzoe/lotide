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

// Test the function

console.log(letterPositions('lighthouse in the house'));

// Use  assertArraysEqual and eqArrays

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
// Test
assertArraysEqual(letterPositions('hello').e, [ 1 ]);
