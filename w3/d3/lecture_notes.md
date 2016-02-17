# Lecture Notes 13

## Callbacks

A _callback_ is a function that is passed as an argument to another function. The
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

Callbacks are just regular functions, and like any other function they can accept
arguments.

```javascript
var logTheAnswer = function(answer){
  console.log("The answer is " + answer + ".");
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
to the appropriate object.

```javascript
var cookieMonster = {
  favoriteFoods = ["apple", "cookie", "orange"],

  logFavFoods: function(){
    this.favoriteFoods(function(food){
      console.log(food);
    });
  }
}
```

## Synchronous vs Asynchronous

## Node I/O - Readline and File modules
