/***************************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.

Example 1
var ppl = [ {name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

var countPpl = countScores(ppl);
countPpl; //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2
var peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
countScores(peeps); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***************************************************************************/

function countScores(people) {
  var scoresObj = {};

  for (var i = 0; i < people.length; i++) {
    var personObj = people[i];
    var name = personObj.name;
    var score = personObj.score;

    if (scoresObj[name]) {
      scoresObj[name] += score;
    } else {
      scoresObj[name] = score;
    }
  }
  return scoresObj;
}

/***************************************************************************
Write a function wordYeller(sentence) that takes in a sentence string as
input. It should return the sentence where every word has an exclamation
point behind it, except words that already have punctuation. Punctuation
marks are ". , ! ? ; :"

Example 1
var sent = "Stop it now! Please, wont you stop?";
var yelledWords = wordYeller(sent);
yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true

Example 2
var words = "Go to the store and grab the following: milk, bread, run, and cake";
wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true
***************************************************************************/

function wordYeller(sentence) {
  var yelledWords = [];
  
  var words = sentence.split(" ");
  var punctuation = ". , ! ? ; :".split(" "); // array of punctuation

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var lastCharacter = word.slice(-1);

    if (punctuation.indexOf(lastCharacter) !== -1) { // word already has punctuation
      yelledWords.push(word);
    } else {
      yelledWords.push(word + "!");
    }
  }

  return yelledWords.join(" ");
}
