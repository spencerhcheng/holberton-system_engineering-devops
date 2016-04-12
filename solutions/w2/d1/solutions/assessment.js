/******************************************************************************
** Write a function royalWe(sentence) that returns an string where every word
**'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
** word 'my' is replaced with 'our', and every word 'me' is replaced with "us"
** Examples:
** royalWe("I want to go to the store") => "we want to go to the store"
** royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
** royalWe("This is mine") => "This is ours"
** royalWe("Jump for my love") => "Jump for our love"
*/

// Solution 1
function royalWe(sentence){
  var words = sentence.split(" ");
  var royalSentence = [];

  for(var i = 0; i < words.length; i++) {
    var currentWord = words[i];

    if (currentWord === "I") {
      royalSentence.push("we");
    } else if (currentWord === "mine") {
      royalSentence.push("ours");
    } else if (currentWord === "my") {
      royalSentence.push("our");
    } else if (currentWord === "me") {
      royalSentence.push("us");
    } else {
      royalSentence.push(currentWord);
    }
  }

  return royalSentence.join(" ");
}

// Solution 2
function royalWe(sentence) {
  var replaceI = sentence.split("I").join("we");
  var replaceMine = replaceI.split("mine").join("ours");
  var replaceMy = replaceMine.split("my").join("our");
  var replaceMe = replaceMy.split("me").join("us");

  return replaceMe;
}

/******************************************************************************
** Write a function elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array
** Example:
** elementCount(["a", "a", "b", "b"]) => { "a" : 2, "b" : 2 }
*/

function elementCount(array){
  var countObj = {};

  for(var i = 0; i < array.length; i++) {
    var currentElement = array[i];

    if (countObj[currentElement] === undefined) {
      countObj[currentElement] = 1;
    } else {
      countObj[currentElement] += 1;
    }
  }

  return countObj;
}

/******************************************************************************
** Write a function reverseRange(start, end) that returns an array that contains all
** numbers between 'start' and 'end' (exclusive) in reverse-sequential order
** Examples:
** range(2,7) => [6, 5, 4, 3]
** range(4,2) => []
*/

function reverseRange(start, end){
  var range = [];

  for(var i = end - 1; i > start; i--) {
    range.push(i);
  }

  return range;
}

/******************************************************************************
** Write a function reverseSentence(sentence) that return a string where all the
** words in the input sentence are reversed
** Examples:
** reverseSentence("Go to the store") => "store the to Go"
** reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*/
function reverseSentence(sentence){
  var words = sentence.split(" ");
  var reverseWords = [];

  for(var i = words.length - 1; i >= 0; i--) {
    var currentWord = words[i];
    reverseWords.push(currentWord);
  }

  var reverseSentence = reverseWords.join(" ");
  return reverseSentence;
}

/******************************************************************************
** Write a function magicNumbers(max) that returns an array of numbers up to
** the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.
** Example:
** magicNumbers(20) => [4, 6, 8, 16, 18]
*/
function magicNumbers(max){
  var results = [];

  var i = 0;
  while (i < max) {
    if ((i % 4 === 0 || i % 6 === 0 ) && (i % 12 !== 0)) {
      results.push(i);
    }

    i++;
  }

  return results;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  reverseRange : reverseRange,
  royalWe : royalWe,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  magicNumbers : magicNumbers
};
