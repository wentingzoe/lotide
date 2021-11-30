const assert = require('chai').assert;
const countOnly   = require('../countOnly.js');

describe("#countOnly", () => {
  const firstNames = [ 'Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe' ];

  it("should return { Fang: 2, Jason: 1 }", () => {
    assert.deepEqual(countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false }), { Fang: 2, Jason: 1 });
  });
  
});