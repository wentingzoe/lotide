const letterPositions = function(sentence) {
  const results = {};
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

