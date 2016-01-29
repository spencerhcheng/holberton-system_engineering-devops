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

  x  | y   | z   | (x && y) &#124;&#124; z
-----|-----|-----|------------------------
true |true |true |
true |true |false|
true |false|true |
true |false|false|
false|true |true |
false|true |false|
false|false|true |
false|false|false|

## logBetween

Define a function `logBetween(lowNum, highNum)` that will print every number from
`lowNum` to `highNum`, inclusive.

## magicNumbers
3 and 13 are magic numbers. Define a function `magicNumbers(max)` that takes a
number and prints to the console every number from 0 to `max` that is divisible
by either 3 or 13, but not both.

## dynamicMagicNumbers
Define a function `dynamicMagicNumbers(max, num1, num2)` that takes three numbers
as arguments and prints to the console every number from 0 to `max` that is
divisible by either `num1` or `num2`, but not both.

## What will these evaluate to?

```
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

```
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

-----------------

```
var rickyBobbyJr = function(num) {
  if(num < -5) {
    return "Bobby";
  } else if(num < 5) {
    return "Ricky";
  } else {
    return "Junior";
  }
};

var makeNum = function(num) {
  return (num * 2) - (num * num);
};

var sayHi = function(n) {
  var x = makeNum(n);
  return "Hey now, " + rickyBobbyJr(x);
}

sayHi(3);
```

## isFactorOf

Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
is a factor of `number`. Otherwise, false.

## isPrime

Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false.

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
