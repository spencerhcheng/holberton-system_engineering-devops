/******************************************************************************
Write a function concatSandwich(word) which takes a string `word` and returns a
function that takes three string arguments and returns `word` concatenated between
the three arguments with spaces separating them.

Example:
> var tofuSandwich = concatSandwich("Tofu");

> tofuSandwich;
[Function]

> tofuSandwich("Hello", "Hey", "Bye");
"Hello Tofu Hey Tofu Bye"
******************************************************************************/

// Answer 1
function concatSandwich(word) {
  var sandwich = function(word2, word3, word4) {
    return [word2, word, word3, word, word4].join(" ");
  };

  return sandwich;
}

// Sample Explanation:
/* "I declared a function `concatSandiwch` which takes an argument `word`.
I defined a function `sandwich` which takes three string arguments and returns
a string with `word` concatenated between the three arguments. I created the string
with spaces separating all arguments but putting them in order to an array and
joining them with a space. Calling `join` on an array creates a string with all
the elements in the array concatenated by whatever argument we pass to join."

(So something along these lines when explaining your solution would really
demonstrate your proficiency with JavaScript. Obviously it's scripted so
don't worry about sounding exactly like this just note the terminology used and
depth of the explanation!)

// Answer 2
function concatSandwich(word) {
  return function(word2, word3, word4) {
    var str = word2 + " " + word + " " + word3 + " " + word + word4;
    return str;
  };
}

/******************************************************************************
Write the function countAdjacentSums(arr, n) which takes an array and number.
It should count the number of times that two adjacent numbers in an array add up
to n. Use Array#forEach.

Examples:
> countAdjacentSums([1, 5, 1], 6)
2

> countAdjacentSums([7, 2, 4, 6], 7)
0

> countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)
3
******************************************************************************/

// code goes here

/******************************************************************************
Isogram Matcher

An isogram is a word with only unique, non-repeating letters.

Given two isograms of the same length, return an array with two numbers
indicating matches: the first number is the number of letters matched in both
words at the same position, and the second is the number of letters matched in
both words but not in the same position.

Examples:
console.log(isogramMatcher("an", "at")) // [1, 0]
console.log(isogramMatcher("or", "go")) // [0, 1]
console.log(isogramMatcher("cat", "tap")) // [1, 1]
console.log(isogramMatcher("home", "dome")) // [3, 0]
console.log(isogramMatcher("ultrasonic", "ostracized")) // [3, 4]
console.log(isogramMatcher("unpredictably", "hydromagnetic")) // [1, 8]
******************************************************************************/

// code goes here
