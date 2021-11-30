const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue.js');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: 'The Expanse',
    comedy: 'Brooklyn Nine-Nine',
    drama: 'The Wire'
	};
  it("should return drama for The Wire", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it("should return undefined for That 70s Show", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), '');
   });
})