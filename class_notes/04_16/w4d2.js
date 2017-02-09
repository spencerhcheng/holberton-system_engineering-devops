/* dog objects
var dog1 = {
  name: "Tofu",
  age: 7,
  favoriteTreats: ["steak", "anything human food", "anything not dog food"],
  barks: function () {
    console.log(this.name + " barks");
    return this.name + " loves barking!";
  }
};

var dog2 = {
  name: "Sunny"
};

dog2.age = 3;
dog2["favoriteTreats"] = ["literally anything", "also poop"];

var dog3 = {
  name: "Trumann",
  age: 1,
  favoriteTreats: ["steak", "anything human food", "anything not dog food"]
};
*/

// var results = dog1.barks();
// console.log(results);
//
// console.log(dog1.barks());

/* callback vs higher order functions
var boo = 10;

var foo = function () { // callback function
  var boo = 100;
  console.log("does nothing");
  return boo;
}

foo(); // do not classify foo as a callback function

function bar (cb) { // higher-order function
  var two = cb(); // classifies bar as a high-order function
  console.log(boo);
  boo = 50;
  console.log("ok done doing nothing");
}

bar(foo); // classifies foo as a callback function
console.log(boo); // undefined, 10, 50
*/

// Dog class
function Dog (name, age, treats) { // Constructor
  this.name = name; // instance variables
  this.age = age;
  this.treat = treats;
  // this.whatsThis = function () { // methods should always be declared as ClassName.prototype.methodName
  //   return this;
  // }
  // this.barks = function () { // bad practice
  //   console.log(this.name + " barks");
  //   return this.name + " loves barking!";
  // }
}

console.log(Dog);
console.log(Dog.prototype);

Dog.prototype.barks = function () {
  console.log(this.name + " barks");
  return this.name + " loves barking!";
}

console.log(Dog.prototype);

var dog1 = new Dog("Tofu", 7, ["steak", "anything human food", "anything not dog food"]); // variable dog1 is an instance of the Dog class
var dog2 = new Dog("Sunny", 3, ["literally anything"]);
console.log(dog1);
console.log(dog1.barks());
console.log(dog1.name);
console.log(dog1.age);
console.log(dog1.whatsThis());
console.log(dog2);
console.log(dog2.barks());
console.log(dog2.name);
console.log(dog2.age);
console.log(dog2.whatsThis());

// optional Class parameters
function Dog (name, age, treats, alive) { // Constructor
  this.name = name; // instance variables
  this.age = age;
  this.treat = treats || ["kibble"];
  if (alive === undefined) {
    this.alive = true;
  } else {
    this.alive = false;
  }
}

Dog.prototype.barks = function () {
  console.log(this.name + " barks");
  return this.name + " loves barking!";
}

var dog1 = new Dog("Cat", 7, ["steak", "anything human food", "anything not dog food"], false); // variable dog1 is an instance of the Dog class
console.log(dog1);
console.log(dog1.alive);
var dog2 = new Dog("Hamster", 3);
console.log(dog2);
console.log(dog2.alive);


// monkey-patching
function foo (el) {
  console.log(el);
}

foo(10);

Array.prototype.myForEach = function(cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

[1,2,3].myForEach(function() {
  console.log(el);
  console.log(idx);
});

var arr2 = [1,2,3];
arr2.myForEach(function(el) {
  console.log(el);
});
