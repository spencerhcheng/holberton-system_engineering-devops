var assert = require('assert');

var divisibleBy7Sort = require('../assessment.js').divisibleBy7Sort,
    inPigLatin = require('../assessment.js').inPigLatin,
    longestLetterStreak = require('../assessment.js').longestLetterStreak;

describe('#longestLetterStreak()', function () {
  it('should return the longest consecutive searchLetters found in the str.', function () {
    assert.equal(longestLetterStreak("ACCA", ["C"]), 2);
    assert.equal(longestLetterStreak("YACCADCA", ["C", "A"]), 4);
    assert.equal(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]), 3);
  });
});

describe('#divisibleBy7Sort()', function () {
  it('should put all number divisible by 7 at the end.', function () {
    var result = divisibleBy7Sort([1, 4, 7, 43, 32, 14, 12]);
    var expected = [1, 4, 43, 32, 12, 7, 14];
    assert.deepEqual(result, expected);

    result = divisibleBy7Sort([49, 40, 42, 51, 20, -7]);
    expected = [40, 51, 20, 49, 42, -7];
    assert.deepEqual(result, expected);
  });
});

describe('#inPigLatin()', function () {
  it('should translate a sentence into pig latin.', function () {
    var result = inPigLatin("Shmanthony is the best teacher");
    var expected = "Anthonyshmay isyay ethay estbay eachertay";
    assert.equal(result, expected);

    result = inPigLatin("let us Dance");
    expected = "etlay usyay Anceday";
    assert.equal(result, expected);

    result = inPigLatin("this is the time of my life");
    expected = "isthay isyay ethay imetay ofyay myay ifelay";
    assert.equal(result, expected);
  });
});
