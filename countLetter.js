// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function(sentence) {
  let letter = {};
  for (let l of sentence) {
    if (l !== ' ') {
      if (letter[l]) {
        letter[l] += 1;
      } else {
        letter[l] = 1;
      }
    }
  }
  return letter;
};
console.log(countLetters('lighthouse in the house'));
