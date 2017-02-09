///////////////////////////////////
// solution
var a = ["Anthony", "John", "Carson"]);

function logEach(array) { // "declaring" the logEach function
  for (var i = 0; i < array.length; i++) {
    var str = i + ": " + array[i];
    console.log(str);
  }
}

logEach(a); // "calling" the logEach function

///////////////////////////////////
// example of when a while loop is needed, not a for loop
var gameWon = false;

while (!gameWon) { // key here is that you don't know how many iteratations this will take
  // run some game logic
  if (/* winning move */) {
    gameWon = true;
  }
}

///////////////////////////////////
// solution
function maxValue(array) {
  if (array.length === 0) { // deals with an empty array
    return null;
  }

  var max = array[0];
  // can't set this to an arbitrary value like 0
  //because what if array only contains negative numbers

  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

///////////////////////////////////
/* OBJECT */

// declaring dog object OPTION 1
var dog = { name: "Tofu",
            treats: ["cookie", "bone"],
            age: 2};
// key-value pairs are separated by commas
// don't forget the commas!


// declaring dog object OPTION 2 - DOT NOTATION
var dog = {} // empty object
dog.name = "Tofu";
dog.treats = ["cookie", "bone"];
dog.age = 2;

// declaring dog object OPTION 3 - BRACKET NOTATION
var dog = {} // empty object
dog["name"] = "Tofu"; // (don't forget the quotes!)
dog["treats"] = ["cookie", "bone"];
dog["age"] = 2;

// declaring dog object OPTION 4
var dog = {name: "Tofu"}
dog["treats"] = ["cookie", "bone"];
dog.age = 2;

// take-away: really any combination will work!
// keys must be strings!

///////////////////////////////////
// iterating over keys in an object
for (var key in dog) {
  console.log(key + ": " + dog[key]);
}

///////////////////////////////////
// deleting a key in an object
dog.dead = true;
delete dog(dead);

///////////////////////////////////
// creating a method!
dog.printHello = function () { // dog#printHello function
  console.log("hello");
    console.log(this.name);
}

dog.getOlder = function () { // dog#getOlder function
  this.age++;
  console.log("HAPPY " + this.age + " BIRTHDAY!");
}
