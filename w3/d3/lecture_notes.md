# Lecture Notes 13

## Callbacks

A callback is a function that is passed as an argument to another function. The
callback is called inside of the function to which it is passed. Let's look at
an example:

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

Callbacks are just regular functions, and like any other function that can accept
arguments.

```javascript
var logTheAnswer = function(answer){
  console.log("The answer is" + answer + ".");
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

add(1,2,logTheAnswer); // What will this return
add(1,2,add5ToAnswer); // What will this return

concatenate(1,2,logTheAnswer); // What will this return
concatenate(1,2,add5ToAnswer); // What will this return
```

## Array.prototype.forEach

## Synchronous vs Asynchronous

## Node I/O - Readline and File modules
