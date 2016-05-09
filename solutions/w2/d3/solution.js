function containsPunctuation(word) {
  var punctuation = [";", "!", ".", "?", ",", "-"];


  for (var i = 0; i < punctuation.length; i += 1) {
    if (word.indexOf(punctuation[i]) !== -1) {
      return true;
    }
  }

  return false;
}

function isStopWord(word, stopWords) {
  for (var i = 0; i < stopWords.length; i += 1) {
    var stopWord = stopWords[i];

    if ((containsPunctuation(word)) && (word.indexOf(stopWord) === 0) && (word.length === stopWord.length + 1)) {
      return true;
    } else if (word === stopWord) {
      return true;
    }
  }

  return false;
}

function titleize(title, stopWords) {
  var words = title.split(" ");
  var goodTitle = [];

  for(var i = 0; i < words.length; i += 1) {
    var word = words[i].toLowerCase();

    if (isStopWord(word, stopWords)) {
      goodTitle.push(word);
    } else {
      word = word[0].toUpperCase() + word.slice(1);
      goodTitle.push(word);
    }
  }

  return goodTitle.join(" ");
}

/**************************Debug These Programs********************************/
/******************************************************************************/

function unique(array) {
  var uniqueArray = [];

  for (var i = 0; i < array.length; i += 1) {
    var ele = array[i];

    if (uniqueArray.indexOf(ele) === -1) {
      uniqueArray.push(ele);
    }
  }

  return uniqueArray;
}

unique([1,23,2,4,5,1,23]) //==> [1, 23, 2, 4, 5];

/******************************************************************************/

function isHappy(person) {
  if(person.happiness > 5) {
    return true;
  }
  return false;
}

function isHappyGroup(group) {
  var amount = 0;

  for (var i = 0; i < group.length; i += 1) {
    var person = group[i];

    if (isHappy(person)) {
      amount += 1;
    }
  }

  if (amount > 5) {
    return true;
  }

  return false;
}

var people = [
  { happiness : 15},
  { happiness : 13},
  { happiness : 3},
  { happiness : 20},
  { happiness : 9},
  { happiness : 7},
  { happiness : 17},
  { happiness : 1}
];

isHappyGroup(people); //==> true

/******************************************************************************/

var magicify = function(number) {
  return number - 34;
}

var isMagicNumer = function(number) {
  var magicNumb = magicify(number);

  if(magicNumb % 13 === 0 || magicNumb < 0) {
    return true;
  }

  return false;
}

isMagicNumer(26); //==> true
isMagicNumer(50); //==> false

/******************************************************************************/

function howHigh(height) {
  return (height + " feet high!");
}

function jump(height) {
  return "I'm jumping " + howHigh(height);
}

jump(5) === "I'm jumping 5 feet high!";
jump(12) === "I'm jumping 12 feet high!";

/******************************************************************************/

function fizzBuzz(max) {
  var i = 1;
  var array = [];

  while (i < max) {
    if ((i % 5 === 0 || i % 3 === 0) && (i % 15 !== 0)) {
      array.push(i);
    }
    i += 1;
  }

  return array;
}

/******************************************************************************/
