/******************************************************************************
** Write a function #royalWe(sentence) that returns an string where every 'I'
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
  var weSentence = sentence.split("I").join("we");
  var oursSentence = weSentence.split("mine").join("ours");
  var ourSentence = oursSentence.split("my").join("our");
  return ourSentence.split("me").join("us");
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
  var count = {};

  for(var i = 0; i < array.length; i += 1){
    var ele = array[i];

    if(count[ele] === undefined){
      count[ele] = 1;
    } else {
      count[ele] += 1;
    }
  }

  return count;
}

/******************************************************************************
** Write a function #reverseRange(start, end) that returns an array that contains all
** numbers between 'start' and 'end' (exclusive) in reverse-sequential order
** Example
** range(2,7) => [6, 5, 4, 3]
** range(4,2) => []
*/

function reverseRange(start, end){
  // your code here...
  var rangeArray = [];

  for(var i = start + 1; i < end; i += 1){
    rangeArray.unshift(i);
  }

  return rangeArray;
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
  var reversed = [];
  var split = sentence.split(" ");

  for(var i = 0; i < split.length; i+= 1){
    var word = split[i];

    reversed.unshift(word);
  }

  return reversed.join(" ");
}

/******************************************************************************
** Write a function that #magicNumbers(max) that returns an array of numbers up to
** the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.
** Example
** magicNumbers(20) => [4, 6, 8, 16, 18, 20]
*/
function magicNumbers(max){
  // your code here...
  var magicArray = [];

  for(var i = 1; i <= max; i += 1){
    if(i % 4 === 0 && i % 6 !== 0){
      magicArray.push(i);
    } else if (i % 6 === 0 && i % 4 !== 0) {
      magicArray.push(i);
    }
  }

  return magicArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  reverseRange : reverseRange,
  royalWe : royalWe,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  magicNumbers : magicNumbers
};
