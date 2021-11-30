const assert = require('chai').assert;
const countLetter = require('../countLetter.js');

describe("#countLetter", () => {
  it("should return { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for lighthouse in the house", () => {
    assert.deepEqual(countLetter('lighthouse in the house'), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
  
});