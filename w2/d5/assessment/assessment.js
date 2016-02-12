/******************************************************************************
** Write a function #divisibleByFivePairSum(array), that takes an array of numbers.
** It should return an array of all the pairs of indices whose sum is a multiple of five.
** Example
** divisibleByFivePairSum([1, 5, 2, 0, 4])
** divisibleByFivePairSum([13, 22, 8, -3, 12])
*/

function divisibleByFivePairSum(array){
  // your code here...
}

/******************************************************************************
** Write a function #myIndex(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist.
** Example
** myIndex([1,2,3,4,5], 5) => 4
** myIndex(["a", "b", "c"], "a") => 0
** myIndex(["a", "b", "c"], "d") => -1
*/

function myIndex(array, ele){
  // your code here...
}

/******************************************************************************
** Write a function #magicCipher(sentence, cipher) that takes in an string(sentence)
** and an object(cipher). Return a string where every character is replaced with its
** cooresponding value in the cipher. If the character doesn't exist in the
** cipher, use the character.
** Example
** magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
** magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
** magicCipher("twmce" , { m : "n", t : "d", a : "w"}) => "dance"
*/

function magicCipher(sentence, cipher){
  // your code here...
}

/******************************************************************************
** Write a function `minMaxDifference(array)` that return the difference between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers.
** Example
** minMaxDifference([1,2,3,4,5]) => 4
** minMaxDifference([4,2,5,1,-5]) => 10
*/
function minMaxDifference(array){
  // your code here...
}

/******************************************************************************
** Write a function that #dynamicFizzBuzz(max, num1, num2) that returns an array
** of numbers up to the max. Each number should be either divisible by num1 or num2,
** BUT NOT BOTH.
** Example
** dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
** dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18, 20]
*/
function dynamicFizzBuzz(max, num1, num2){
  // your code here...
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  divisibleByFivePairSum : divisibleByFivePairSum,
  myIndex : myIndex,
  magicCipher : magicCipher,
  minMaxDifference : minMaxDifference,
  dynamicFizzBuzz : dynamicFizzBuzz
};
