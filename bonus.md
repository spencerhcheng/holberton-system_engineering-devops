### Truthy or Falsey
Will these expressions evaluate to true or false. Check your work in the console.

* `(false || false || true) && (true && true && false)`
* `(false || false) && (false && false) || (true && false) || (false && true)`

## Truth Table

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

## dynamicFizzBuzz
Define a function `dynamicfizzBuzz(max, num1, num2)` that takes three numbers
as arguments and prints to the console every number from 0 to `max` that is
divisible by either `num1` or `num2`, but not both.

## What will these evaluate to?

```javascript
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
