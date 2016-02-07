function range(start, end){
  // your code here...
  var array = [];
  for(var i = start; i <= end; i += 1){
    array.push(i);
  }
  return array;
}

function unique(array){
  // your code here...
  var uniqueA = [];

  for(var i = 0; i < array.length; i += 1){
    var ele = array[i];

    if(uniqueA.indexOf(ele) === -1){
      uniqueA.push(ele);
    }
  }

  return uniqueA;
}

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

function reverseSentence(sentence){
  // your code here...
  var sentenceArray = sentence.split(" ");
  var reversed = [];

  while(sentenceArray.length > 0){
    reversed.push(sentenceArray.pop());
  }

  return reversed.join(" ");
}

function fizzBuzz(max){
  // your code here...
  var result = [];

  for(var i = 1; i <= max; i += 1){
    if((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0)){
      result.push(i);
    }
  }

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  range : range,
  unique : unique,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  fizzBuzz : fizzBuzz
};
