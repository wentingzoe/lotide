const assert = require('chai').assert;
const letterPositions   = require('../letterPositions.js');

describe("#letterPositions", () => {

  it("should return index[1] for e of Hello", () => {
    assert.deepEqual(letterPositions('hello').e, [ 1 ]);
  });
  it("should return [2, 3] for l in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
})