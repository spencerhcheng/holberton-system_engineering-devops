/******************************************************************************
** Write a function #divisibleByFivePairSum(array), that takes an array of numbers.
** It should return an array of all the pairs of indices whose sum is a multiple of five.

** Examples:
** divisibleByFivePairSum([1, 5, 2, 0, 4]) => [ [0, 4], [1, 3] ]
** divisibleByFivePairSum([13, 22, 8, -3, 12]) => [[0, 1], [0, 3], [0, 4], [1, 2], [2, 3], [2, 4]]
*/

function divisibleByFivePairSum(array){
  // your code here...
}

/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects).
** DO NOT USE JAVASCRIPT'S BUILT-IN indexOf METHOD.

** Examples:
** myIndexOf([1, 2, 3, 4, 5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/

function myIndexOf(array, ele){
  // your code here...
}

/******************************************************************************
** Write a function #magicCipher(sentence, cipher) that takes in an string (sentence)
** and an object (cipher). Return a string where every character is replaced with its
** corresponding value in the cipher. In other words, key-value pairs in the
** cipher are defined such that the key is the character to be replaced by the
** value character. If the character doesn't exist in the cipher, use the original
** character in the sentence. See the examples.

** Examples:
** magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
** magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
** magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*/

function magicCipher(sentence, cipher){
  // your code here...
}

/******************************************************************************
** Write a function `minMaxDifference(array)` that returns the difference between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.

** Examples:
** minMaxDifference([1,2,3,4,5]) => 4
** minMaxDifference([5,4,3,2,1]) => 4
** minMaxDifference([4,2,5,1,-5]) => 10
*/
function minMaxDifference(array){
  // your code here...
}

/******************************************************************************
** Write a function that #dynamicFizzBuzz(max, num1, num2) that returns an array
** of numbers up to the max. Each number should be either divisible by num1 or num2,
** BUT NOT BOTH.

** Examples:
** dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
** dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*/

function dynamicFizzBuzz(max, num1, num2){
  // your code here...
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  divisibleByFivePairSum : divisibleByFivePairSum,
  myIndexOf : myIndexOf,
  magicCipher : magicCipher,
  minMaxDifference : minMaxDifference,
  dynamicFizzBuzz : dynamicFizzBuzz
};
