function logBetween(lowNum, highNum) {
  for(var i = lowNum; i <= highNum; i += 1) {
    console.log(i);
  }
}


function fizzBuzz1(max) {
  for(var i = 0; i < max; i += 1) {

    if(i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if(i % 5 === 0 && i % 3 !== 0){
      console.log(i);
    }

  }
}


function fizzBuzz2(max) {
  for(var i = 0; i < max; i += 1) {

    if(i % 3 === 0) {
      if(i % 5 !== 0){
        console.log(i);
      }
    } else if(i % 5 === 0){
      console.log(i);
    }

  }
}


function isFactorOf(number, factor) {
  return (number % factor === 0);
}


function isPrime(number){
  if(number < 2) {
    return false;
  }

  var prime = true;

  for(var i = 2; i < number; i += 1) {
    if(number % i === 0) {
      prime = false;
    }
  }

  return prime;
}

function isPrimeOptimized(number){
  if(number < 2) {
    return false;
  }
  
  for(var i = 2; i < number; i += 1) {
    if(number % i === 0) {
      return false;
    }
  }

  return true;
}
