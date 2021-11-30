const assert = require('chai').assert;
const eqObjects = require('../eqObjects.js');

describe("#eqObjects", () => {
  const cd = { c: '1', d: [ '2', 3 ] };
  const dc = { d: [ '2', 3 ], c: '1' };
  const cd2 = { c: '1', d: [ '2', 3, 4 ] };
  it("should return true for (cd, dc)", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  
  it("should return false for (cd, cd2)", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
  
});
