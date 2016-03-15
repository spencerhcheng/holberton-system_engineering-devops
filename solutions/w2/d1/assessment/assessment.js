/******************************************************************************
** Write a function #royalWe(sentence) that returns an string where every 'I'
** is replaced with 'we', every 'mine' is replaced with 'ours', every 'my' is replaced with 'our',
** and every 'me' is replaced with "us".

** Examples:
** royalWe("I want to go to the store.") //=> "we want to go to the store."
** royalWe("This is my house and you will respect me!") //=> "This is our house and you will respect us!"
** royalWe("This is mine...") //=> "This is ours..."
** royalWe("Jump for my love") //=> "Jump for our love"
** royalWe("Igloo") //=> "Igloo"
** royalWe("come here") //=> "come here");
*/

function royalWe(sentence){
  var split = sentence.split(" ");
  var punctuations = [".", ",", "?", "!", ";", undefined];

  for (var i = 0; i < split.length; i++) {
    var word = split[i];

    if(word.indexOf("I") === 0 && punctuations.indexOf(word[1]) !== -1) {
      split[i] = ("we" + word.slice(1));
    } else if(word.indexOf("mine") === 0 && punctuations.indexOf(word[4]) !== -1 ) {
      split[i] = ("ours" + word.slice(4));
    } else if(word.indexOf("my") === 0 && punctuations.indexOf(word[2]) !== -1 ) {
      split[i] = ("our" + word.slice(2));
    } else if(word.indexOf("me") === 0 && punctuations.indexOf(word[2]) !== -1 ) {
      split[i] = ("us" + word.slice(2));
    }
  }

  return split.join(" ");
  }

/******************************************************************************
** Write a function #elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array.

** Examples:
** elementCount(["a", "a", "a", "b"]) //=> { a: 3, b: 1 }
*/

function elementCount(array){
  var count = {};

  for(var i = 0; i < array.length; i++) {
    var ele = array[i];

    if(count[ele] === undefined) {
      count[ele] = 1;
    } else {
      count[ele] += 1;
    }
  }

  return count;
}

/******************************************************************************
** Write a function #reverseRange(start, end) that returns an array that contains all
** numbers between 'start' and 'end' (exclusive) in reverse-sequential order.

** Examples:
** reverseRange(2, 7) //=> [ 6, 5, 4, 3 ]
** reverseRange(4, 2) //=> []
*/
function reverseRange(start, end) {
  var rangeArray = [];

  for(var i = start + 1; i < end; i++) {
    rangeArray.unshift(i);
  }

  return rangeArray;
}

/******************************************************************************
** Write a function #reverseSentence(sentence) that returns a string where all the
** words in the input sentence are reversed.

** Examples:
** reverseSentence("Go to the store") \\=> "store the to Go"
** reverseSentence("Jump, jump for joy") \\=> "joy for jump Jump,"
*/

function reverseSentence(sentence){
  var reversed = [];
  var words = sentence.split(" ");

  for(var i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }

  return reversed.join(" ");
}

/******************************************************************************
** Write a function that #magicNumbers(max) that returns an array of numbers up to
** the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

** Example:
** magicNumbers(20) \\=> [ 4, 6, 8, 16, 18, 20 ]
*/

function magicNumbers(max){
  var magicArray = [];

  for(var i = 1; i <= max; i++) {
    if(i % 4 === 0 && i % 6 !== 0) {
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
