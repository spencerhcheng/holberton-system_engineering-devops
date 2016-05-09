//see w1d2 solution for isPrime

function firstNPrimes(n) {
  var primes = [];
  var num = 2;

  while(primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }

    num += 1;
  }

  return primes;
}

function sumOfNPrimes(n) {
  var sum = 0;
  var primes = firstNPrimes(n);

  for(var i = 0;  i < primes.length; i += 1) {
    sum += primes[i];
  }

  return sum;
}

/******************************************************************************/

function logEach(array) {
  for(var i = 0; i < array.length; i += 1) {
    console.log(i + ": " + array[i]);
  }
}

function maxValue(numbers) {
  var largest = null;

  for (var i = 0; i < numbers.length; i += 1) {
    var num = numbers[i];

    if (largest === null || num > largest) {
      largest = num;
    }
  }

  return largest;
}

function printRange (start, end) {
  if (start > end) {
    return "Bad Range";
  }

  for (var i = start; i <= end; i += 1) {
    console.log(i);
  }
}
