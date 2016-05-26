/******************************************************************************
Write a function censor(sentence, curseWords) that censors the given sentence by
replacing the vowels in curse words with "*". Assume no punctuation.

Use Array.prototype.forEach.

Examples:
censor("Darn you Harold you son of a gun", ["darn", "gun"]); //=> "D*rn you Harold you son of a g*n"
censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]) //=> "Schn*k*ys I dont give a d*ddly sq**t"
******************************************************************************/

// your code here...

/******************************************************************************
Write a function greatestMapCreator(ary, cb1, cb2) which takes as an
argument an array of numbers and two callbacks. It creates a new array
with each element from ary "mapped" to a new element using whichever
callback that returns a larger mapped value. Both callbacks take as
arguments the element, index and array.

Use Array.prototype.forEach.

Example 1:
var ary1 = [1, 5, 10];
var squareRootRounder = function(num) {
  return Math.round(Math.sqrt(num));
};
var half = function(num) {
  return num / 2;
};
greatestMapCreator(ary1, squareRootRounder, half); //=> [ 1, 2.5, 5 ]

Hint 1:
squareRootRounder(1); //=> 1
squareRootRounder(5); //=> 2
squareRootRounder(10); //=> 3

half(1); //=> 0.5
half(5); //=> 2.5
half(10); //=> 5

Example 2:
var ary2 = [10, 20, -100];
var absoluteValue = function(num) {
  return Math.abs(num);
};
var power = function(a, b) {
  return Math.pow(a, b);
}
greatestMapCreator(ary2, absoluteValue, power); //=> [ 10, 20, 10000 ]

Hint 2:
absoluteValue(10); //=> 10
absoluteValue(20); //=> 20
absoluteValue(-100); //=> 100

power(10, 0); //=> 1
power(20, 1); //=> 20
power(-100, 2); //=> 10000
******************************************************************************/

// your code here...

/******************************************************************************
Isogram Matcher

An isogram is a word with only unique, non-repeating letters.
Given two isograms of the same length, return an array with two numbers
indicating matches: the first number is the number of letters matched in both
words at the same position, and the second is the number of letters matched in
both words but not in the same position.

Examples:
isogramMatcher("an", "at"); //=> [1, 0]
isogramMatcher("or", "go"); //=> [0, 1]
isogramMatcher("cat", "tap"); //=> [1, 1]
isogramMatcher("home", "dome"); //=> [3, 0]
isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]
******************************************************************************/

// your code here...
