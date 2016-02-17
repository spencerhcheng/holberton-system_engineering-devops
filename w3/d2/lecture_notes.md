# Lecture Notes 12

## Math object

`Math` is a built-in object that has properties and methods for mathematical
constants and functions. Not a function object.

```
>Math
{}
```

Despite its appearance as an empty object, it actually contains a lot of
functionality that we can use in our programs:

* `Math.PI` (a property) - Evaluates to mathematical PI
* `Math.abs(number)` - Returns the absolute of the `number`
* `Math.ceil(number)` - Returns the smallest integer greater that or equal to the `number`
* `Math.floor(number)` - Returns the largest integer less than or equal to the `number`
* `Math.round(number)` - Returns the value of the `number` rounded to the nearest integer
* `Math.random()` - Return a (pseudo) random number between 0 and 1
* `Math.sqrt(number)` - Returns the square root of the `number`

Never reassign the `Math` object. You will never be able to access it's
functionality again, and can break any libraries that are depending on it's
functionality.

```
>Math = "me";
undefined

>Math.PI;
undefined
```
## setTimeout and setInterval

Computers are very fast, and when the interpreter hit a function invocation, it
typically executes the code immediately. Sometimes, however, we may not want
execute that function immediately. JavaScript has a built-in method to accommodate
this requirement. It's called `setTimeout(fn, ms)`. It takes as its parameters a
function object (`fn`) and the number of milliseconds to wait before executing
that function. Let's look at an small example:

```javascript
function helloWorld(){
  console.log("Hello World");
}

function delayedHelloWorld(ms){
  setTimeout(helloWorld, ms);
}
```

If we run this in node:

```
>delayedHelloWorld(1000)
undefined

//one second later...
>Hello World

>delayedHelloWorld(5000)
undefined

//five seconds later
>Hello World
```

`setTimeout` is what's called an asynchronous function. This means that it will
not block the execution of the thread. We will discuss asynchronous behavior in-depth
tomorrow, but for now, it is good enough to know that if there is code after a
`setTimeout`, it will go ahead and run that code, instead of waiting until after
input function (`fn`) is run. Let's look at an example of this by modifying our
`delayedHelloWorld` function:

```javascript
function delayedHelloWorld(ms){
  setTimeout(helloWorld, ms);
  console.log("I will be logged first");
}
```

Run it in node:

```
>delayedHelloWorld(1000);
I will be logged first
undefined

//one second later...
>Hello World

>delayedHelloWorld(0); //How do you think this will behave?

>delayedHelloWorld(-1); //What about this?
```

Let's say I wanted to call a function over an over again:

```javascript
function annoyingMeow(){
  setTimeout(annoyingMeow, 1000);
  console.log("meow");
}
```

Run this code. Does the behavior make sense? `"meow"` will be logged every second
because annoyingMeow is recursively setting a timeout on itself.

There is an alternative way to call a function over and over again, and that is
with `setInterval(fn, ms)`:

```javascript
function annoyingMeow(){
  setInterval(function(){
    console.log("meow");
  }, 1000);
}
```

We've done a couple of new things in this function:

* The first argument to `setInterval`, the `fn` argument, we passed in what's called
an anonymous function. An anonymous function is a function that doesn't have a name.
Get used to seeing these because they are every popular in JavaScript.
* `setInterval` will call the function (`fn`) over and over again every certain
number of milliseconds, specified by the `ms` argument.
* Can you determine why be couldn't have just passed in the console.log method itself as such:

```javascript
function annoyingMeow(){
  setInterval(console.log("meow"), 1000);
}
```

Run this code and look at the error message if you are having trouble. This is a
*very* common beginner mistake when working with `setTimeout` and `setInterval`.

## binding `this`

Let's look at an example of using `setTimeout` / `setInterval` where the `this`
may become dereferenced from it's original object. This is a very common danger
when using asynchronous method:

```javascript
var cat = {
  name : "Curie",

  annoyingTimeoutMeow : function(){
    console.log(this.name + " says meow");
    setTimeout(this.annoyingTimeoutMeow, 1000);
  },

  annoyingIntervalMeow : function(){
    setInterval(function(){
      console.log(this.name + " says meow");
    }, 1000);
  }
}
```

* The `cat.annoyingTimeoutMeow` stops working because when I try to recursively
call `this.annoyingTimeoutMeow`, the `this` is no longer the `cat` object,
causing `annoyingTimeoutMeow` to evaluate to `undefined`. If we pass `undefined`
to `setTimeout`, we will see that is doesn't run.

* The `cat.annoyingIntervalMeow` keeps running, but we get `undefined says meow`.
This, again, is because the `this` is no longer the `cat` object. Why is that? Notice
that when we call `this.name`, we are inside the anonymous function. IS the object
that function the `cat`...nope.

How do we fix these issues? In both cases we loose our original context for `this`.
The answer is that we must `bind` the correct `this` to the function. What the
hell does that mean though? In other words, we must explicitly tell JavaScript what
value of `this` will be in those function. That is done with the `Function.prototype.bind(thisContext)`
method. It is a method that exists on every function, and the argument we pass in
as `thisContext` will be what `this` evaluates to when the function is called.

With this knowledge, let's fix our two annoying meows:

```javascript
var cat = {
  name : "Curie",

  annoyingTimeoutMeow : function(){
    console.log(this.name + " says meow");
    setTimeout(this.annoyingTimeoutMeow.bind(cat), 1000);
  },

  annoyingIntervalMeow : function(){
    setInterval(function(){
      console.log(this.name + " says meow");
    }.bind(cat), 1000);
  }
}
```
