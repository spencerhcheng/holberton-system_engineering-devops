**You will be modifying the [test.js](./test/test.js) and [problem_set.js](./problem_set.js) files.**

### isPrime

Write a function `isPrime(num)` which takes a number and returns true if that number is prime.

#### Test Cases

Today's theme is __test-driven development__;  practice good TDD by writing test cases _first_.

---
### myMap

Write a function `myMap(arr, cb)` which takes an array and a callback. The function will return a new "_mapped_" array whose elements are the return values of the original's when sent through the callback function.

#### Test Cases

Transform this code into a Mocha test case:

```javascript
var mapped = myMap([1, 2, 3], function(e){
  return e * 2;
});

/*
  Find a way to assert that mapped is equal to this:
  [2, 4, 6]
*/
```

---
### myInject

Write a function `myInject(arr, cb, accum)` which takes<br>
- An array of numbers
- A function
- An optional initial accumulator value.
  - The initial accumulator value defaults to __zero__  if no value is given.

`myInject` passes the callback function:
- The current __accumulator__ value
- Every __element__,
- Its corresponding __index__,
- The __array__ itself

The __accumulator__ value is __updated to__ be the __result of__ calling the
__callback function__ on __each element__. When all elements have been processed, myInject returns the __accumulator value__.

#### Test Cases

Today's theme is __test-driven development__;  practice good TDD by writing test cases _before_ solving myInject.

 Given below are three examples; transform them into __Mocha tests__. _Feel free to invent your own test cases as well._

```javascript
// Test #1:
var result1 = myInject([1,2,3], function(accum, ele, i, arr) {
  return accum + (ele * 2);
}, 1);

// Assert this:
result1 === 13 // 1 + (1 * 2) + (2 * 2) + (3 * 2)

// Test #2:
var result2 = myInject([1,2,3], function(accum, ele, i, arr) {
 return accum + ele + i;
});

// Assert this:
result2 === 9 // 0 + (1 + 0) + (2 + 1) + (3 + 2)

// Test #3:
var result3 = myInject(["I like", "dogs and", "also cats!"],
function(accum, ele, i, arr) {
 return accum + " " + ele.split(" ")[Math.floor(Math.random() * 2)];
}, "Maybe If");

// Assert this:
result3 === ???? // Given that the resulting string will be random,
                 // how can it be tested?
```
