const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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
module.exports = eqObjects;

// // TEST//

// const cd = { c: '1', d: [ '2', 3 ] };
// const dc = { d: [ '2', 3 ], c: '1' };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: '1', d: [ '2', 3, 4 ] };
// assertEqual(eqObjects(cd, cd2), false);
