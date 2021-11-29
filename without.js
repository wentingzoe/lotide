const assertArraysEqual = require("./assertArraysEqual");
const without = function(source, itemsToRemove) {
  let newarr = source.filter(x => !itemsToRemove.includes(x));
  return newarr;
}
module.exports = without;

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
//test the without funtion work
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);