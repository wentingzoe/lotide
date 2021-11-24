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
const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual([1, 2, 3], [1, 2, 3]);
// if (arr === arr1.length) {
//   console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2} ✅✅✅ `);
// } else {
//   console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} 🛑🛑🛑 `);
// }