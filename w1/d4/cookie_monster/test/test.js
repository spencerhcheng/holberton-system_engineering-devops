var assert = require('assert');
var cookieMonster = require('../cookieMonster.js');

describe('Cookie Monster', function() {

  describe('initial properties:', function () {
    it('cookieMonster.name === "Fred"', function () {
      assert.equal(cookieMonster.name, "Fred");
    });

    it('cookieMonster.hairColor === "blue"', function () {
      assert.equal(cookieMonster.hairColor, "blue");
    });

    it('cookieMonster.cookiesEaten === 0', function () {
      assert.equal(cookieMonster.cookiesEaten, 0);
    });

    it('cookieMonster.kaleEaten === 0', function () {
      assert.equal(cookieMonster.kaleEaten, 0);
    });
  });

  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });

  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });

  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });

  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });

});
