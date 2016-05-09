function isDivisibleByN (num, n)  {
  return num % n === 0;
}

/**************************************/

function isPrime (num)  {
  if(num < 2) {
    return false;
  }

  for(var i = 2; i < num; i += 1) {
    if(num % i === 0) {
      return false;
    }
  }
