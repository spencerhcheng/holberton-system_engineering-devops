function pe1() {
  var sum = 0;
  for(var i = 3; i <1000; i += 1) {
    if(i%3===0 || i%5 === 0) {
      sum += i;
    }
  }
  return sum;
}

//2
function pe2() {
  var prev = 1;
  var current = 2;
  var sum = 0;

  while(current <= 4000000) {
    if(current % 2 === 0) {
      sum += current;
    }

    var next = prev + current;
    prev = current;
    current = next;
  }

  return sum;
}

//3
function pe3() {
  var n = 600851475143;
  var i = 2;

  while(n > i) {
    if(n % i === 0) {
      n = n / i;
    }
    i += 1;
  }

  return n;
}

//4
function pe4() {
  var largest = -1;

  for (var i = 999; i > 0; i--) {
    for (var j = 999; j >= i; j--) {
      var product = (i * j) + "";
      var reversed = product.split("").reverse().join("");

      if(product === reversed && parseInt(product) > largest) {
        largest = parseInt(product);
      }
    }
  }

  return largest;
}

//5
function pe5() {
  var number = 2520;

  while(true) {
    var isDivisible = true;

    for (var i = 3; i <= 20; i++) {
      if(number % i !== 0) {
        isDivisible = false;
        break;
      }
    }

    if(isDivisible) {
      return number;
    }

    number += 2;
  }
}

//6
function pe6() {
  var sum = 0;
  var sumOfSquares = 0;

  for (var i = 1; i <= 100; i++) {
    sum += i;
    sumOfSquares += (i * i);
  }

  return Math.abs(sumOfSquares - (sum * sum))
}

//7
function isPrime(primes, n) {
  for (var i = 0; i < primes.length; i++) {
    if(n % primes[i] === 0) {
      return false;
    }
  }

  return true;
}

function nextPrime(primes) {
  var n = primes[primes.length - 1];

  while(true) {
    if(isPrime(primes, n)) {
      return n;
    }

    n += 1;
  }
}

function pe7() {
  var primes = [2,3,5];
  var n = 7;

  while(primes.length < 10001) {
    var n = nextPrime(primes);
    primes.push(n);
  }

  return primes[primes.length - 1];
}

//8
var fs = require('fs');

function getRecords(cb) {
  fs.readFile('pe8_data.txt', 'utf8', function(err, data) {
    if(err) {
      console.log(err);
      return;
    }

    cb(data.split("\n").join(""));
  });
}

function pe8(cb) {
  getRecords(function(nums) {
    var largestProduct = -1;

    for (var i = 12; i < nums.length; i++) {
      var product = nums[i];
      for(var j = 1; j <= 12; j += 1) {
        product *= parseInt(nums[i - j]);
      }

      if(product > largestProduct) {
        largestProduct = product
      }
    }

    console.log(largestProduct);

  });
}

//9

pe8();
