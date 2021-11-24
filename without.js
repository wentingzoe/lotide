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

const without = function(source, itemsToRemove) {
  let newarr = source.filter(x => !itemsToRemove.includes(x));
  return newarr;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
//test the without funtion work
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);