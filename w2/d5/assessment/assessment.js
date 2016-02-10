/******************************************************************************
** Write a function #pairDivisibleBy5(array) that returns an string where every 'I'
** is replaced with 'we', every 'mine' is replaced with 'ours', every 'my' is replaced with 'our',
** and every 'me' is replaced with "us"
** Example
** royalWe("I want to go to the store.") => "we want to go to the store."
** royalWe("This is my house and you will respect me!") => "This is our house and you will respect us!"
** royalWe("This is mine...") => "This is ours..."
** royalWe("Jump for my love") => "Jump for our love"
*/

function royalWe(sentence){
  // your code here...
}

/******************************************************************************
** Write a function #myIndex(array, ele) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array
** Example
** elementCount(["a", "a", "a", "b"]) => { "a" : 3, "b" : 1 }
*/

function elementCount(array){
  // your code here...
}

/******************************************************************************
** Write a function #magicCipher(start, end) that returns an array that contains all
** numbers between 'start' and 'end' (exclusive) in reverse-sequential order
** Example
** range(2,7) => [6, 5, 4, 3]
** range(4,2) => []
*/

function range(start, end){
  // your code here...
}

/******************************************************************************
** Write a function #minMaxDifference(sentence) that return a string where all the
** words in the input sentence are reversed
** Example
** reverseSentence("Go to the store") => "store the to Go"
** reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*/
function reverseSentence(sentence){
  // your code here...
}

/******************************************************************************
** Write a function that #dynamicFizzBuzz(array) that returns an array of numbers up to
** the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.
** Example
** magicNumbers(20) => [4, 6, 8, 16, 18, 20]
*/
function dynamicFizzBuzz(max, num1, num2){
  // your code here...
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  range : range,
  royalWe : royalWe,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  magicNumbers : magicNumbers
};
