/******************************************************************************
Write a function divisibleBy7Sort(array) that takes in an array of numbers. It
should return an array where all the number that are divisible by 7 are at the
end and all of the other numbers are in the front (in their original order).

Example
divisibleBy7Sort([1, 4, 7, 43, 32, 14, 12]) => [1, 4, 43, 32, 12, 7, 14]
divisibleBy7Sort([49, 40, 42, 51, 20, -7]) => [40, 51, 20, 49, 42, -7]
******************************************************************************/
function divisibleBy7Sort(array){
  //your code here...
}

/******************************************************************************
Write a function longestLetterStreak(str, searchLetters) that takes in 2 arguments:
 - str: a string of uppercase characters.
 - searchLetters: An array of single-character strings (i.e ["A", "F", "K"])

The function should return a the longest streak of letters in the `str` that are
in the `searchLetters`.

Example
longestLetterStreak("ACCA", ["C"]) => 2
longestLetterStreak("YACCADCA", ["C", "A"]) => 4
longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]) => 3
******************************************************************************/
function longestLetterStreak(str, searchLetters){
  //your code here...
}

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
function inPigLatin(sentence){
  //your code here...
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  inPigLatin : inPigLatin,
  divisibleBy7Sort : divisibleBy7Sort,
  longestLetterStreak : longestLetterStreak
};
