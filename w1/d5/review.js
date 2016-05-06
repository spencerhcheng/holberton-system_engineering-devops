/*
Write a function `countScores(people)` that takes in a 2D array (people) as its
input. Each inner array as two elements: a name (string) and a score (number).
`countScores(people)` should return an object that has each name is mapped to their
total score.

Example 1
var ppl = [["Anthony", 10], ["Fred", 10], ["Anthony", -8], ["Winne", 12]];
var count = countScores(ppl);

count; //=> { "Anthony": 2, "Fred" : 10, "Winnie" : 12 }

Example 2
var peeps = [
  ["Anthony", 2],
  ["Winne", 2],
  ["Fred", 2],
  ["Winne", 2],
  ["Fred", 2],
  ["Anthony", 2],
  ["Winne", 2]
];
var count = countScores(peeps);

count; //=> { "Anthony": 4, "Fred" : 4, "Winnie" : 6 }

*/

function countScores (people) {
  //your code here
}



/*
Write a function wordYeller(sentence) that takes in a sentence string as input. It
should return the sentence where every word has an exclamation point behind it,
except words that already have punctuation. Punctuation marks are ". , ! ? ; :"

Example 1
var sent = "Stop it now! Please, wont you stop?";
wordYeller(sent) === "Stop! it! now! Please, wont! you! stop?";

Example 2
var words = "Go to the store and grab the following: milk, bread, run, and cake";
var yelledWords = wordYeller(words);

yelledWords === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!";
