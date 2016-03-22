# Lecture Notes 13

## Callbacks

A _callback_ is a function that is passed as an argument to another function. The
callback is called inside of the function to which it is passed. We have already utilized callbacks when we were working with `setTimeout` and `setInterval`.
Let's look at another example:

```javascript
var foo = function(){
  console.log("the callback function");
}

var bar = function(cb){
  console.log("before the callback");
  cb();
  console.log("after the callback");
}

bar(foo); // In what order will things be logged?
```

We can also pass *anonymous functions* as callbacks:

```javascript
var bar = function(cb){
  console.log("before the callback");
  cb();
  console.log("after the callback");
}

bar(function(){
  console.log("the callback function");
}); // In what order will things be logged?
```

Callbacks are just regular functions, and like any other function they can accept
arguments.

```javascript
var logTheAnswer = function(answer){
  return ("The answer is" + answer + ".");
}

var add5ToAnswer = function(answer){
  return answer + 5;
}

var add = function(num1, num2, cb){
  var sum = num1 + num2;
  return cb(sum);
}

var concatenate = function(str1, str2, cb){
  var str = str1 + str2;
  return cb(str);
}

add(1,2,logTheAnswer); // What will this return?
add(1,2,add5ToAnswer); // What will this return?

concatenate("1","2",logTheAnswer); // What will this return?
concatenate("1","2",add5ToAnswer); // What will this return?
```

## Array.prototype.forEach

So far, in order to iterate through an array, we've used the for-loop. Now that
we know about callbacks, it's time to introduce another method that allows us
to iterate through arrays: `Array.prototype.forEach`. This method accepts a callback and an optional 'thisArg'.

The callback will be passed three arguments:

* The current element
* The index of that element
* The array itself that we are iterating over

Let's look at an example:

```javascript
var array = ["a", "b", "c", "d", "e"];

array.forEach(function(ele, idx, arr){
  console.log("Current ele is: " + ele);
  console.log("Current idx is: " + idx);
  console.log("Current array is: " + arr);
  console.log("------------------------");
});
```

If the callback function utilizes the `this` keyword, we'll need to bind it
to the appropriate object. To do this, we can use `Function.prototype.bind` or simply
pass in the `thisArg`. Below, I've created four different ways of accomplishing the correct binding (and an example of the incorrect way):

```javascript
var cookieMonster = {
  name : "Cooskie",

  favoriteFoods : ["apple", "cookie", "orange"],

  badLogFavFoods: function(){
    this.favoriteFoods.forEach(function(food){
      console.log(this.name + " loves " + food + "!");
    });
  },

  logFavFoods1: function(){
    this.favoriteFoods.forEach(function(food){
      console.log(this.name + " loves " + food + "!");
    }.bind(cookieMonster));
  },

  logFavFoods2 : function(){
    this.favoriteFoods.forEach(function(food){
      console.log(this.name + " loves " + food + "!");
    },cookieMonster);
  },

  logFavFoods3 : function(){
    this.favoriteFoods.forEach(function(food){
      console.log(this.name + " loves " + food + "!");
    }.bind(this));
  },

  logFavFoods4 : function(){
    this.favoriteFoods.forEach(function(food){
      console.log(this.name + " loves " + food + "!");
    }, this);
  }
}
```

The key thing to realize is that **every time we enter into a new function, the value of `this` changes**. Since callbacks are functions, if the callback is using `this`, we  always need to make sure it is bound to the proper object.

## Higher-Order Functions

A higher-order function is one that either (1) accepts a function as an argument
or (2) return a function as the return value. **Every function that takes a callback
is a higher-order function**. We've seen several higher-order functions that accept
callbacks:

  * Array.prototype.forEach
  * setTimeout
  * setInterval

We have not yet seen any higher-order functions that fall into the 2nd category,
that is, one that return a function as an argument. Let's write one!

We will write a function `createAdder(num)`, which will accept a number as an
argument. It will return a **function** (we'll call it `f`). `f` will accept a
number as an argument and return the sum of that number and the `num` that was
passed to `createAdder`. Le's see an example:

```javascript
var addTwo = createAdder(2);
addTwo(2); //=> evaluates to 4
addTwo(40); //=> evaluates to 42

var addTen = createAdder(10);
addTen(2); //=> evaluates to 12
addTen(40); //=> evaluates to 50
```

Now that we know what we re trying to do, let's write it:

```javascript
function createAdder(num) {
  return function(otherNum) {
    return (num + otherNum);
  }
}
```

Notice that I am returning an anonymous function. It has access to the `num` that
belonged to the scope of the outer function. Higher-order functions allow you to
dynamically create functions that behave differently based on some input.


## Synchronous vs Asynchronous

Javascript, and many other languages, evaluate code in a single thread. Single-threaded programming languages can only evaluate one thing at a time. _Synchronous_ code is run in the order it is written (although to evaluate functions the program it may jump all over the space of the program) and **blocks the thread** from running anything else. Let's see an example of this:

```javascript
function foo(){
  console.log("start");

  for(var i = 0; i < 99999999; i+=1){
  }

  console.log("done");
}

foo();
```

There is a noticeable delay between `start` being logged and `done` being logged. This is because the nearly 100 billion iterations must be completed before moving on to the next subsequent line in the code. This is a prime example of synchronous code.

_Asynchronous_ code, on the other hand, is code that will start or setup some process that usually takes some time to complete (e.g. asking a user for input, waiting for a keypress, waiting for a milli-second count, etc), but it will not block the thread while it waits. Asynchronous code will usually run some function in response to the completion of the process it was waiting for - let me give you a few examples in words:

* If you were programming a Javascript video game, you'd want to tell the program to do something when the player presses a button. You wouldn't want this to be synchronous because if it was, the execution of the rest of the code would be paused until the player pressed a button. Instead, we'd prefer to let the game loop keep running, and whenever the player pressed a button our program would run the functionality we assigned to the key press.

* `setTimeout` and `setInterval` are asynchronous functions. While they wait for the milli-second countdown to reach 0, the JS interpreter keeps reading the rest of the code.

So the question now becomes: How do I tell JavaScript to run some functionality when the asynchronous function is finished? Putting the code after the asynchronous function won't work because asynchronous code isn't thread-blocking:

```javascript
function foo(){
  console.log("hey!");
}

function badAsync(){
  setTimeout(foo, 1000);
  console.log("don't log me until timeout is finished!");
}

badAsync();
```

Instead, we must rely on callbacks. The reason why callbacks are so vital in Javascript is because JavaScript makes use of asynchronous code quite frequently. The fix to the above problem is below:

```javascript
function foo(){
  console.log("hey!");
  console.log("don't log me until timeout is finished!");
}

function goodAsync(){
  setTimeout(foo, 1000);
}

goodAsync();
```
