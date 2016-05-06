function sayHelloFirstName(firstName) {
  var greeting = "Hello";

  var sayHelloFirstNameLastName = function (lastName) {
    return greeting + " " + firstName + " " + lastName;
  }

  return sayHelloFirstNameLastName;

}

var sayHelloAnthony = sayHelloFirstName("Anthony");
var sayHelloAnthonLadson = sayHelloAnthony("Ladson");
// console.log(sayHelloAnthonLadson);

// 1. Hello Anthony Ladson
// 2. undefined Anthony Ladson
// 3. undefined undefined Ladson

var argOne = 10;
function fooOne (argOne) {
  var one = 1;
  return argOne + one;
}
function fooTwo (argTwo) {
  return argOne + argTwo;
}

var resultsOne = fooOne(1);
// console.log(resultsOne);
var resultsTwo = fooTwo(2);
// console.log(resultsTwo);

var myVar = 10;
var yourVar = 100;
function fooThree () {
  console.log(myVar);
}

// fooThree();
myVar = 1000;

function fooFour () {
  console.log(myVar);
}

// fooFour();

function makeCounter() {
  var count = 0;

  function incrementCounter() {
    count++;
    console.log(count);
  }

  return incrementCounter;
}

var counter = makeCounter();
// console.log(counter);
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
