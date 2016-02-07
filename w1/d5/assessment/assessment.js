/******************************************************************************
** Write a function #range(start, end) that returns an array that contains all
** numbers between 'start' and 'end' in sequential order
** Example
** range(1,4) => [1,2,3,4]
** range(4,2) => []
*/

function range(start, end){
  // your code here...
  var rangeArray = [];

  for(var i = start; i <= end; i += 1){
    rangeArray.push(i)
  }

  return rangeArray;
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
  var uniqueArray = [];

  for(var i = 0; i < array.length; i += 1){
    var ele = array[i];

    if(uniqueArray.indexOf(ele) === -1){
      uniqueArray.push(ele);
    }
  }

  return uniqueArray;
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
** Write a function that #fizzBuzz(max) that returns an array of numbers under
** the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.
** Example
** fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18, 20]
*/
function fizzBuzz(max){
  // your code here...
  var fbArray = [];

  for(var i = 1; i <= max; i += 1){
    if((i % 3 === 0 || i % 5 === 0) && (i % 15 !== 0)){
      fbArray.push(i);
    }
  }

  return fbArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  range : range,
  unique : unique,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  fizzBuzz : fizzBuzz
};
