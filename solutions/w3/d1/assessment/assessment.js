/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects).

** DO NOT USE Array.prototype.indexOf
** Example
** myIndexOf([1,2,3,4,5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/

function myIndexOf(array, ele){
  for (var i = 0; i < array.length; i++) {
    if(array[i] === ele){
      return i;
    }
  }

  return -1;
}

/******************************************************************************
** Write a function `minMaxProduct(array)` that returns the difference between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.

** Example
** minMaxProduct([1,2,3,4,5]) => 5
** minMaxProduct([5,4,3,2,1]) => 5
** minMaxProduct([4,2,5,1,-5]) => -25
*/
function minMaxProduct(array){
  var min = array[0];
  var max = array[0];

  for (var i = 0; i < array.length; i++) {
    var num = array[i];

    if(min > num){
      min = num;
    } else if(max < num){
      max = num;
    }
  }

  return max * min;
}

/******************************************************************************
** Write a function `leastCommonMultiple(num1, num2)` that returns the
** lowest number which is a multiple of both inputs.

** Example
** lcm(2, 3) => 6
** lcm(6, 10) => 30
** lcm(24, 26) => 312
*/

function leastCommonMultiple(num1, num2){
  var i = num1;

  while(true){
    if(i % num2 === 0){
      return i;
    }
    i += num1;
  }
}

/******************************************************************************
** Write a function `hipsterfy(sentence)` that takes takes a string containing
** several words as input. Remove the last vowel from each word. 'y' is not a vowel.
** Example
** hipsterfy("proper") => "propr"
** hipsterfy("proper tonic panther") => "propr tonc panthr"
** hipsterfy("towel flicker banana") => "towl flickr banan"
** hipsterfy("runner anaconda") => "runnr anacond"
** hipsterfy("turtle cheeseburger fries") => "turtl cheeseburgr fris"
*/

// Method 1: using a helper function
function hipsterfy(sentence){
  var hipsterified = [];
  var splitSentence = sentence.split(" ");

  for (var i = 0; i < splitSentence.length; i += 1) {
    var word = splitSentence[i];
    hipsterified.push(hipsterfyWord(word));
  }

  return hipsterified.join(" ");
}

function hipsterfyWord(word){
  var vowels = ["a","e","i","o","u"];

  for(var i = word.length - 1; i >= 0; i -= 1){
    if(vowels.indexOf(word[i]) !== -1){
      var hipsterWord = word.slice(0, i) + word.slice(i + 1);
      return hipsterWord;
    }
  }

  return word;
}

// Method 2: no helper function
// function hipsterfy(sentence){
//   var vowels = ["a", "e", "i", "o", "u"];
//   var words = sentence.split(" ");
//   var hipsterfied = [];
//
//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//
//     for (var j = word.length - 1; j >= 0; j--) {
//       if (vowels.indexOf(word[j]) !== -1) {
//         var hipsterfiedWord = word.slice(0, j) + word.slice(j);
//         hipsterfied.push(hipsterfiedWord);
//         break;
//       }
//     }
//   }
//
//   return hipsterfied.join(" ");
// }
//


/******************************************************************************
** Write a function #magicCipher(sentence, cipher) that takes in an string(sentence)
** and an object(cipher). Return a string where every character is replaced with its
** cooresponding value in the cipher. If the character doesn't exist in the
** cipher, use the character.
** Example
** magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
** magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
** magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*/

function magicCipher(sentence, cipher){
  var decoded = "";

  for (var i = 0; i < sentence.length; i++) {
    var char = sentence[i];
    var decodedChar = cipher[char] || char;
    decoded += decodedChar;
  }

  return decoded;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  leastCommonMultiple : leastCommonMultiple,
  myIndexOf : myIndexOf,
  magicCipher : magicCipher,
  minMaxProduct : minMaxProduct,
  hipsterfy : hipsterfy
};
