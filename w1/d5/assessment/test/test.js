var assert = require('assert');

var printRange = require('../assessment.js').printRange,
    unique = require('../assessment.js').unique,
    elementCount = require('../assessment.js').elementCount,
    reverseSentence = require('../assessment.js').reverseSentence,
    fizzBuzz = require('../assessment.js').fizzBuzz;

describe('#printRange()', function () {
  it('should print range between "start" and "end"', function () {
    var result = printRange(1, 5);
    var expected = [1,2,3,4,5];

    assert.equal(result.length, expected.length);

    for(var i = 0; i < result.length; i += 1){
      assert.equal(result[i], expected[i]);
    }
  });

  it('should return empty array if "start" > "end"', function () {
    assert.equal(printRange(5, 1).length, 0);
  });
});

describe('#unique()', function () {
  it('cookieMonster.name === "Fred"', function () {
    assert.equal(cookieMonster.name, "Fred");
  });
});

describe('#elementCount()', function () {
  it('cookieMonster.name === "Fred"', function () {
    assert.equal(cookieMonster.name, "Fred");
  });
});

describe('#reverseSentence()', function () {
  it('cookieMonster.name === "Fred"', function () {
    assert.equal(cookieMonster.name, "Fred");
  });
});

describe('#fizzBuzz()', function () {
  it('cookieMonster.name === "Fred"', function () {
    assert.equal(cookieMonster.name, "Fred");
  });
});
