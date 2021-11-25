const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  } else {
    for (let k of key1) {
      if (Array.isArray(object1[k]) && Array.isArray(object2[k])) {
        if (!eqArrays(object1[k], object2[k])) {
          return false;
        }
      } else {
        if (object1[k] !== object2[k]) {
          return false;
        }
      }
    }
    return true;
  }
};
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

// TEST//

const cd = { c: '1', d: [ '2', 3 ] };
const dc = { d: [ '2', 3 ], c: '1' };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: '1', d: [ '2', 3, 4 ] };
assertEqual(eqObjects(cd, cd2), false);
