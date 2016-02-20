/******************************************************************************
Write a function inPigLatin(sentence) that translates a sentence into its pig
latin equivalent. The rules for the translation are as follows:

1) For words that begin with consonant sounds, all letters before the initial
vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
  Examples
  "pig" → "igpay"
  "banana" → "ananabay"
  "trash" → "ashtray

2) For words that begin with vowel sounds, just adds "yay" to the end
  Examples
  "eat" → "eatyay"
  "omelet" → "omeletyay"
  "are" → "areyay"

!!! Words that were originally caplitailzed must remained caplitailzed
!!! Assume no punctuation
!!! 'y' is not a vowel

Examples:
> inPigLatin("Shmanthony is the best teacher")
Anthonyshmay isyay ethay estbay eachertay

> inPigLatin("let us Dance")
etlay usyay Anceday

> inPigLatin("this is the time of my life")
isthay isyay ethay imetay ofyay myay ifelay
*******************************************************************************/

function pigLatinfy(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.indexOf(word[0]) !== -1) { // starts with vowel
    return word.slice() + "yay";
  }
  else { // starts with consonant
    for (var i = 1; i < word.length; i++) {
      if (vowels.indexOf(word[i]) !== -1) { // finds first vowel
        return word.slice(i) + word.slice(0, i) + "ay"
      } else if (i === word.length - 1) { // no vowels
        return word.slice() + "ay";
      }
    }
  }
}

function capitalize(originalWord, pigLatinWord) {
  if (originalWord[0] === originalWord[0].toUpperCase()) {
    return pigLatinWord.slice(0, 1).toUpperCase() + pigLatinWord.slice(1).toLowerCase();
  }

  return pigLatinWord;
}

function inPigLatin(sentence){
  // your code here...
  var words = sentence.split(" ");
  var plWords = [];

  words.forEach(function(word) {
    var pgWord = pigLatinfy(word);
    pgWord = capitalize(word, pgWord);

    plWords.push(pgWord);
  })

  return plWords.join(" ");
}

/******************************************************************************
Write a function laligatSequence(base, n)

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

We can use the laligat sum to define a special sequence, called the laligat
sequence. The laligat sequence of a number begins with the number itself. The
second number in the sequence is the first number's laligat sum, the third
number is the second number's laligat sum, and so on.

For example, the first 4 numbers in the laligat sequence of 10 are: 10, 17, 58, 381.

The first argument is laligatSequence is the number that starts the sequence.
The second argument is the length of the sequence

Examples:
> laligatSequence(10, 4)
[ 10, 17, 58, 381 ]

> laligatSequence(5, 2)
[ 5, 10 ]
*******************************************************************************/

function isPrime(num) {
  for (var i = 2; i  < num; i++) {
    if (num % i === 0){
      return false
    }
  }
  return true;
}

function sumPrimesLessThanN(n) {
  sum = 0;

  for (var i = 2; i <= n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

function laligatSequence(base, n){
  // your code here...
  var laligatSeq = [];

  while (laligatSeq.length < n) {
    laligatSeq.push(base);
    base = sumPrimesLessThanN(base);
  }

  return laligatSeq;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  inPigLatin : inPigLatin,
  laligatSequence : laligatSequence
};
