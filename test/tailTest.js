const assert = require('chai').assert;
const tail   = require('../tail');
// const assertEqual = require('./assertEqual');
describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);

  it("returns length 2 for [\"Hello\", \"Lighthouse\", \"Labs\"] after tail",()=> {
    assert.deepEqual(result.length, 2)
  });
  it("returns \"Ligthouse\" is first element for [\"Hello\", \"Lighthouse\", \"Labs\"] after tail",()=> {
    assert.deepEqual(result[0], "Lighthouse")
  });
  it("returns \"Labs\" is second element for [\"Hello\", \"Lighthouse\", \"Labs\"] after tail",()=> {
    assert.deepEqual(result[1], "Labs")
  });
  
  const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
  it("returns length 2 for [\"Yo Yo\", \"Lighthouse\", \"Labs\"] after tail",()=> {
    assert.deepEqual(words.length, 2)
  });

  it("returns [2,3] for [1,2,3] ",() => {
    assert.deepEqual(tail([1,2,3]),[2,3])
  })

});








