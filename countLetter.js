
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
module.exports = countLetters;

console.log(countLetters('lighthouse in the house'));
