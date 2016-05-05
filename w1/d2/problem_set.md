# Conditionals

## Truth Tables

  x  | y   | z   | x && y &#124;&#124; z |  x && (y &#124;&#124; z)
-----|-----|-----|-----------------------|--------------------------
true |true |false|                       |
true |false|false|                       |
false|true |false|                       |
false|false|false|                       |


  x  | y   | z   | x &#124;&#124; y && z |  x &#124;&#124; (y && z)
-----|-----|-----|-----------------------|-------------------------
true |true |false|                       |
true |false|false|                       |
false|true |false|                       |
false|false|false|                       |


## logBetween

Define a function logBetween(lowNum, highNum) that will print every number
from lowNum to highNum, inclusive. Inclusive means that the range includes
lowNum and highNum.

```javascript
> logBetween(-1, 2);
-1
0
1
2

> logBetween(14, 6);


> logBetween(4,6);
4
5
6
```

## fizzBuzz
3 and 5 are magic numbers. Define a function `fizzBuzz(max)` that takes a
number and prints to the console every number from 0 to `max` that is divisible
by either 3 or 5, but not both.

TEST: fizzBuzz(20) should print numbers 3, 5, 6, 9, 10, 12, and 18

## What will these evaluate to?

```javascript
function func1(num) {
  return num + 50;
}

function func2(num) {
  return num + " bottles of beer on the wall";
}

function func3(num) {
  var x = func1(num);
  return func2(x);
}

func3(5);
```

-----------------

```javascript
var foo = function(name) {
  return "Dance " + name + ", dance! "
}

var bar = function() {
  var str = "";

  for (var i = 0; i < 3; i += 1) {
    str += foo("Anthony");
    str += foo("Haseeb");
    str += foo("Winnie");
    str += " | ";
  }

  return str;
}

bar();
```

## isFactorOf

Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
is a factor of `number`. Otherwise, false.

```
> isFactorOf(6,2);
true

> isFactorOf(-6, 2);
true

> isFactorOf(5,0);
false
```

## isPrime

Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false. Assume `number` is a positive integer.

```
> isPrime(2)
true

> isPrime(10)
false

> isPrime(15485863)
true

> isPrime(3548563)
false
```

## Debug The Program

```
function sayHiNTimes(n) {
  var i = 0;

  while (i < n) {
    console.log("Hi");
  }
}
```

```
function isFive(n) {
  if (n = 5) {
    return true;
  } else {
    return false;
  }
}
```
