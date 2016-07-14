## What Would JavaScript Do?
Write out all the steps that the interpreter would take to evaluate the specified line.
#### 1.
```js
var str = "happy";
str.split("").slice(0 + 1, 2 + 3); // WWJD?
```
#### 2. 
```js
var str = "abcdef";
var letter = "e";
str.split("").indexOf(letter) === -1; // WWJD?
```
#### 3.
```js
var ary = ["cat", "in", "the", "hat"];
ary.join(" ").toUpperCase().toLowerCase(); // WWJD?
```

## Debug These Programs
-----------------------------------------------------
```javascript
function unique(array) {
  var uniqueArray = [];

  for (var i = 0, i <= array.length, i += 1) {
    var ele = array[i];

    if (uniqueArray.indexOf(ele) === -1) {
      uniqueArray.push(ele);
    }
  }
}

unique([1,23,2,4,5,1,23]) //==> [1, 23, 2, 4, 5];
```
-----------------------------------------------------

```javascript
function isHappy(person) {
  if (person.happiness > 5) {
    return true;
  }
  return false;
}

function isHappyGroup(group) {
  var amount = 0;

  for (var i = 0; i < group.length; i += 1) {
    var person = group[i];

    if (idHappy[person]) {
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

isHappyGroup(people) //==> true;
```

-----------------------------------------------------

```javascript
var magicify = function(number) {
  console.log(number - 34);
}

var isMagicNumer = function(number) {
  var magicNumb = magicify(number);

  if (magicNumb % 13 === 0 || magicNumb < 0) {
    return true;
  }

  return false;
}

isMagicNumer(26) === true;
isMagicNumer(50) === false;
```

-----------------------------------------------------

```javascript
function howHigh(height) {
  return (height + " feet high!");
}

function jump(height) {
  return "I'm jumping " + howhigh(height);
}

jump(5) === "I'm jumping 5 feet high!";
jump(12) === "I'm jumping 12 feet high!";
```

-----------------------------------------------------

```javascript
function fizzBuzz(max) {
  var i = 1;
  var array = [];

  while(i < max) {
    if (i % 5 || 3 === 0 && i !== 15) {
      array.push(array[i]);
    }
    i += 1;
  }

  return array;
}
```

## titleize

Write a function `titleize(title, stopWords)` that takes in a string `title`
and and array of strings `stopWords`. Return the `title` where every word that
does not exist in the `stopWords` array is capitalized; all others lowercase.

**Hints**
* Test after you write every function!

* First write a function `removePunctuation(word)` that takes in a single word
and returns that same word without any punctuation. Feel free to use the
`punctuation` array we've given you below.
  - Remember `Array.prototype.slice`? If not, look at the documentation and play
  in the console.

* Second, write a function `isStopWord(word, stopWords)` that takes in a single
word and returns `true` if it is a stop word. The check will vary depending on
if the `word` contains punctuation or not, so use your `removePunctuation` function before checking.

-----------------------------------------------------
```javascript
var punctuation = [";", "!", ".", "?", ",", "-"];
```

```javascript
>titleize("forest gump, the runner", ["the"])
"Forest Gump, the Runner"

>titleize("MASTER AND COMMANDER", ["and"])
"Master and Commander"

>titleize("i LOVE; lover of mine", ["love", "of"])
"I love; Lover of Mine"

>titleize("shall we dance?", ["dance"])
"Shall We dance?"
```
