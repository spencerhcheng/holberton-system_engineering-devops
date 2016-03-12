/******************************************************************************
** Write a function #range(start, end) that returns an array that contains all
** numbers between 'start' and 'end' in sequential order
** Example
** range(1,4) => [1,2,3,4]
** range(4,2) => []
*/

function range(start, end){
  // your code here...
}

/******************************************************************************
** Write a function #unique(array) that returns an array where all the duplicates
** of the input array have been removed; in other words, every element remaining is
** unique.
** Example
** unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*/

function unique(array){
  // your code here...
}

/******************************************************************************
** Write a function #elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array
** Example
** elementCount(["a", "a", "a", "b"]) => { "a" : 3, "b" : 1 }
*/

function elementCount(array){
  // your code here...
}

/******************************************************************************
** Write a function #reverseSentence(sentence) that return a string where all the
** words in the input sentence are reversed
** Example
** reverseSentence("Go to the store") => "store the to Go"
** reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*/
function reverseSentence(sentence){
  // your code here...
}

/******************************************************************************
** Write a function that #fizzBuzz(max) that returns an array of numbers under
** the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.
** Example
** fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18, 20]
*/
function fizzBuzz(max){
  // your code here...
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  range : range,
  unique : unique,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  fizzBuzz : fizzBuzz
};
