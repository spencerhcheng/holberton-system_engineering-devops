var assert = require('assert');

var laligatSequence = require('../assessment.js').laligatSequence,
    inPigLatin = require('../assessment.js').inPigLatin;

describe('#inPigLatin()', function () {
  it('should return the product of the min and max value of the array.', function () {
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

describe('#laligatSequence()', function () {
  it('should return the index of the element in the array', function () {
    var result = laligatSequence(10, 4);
    var expected = [ 10, 17, 58, 381 ];
    assert.deepEqual(result, expected);

    result = laligatSequence(5, 2);
    expected = [ 5, 10 ];
    assert.deepEqual(result, expected);

    result = laligatSequence(5, 0);
    expected = [];
    assert.deepEqual(result, expected);
  });
});
