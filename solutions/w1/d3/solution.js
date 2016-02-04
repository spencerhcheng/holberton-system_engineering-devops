//see w1d2 solution for isPrime

function firstNPrimes(n){
  var primes = [];
  var num = 2;

  while(primes.length < n){
    if(isPrime(num)){
      primes.push(num);
    }

    num += 1;
  }

  return primes;
}

function sumOfNPrimes(n){
  var sum = 0;
  var primes = firstNPrimes(n);

  for(var i = 0;  i < primes.length; i += 1){
    sum += primes[i];
  }

  return sum;
}

/******************************************************************************/

function logEach(array){
  for(var i = 0; i < array.length; i += 1){
    console.log(i + ": " + array[i]);
  }
}

function maxValue(numbers){
  var largest = null;

  for(var i = 0; i < numbers.length; i += 1){
    var numb = numbers[i];

    if(largest === null || numb > largest){
      largest = numb;
    }
  }

  return largest;
}

function printRange(low, high){
  if(low > high){
    return "Bad Range";
  }

  for(var i = low; i <= high; i += 1){
    console.log(i);
  }
}
