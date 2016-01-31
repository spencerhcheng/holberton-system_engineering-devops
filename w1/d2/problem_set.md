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

Define a function `logBetween(lowNum, highNum)` that will print every number from
`lowNum` to `highNum`, inclusive. Inclusive means that the the range that will
be printed will include the `lowNum` and `highNum`.

## fizzBuzz
3 and 5 are magic numbers. Define a function `fizzBuzz(max)` that takes a
number and prints to the console every number from 0 to `max` that is divisible
by either 3 or 13, but not both.

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
