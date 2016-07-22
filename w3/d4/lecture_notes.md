# Lecture Notes 14

## Closures

### Function Scope
Before we get into closures, make sure you are comfortable with scope in JavaScript. If you aren't, then revisit this [lecture](../../w2/d4/lecture_notes.md).

For a quick recap: the **scope** of a function is the set of variables that are available for use within the function. The variables available when we call a function include:

1. the function parameters
2. any local variables declared inside the function
3. *any variables that were declared when the function was first defined*

Remember, *a new scope is created each time a function is* called. A function can refer to anything defined in its inner scope, and anything defined in an outer or enclosing scope. For example,

```js
// the outer scope
var bar = 20;

function foo(arg) {
  // the inner scope
  return arg + bar;
}

var result = foo(30);
console.log(result); // what does this print? make sure you understand why!
```

### What is a Closure?

In JavaScript, every function has access to the variables from outer and enclosing scopes. Functions that use these variables (also known as *free variables*) are called **closures**.

**1.** Closures have access to the outer functions variables even after the outer or enclosing function returns. For example,

```js
function sayHelloFirstName(firstName) { // the outer function
  var greeting = "Hello";

  function sayHelloFirstNameLastName(lastName) { // the inner function
    // inner functions have access to outer function variables including parameters
    return greeting + " " + firstName + " " + lastName;
  }

  return sayHelloFirstNameLastName;

}

var helloAnthony = sayHelloFirstName("Anthony"); // what's the data type of helloAnthony?
var helloAnthonyLadson = helloAnthony("Ladson"); // what's the data type of helloAnthonyLadson?
console.log(helloAnthonyLadson); // what does does this print?
```

When functions in JavaScript execute (i.e. are called), they access the same scope that was in effect when they were defined. This means that even after the outer function has returned, the inner function still has access to scope in which is was defined. In other words, it maintains access to the variables from outer and enclosing scopes even after the outer function is called and exits. Therefore, you can call the inner function later in your program.

**2.** Closures store references to variables from outer and enclosing scopes. In other words, if the value of a variable defined in an outer scope changes before a closure is called, the closure accesses the updated value of the variable. For example,

```js
function makeCounter() {
  var count = 0;

  var incrementCounter = function() {
    count++;
    console.log(count);
  }

  return incrementCounter;
}

var counter = makeCounter(); // returns function incrementCounter
counter(); // what does this print out?
counter(); // what does this print out?
counter(); // what does this print out?
```

Why does calling the function `counter` increment `count`, which is initialized when we called the function `makeCounter`. Because of closures! The inner function `incrementCount` stores a reference to the variable `count`, which is defined in its outer scope. When we increment `count` in the function body by calling the function `counter`, we are accessing a reference to `count` and changing the value stored at that reference. Each successive call of the function accesses the updated value of `count` and increments it by 1.

### Putting it All Together
Much of the code we write in practical JavaScript is event-based — we define some behavior, then attach it to an event that is triggered by some other event happening. 

To do this, we write *asynchronous code* (code that will start or setup some process that usually takes some time to complete but it will not block the thread while it waits to complete). 

To write asynchronous code, we rely on callbacks. Asynchronous functions execute callbacks in response to the completion of the process it was waiting for.

**Functions, Callbacks, Closures:**
+ A function is a *callback* if it is passed into a function and executed inside of the function to which it is passed.
+ A function is a *closure* is it refers to *free variables*, variables defined in outer or enclosing scopes.
+ Not all functions are callbacks or closures.
+ A function can be both a callback and a closure.

## Node I/O - File System

Node has many built-in modules that do a wide variety of things, from getting user input to reading files. Today, we are going to learn how to read files and use their contents in our programs. But first, we have to learn how to import a module:

```javascript
var foo = require('nameOfModule');
```

All of the functionality of the module will exist in the variable you put it in. In the case above, that would be `foo`.

The File System module will allow us to read the contents of a file. In order to import it, we use the name `"fs"`. The module has a method on in called `readFile`, which we can use to... well, read the file.

Let's say we have a text file that looks like this:

```javascript
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

function getRecordsFromFile(filename) {
  fs.readFile(filename, function(err, data) {
    if (err) {
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
* Regardless of whether the callback was passed as the second or third argument, the `readFile` method will pass it:
  - `err`: an error object (if there was an error)
  - `data`: the file data (defaults to raw byte data or encoded as specified in the second argument).

With this knowledge, let's modify our above function:

```javascript
// myFile.js

var fs = require("fs");

function getRecordsFromFile(filename) {
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
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

function getRecordsFromFile(filename) {
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }

    var records = data.split("\n");

    return records;
  })
}

function mostCoolFromFile(filename) {
  var records = getRecordsFromFile(filename);
  var coolest;
  var coolestRating = -1;

  records.forEach(function(record) {
    var name = record.split(" ")[0];
    var rating = parseInt(record.split(" "))[1];

    if (rating > coolestRating) {
      coolest = name;
      coolestRating = rating;
    }
  });

  return coolest;
}

mostCoolFromFile("data.txt");
```

```
// the console
$ node myFile.js
records.forEach(function(record) {
         ^
TypeError: Cannot read property 'forEach' of undefined...
```

Wait, what happened? `readFile` is an asynchronous function. That means that it'll keep running the code causing our `getRecordsFromFile` function to return `undefined`. In order to get around this, we'll need to use a callback. I'll pass a callback to `getRecordsFromFile` that will be called whenever the records have been made:

```javascript
// myFile.js

var fs = require("fs");

function getRecordsFromFile(filename, cb) {
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }

    var records = data.split("\n");

    cb(records);
  });
}

function mostCoolFromFile(filename) {
  getRecordsFromFile(filename, function(records) {
    var coolest;
    var coolestRating = -1;

    records.forEach(function(record) {
      var name = record.split(" ")[0];
      var rating = parseInt(record.split(" ")[1]);

      if (rating > coolestRating) {
        coolest = name;
        coolestRating = rating;
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

function getRecordsFromFile(filename, cb) {
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }

    var records = data.split("\n");

    cb(records);
  });
}

function mostCoolFromFile(filename, cb) {
  getRecordsFromFile(filename, function(records) {
    var coolest;
    var coolestRating = -1;

    records.forEach(function(record) {
      var name = record.split(" ")[0];
      var rating = parseInt(record.split(" ")[1]);

      if (rating > coolestRating) {
        coolest = name;
        coolestRating = rating;
      }
    });

    cb(coolest);
  });
}

mostCoolFromFile("data.txt", function(coolestPerson) {
  console.log(coolestPerson);
});
```

Now run the code...
