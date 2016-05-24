/*
******************************************************************************
Write a function mapCreator that takes a callback as an argument
and returns a new function. The new function should take an array as an argument
and return a new array, with each element 'mapped' to a new element
using the original callback.

var squareMapper = mapCreator(function (el) {
  return el * el;
});

squareMapper([1, 2, 3, 4]); //=> [1, 4, 9, 16]
*/

function mapCreator(callback) {
  // your code here
}

/*
******************************************************************************
Write a function objectSelect, which takes as arguments an object, and a callback,
and returns a new object where all the key value pairs return true,
when passed into the callback.
var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

var matchingPairs = objectSelect(obj, function (key, val) {
 return key === val;
});

matchingPairs; //=> {
  one: "one",
  three: "three"
}
*/

function objectSelect(obj, callback) {
  // your code here
}


/*
******************************************************************************
Write a function randomNumberGenerator(min, range), which takes a minimum value
and a range, it should return random whole numbers in the specified range
starting at the minimum value.

randomNumberGenerator(1, 10) => 1
randomNumberGenerator(1, 10) => 7
randomNumberGenerator(1, 10) => 10
randomNumberGenerator(1, 10) => 3

randomNumberGenerator(30, 1) => 30
randomNumberGenerator(30, 1) => 31

randomNumberGenerator(100, 100) => 100
randomNumberGenerator(100, 100) => 200
randomNumberGenerator(100, 100) => 136
randomNumberGenerator(100, 100) => 175
*/

function randomNumberGenerator(min, range) {
  // your code here
}
