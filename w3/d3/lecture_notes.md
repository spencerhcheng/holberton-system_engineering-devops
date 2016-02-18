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

bar(foo); //In what order will things be logged?
```

We can also pass anonymous functions as callbacks:

```javascript
var bar = function(cb){
  console.log("before the callback");
  cb();
  console.log("after the callback");
}

bar(function(){
  console.log("the callback function");
}); //In what order will things be logged?
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

concatenate(1,2,logTheAnswer); // What will this return?
concatenate(1,2,add5ToAnswer); // What will this return?
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

## Synchronous vs Asynchronous

Javascript, and many other languages, evaluate code from in a single thread. Single-threaded programming languages can only evaluate one thing at a time. Synchronous code is run in the order it is written (although to evaluate functions the program may jump all over the space of the program) and **blocks the thread** from running anything else. Let's see an example of this:

```Javascript
function foo(){
  console.log("start");

  for(var i = 0; i < 99999999; i+=1){
  }

  console.log("done");
}

foo();
```

There is a noticable delay between `start` being logged and `done` being logged. This is because the nearly 100 billion iteration must be completed before moving on to the next subsequent line in the code. This is a prime example of synchronous code.

Asynchronous code, on the other hand, is code that will start or setup some process that usually takes some time to complete (i.e. asking a user for input, waiting for a keypress, waiting for a milli-second count, etc), but it will not block the thread while it waits. Asynchronous will usually run some function in response to the completion of the process it was waiting for - let me give you a few examples in words:

* If you were programming a Javascript video game, you'd want to tell the program to do something when the player presses a button. You wouldn't want this to be synchronous because if it was I'd pause the execution of the rest of the code until the user pressed a button. Instead, we'd prefer to let the game loop keep running and whenever the user pressed a button, our program would run the functionality we assigned to the key press.

* `setTimeout` and `setInterval` are asynchronous functions. While they wait for the milli-second countdown to reach 0, the JS interpreter keeps reading the rest of the code.

So the question now becomes: How do I tell JavaScript to run some functionality when the asynchronous function is finished. Putting the code after the asynchronous function won't work because asynchronous code isn't thread-blocking:

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

## Node I/O - File System

Node has many built-in modules that do a wide variety of things, from getting user input to reading files. Today, we are going to learn how to read files and use their contents
in our programs. But first, we have to learn how to import a module:

```javascript
var foo = require('nameOfModule');
```

All of the functionality of the module will exist in the variable you put it in. In the case above, that would be `foo`.

The File System module will allow us to read the contents of a file. In order to import it, we use the name `"fs"`. The module has a method on in called `readFile`, which we can use to...well, read the file.

Let's say we have a text file that looks like this:

```
// data.txt
john 5
anthony 7
carrie 10
bill 3
```

Each row contains the name of a person and their "coolness" rating. I want to write a function that can read this file an give me the name of the most cool person. Let's see how we can accomplish this with the File System module. We will create this function
one step at a time. First I will create a function that will give me all the records (rows) of a file:

```javascript
// myFile.js

var fs = require("fs");

function getRecordsFromFile(filename){
  fs.readFile(filename, function(err, data){
    if(err){
      console.log("---Error---");
      console.log(err);
      return;
    }

    console.log(data);
  })
}

getRecordsFromFile("data.txt");
```

I prefer to log the the raw data to make sure the reader is working first:

```
// the console
$ node myFile.js
<Buffer 6a 6f 68 6e 20 35 0a 61 6e 74 68 6f 6e 79 20 37 0a 63 61 72 72 69 65 20 31 30 0a 62 69 6c 6c 20 33 0a>
```

Opps! This isn't what we want at all. It's probably best that we **read the documentation** to understand how this function works. Lucky for you, I've already done that and have left the explanation below:

`fs.readFile` can time in a variable number of arguments:

* The first argument is always the filename (and path if needed).
* The second argument can be either a callback or a string:
  - If we use a callback as the second argument, the function will read the data it byte form. Since all data types are represented as bytes under the hood, the function doesn't make any assumptions about what type of data it's reading. If we want to tell it to interpret these bytes as strings, we have to tell it to so.
  - When the second argument is a string, that indicates to the File System function how it should interpret the bytes. In order to get bytes read as strings, we tell it to interpret them as `"utf8"`
* If the second argument is a string, then we can pass in the callback as the third argument.
* Regardless of wether the callback was passed as the second or third argument, the `readFile` method will pass it:
  - `err`: an error object (if there was an error)
  - `data`: the file data (defaults to raw byte data or encoded as specified in the second argument).

With this knowledge, let's modify our above function:

```javascript
// myFile.js

var fs = require("fs");

function getRecordsFromFile(filename){
  fs.readFile(filename, 'utf8', function(err, data){
    if(err){
      console.log("---Error---");
      console.log(err);
      return;
    }

    console.log(data);
  })
}

getRecordsFromFile("data.txt");
```

```
// the console
$ node myFile.js
john 5
anthony 7
carrie 10
bill 3

```

Yay! Now we just need to `split` this up on the newlines (`"\n"`) and this function will be complete.

```javascript
// myFile.js

var fs = require("fs");

function getRecordsFromFile(filename){
  fs.readFile(filename, 'utf8', function(err, data){
    if(err){
      console.log("---Error---");
      console.log(err);
      return;
    }

    var records = data.split("\n");

    return records;
  })
}

function mostCoolFromFile(filename){
  var records = getRecordsFromFile(filename);
  var coolest;
  var coolestRating = -1;

  records.forEach(function(record){
    var name = record.split(" ")[0];
    var rating = parseInt(record.split(" ")[1];

    if(rating > coolestRating){
      coolest = name;
    }
  });

  return coolest;
}

mostCoolFromFile("data.txt");
```

```
// the console
$ node myFile.js
records.forEach(function(record){
         ^
TypeError: Cannot read property 'forEach' of undefined...
```

Wait, what happened. `readFile` is an asynchronous function. That means that it'll keep runningg the code causing our `getRecordsFromFile` function to return `undefined`. In order to get around this, we'll need to use a callback. I'll pass a callback to `getRecordsFromFile` that will be called whenever the records have been made:

```javascript
// myFile.js

var fs = require("fs");

function getRecordsFromFile(filename, cb){
  fs.readFile(filename, 'utf8', function(err, data){
    if(err){
      console.log("---Error---");
      console.log(err);
      return;
    }

    var records = data.split("\n");

    cb(records);
  })
}

function mostCoolFromFile(filename){
  getRecordsFromFile(filename, function(records){
    var coolest;
    var coolestRating = -1;

    records.forEach(function(record){
      var name = record.split(" ")[0];
      var rating = parseInt(record.split(" ")[1];

      if(rating > coolestRating){
        coolest = name;
      }
    });

    return coolest;
  });
}

mostCoolFromFile("data.txt");
```

But now we still have a problem. How will I actually get the coolest person back? You guessed it: I'll add a callback to `mostCoolFromFile` that will log the coolest whenever I've found that person.

```javascript
// myFile.js

var fs = require("fs");

function getRecordsFromFile(filename, cb){
  fs.readFile(filename, 'utf8', function(err, data){
    if(err){
      console.log("---Error---");
      console.log(err);
      return;
    }

    var records = data.split("\n");

    cb(records);
  })
}

function mostCoolFromFile(filename, cb){
  getRecordsFromFile(filename, function(records){
    var coolest;
    var coolestRating = -1;

    records.forEach(function(record){
      var name = record.split(" ")[0];
      var rating = parseInt(record.split(" ")[1]);

      if(rating > coolestRating){
        coolest = name;
      }
    });

    cb(coolest);
  });
}

mostCoolFromFile("data.txt", function(coolestPerson){
  console.log(coolestPerson);
});
```

Now run the code...
