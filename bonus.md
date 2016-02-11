# Week 1

## Truthy or Falsey
Will these expressions evaluate to true or false. Check your work in the console.

* `(false || false || true) && (true && true && false)`
* `(false || false) && (false && false) || (true && false) || (false && true)`

## Truth Table

x  | y   | z   | (x && y) &#124;&#124; z
-----|-----|-----|------------------------
true |true |true |
true |true |false|
true |false|true |
true |false|false|
false|true |true |
false|true |false|
false|false|true |
false|false|false|

## dynamicFizzBuzz

Define a function `dynamicfizzBuzz(max, num1, num2)` that takes three numbers
as arguments and prints to the console every number from 0 to `max` that is
divisible by either `num1` or `num2`, but not both.

## What will these evaluate to?

```javascript
var rickyBobbyJr = function(num) {
  if(num < -5) {
    return "Bobby";
  } else if(num < 5) {
    return "Ricky";
  } else {
    return "Junior";
  }
};

var makeNum = function(num) {
  return (num * 2) - (num * num);
};

var sayHi = function(n) {
  var x = makeNum(n);
  return "Hey now, " + rickyBobbyJr(x);
}

sayHi(3);
```

## minMaxDifference

Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers.

## Dogs And Bones

You have 100 dogs (soo many dogs!). You have arranged all your dogs in a line.
Initially, none of your dogs have any bones. You take 100 rounds walking around
the dogs, always starting at the beginning. Every time you stop at a dog, you
put a bone in it's mouth if it doesn't have one, and you take away a bone if it
has one on (so cruel). The first round, you stop at every dog. The second
round, you only stop at every 2nd dog (#2, #4, #6, #8, etc.). The third round,
you only stop at every 3rd dog (#3, #6, #9, #12, etc.). You continue this
process until the 100th round (i.e. you only visit the 100th dog).

Write a program that prints which dogs have bones at the end.

# Week 2

### collisionDetected

A `block` is object that looks like this:

```
{
  x : 0,
  y : 0,
  width : 10,
  height : 10
}
```

Write a function `collisionDetected(block1, block2)` that returns `true` if the
two `block`s are intersecting.

```javascript
var blockA = {
  x : 2,
  y : 2,
  width : 3,
  height : 3
};

var blockB = {
  x : 3,
  y : -4,
  width : 13,
  height : 6
};

var blockC = {
  x : 0,
  y : -5,
  width : 8,
  height : 2
};

collisionDetected(blockA, blockB) === true;
collisionDetected(blockA, blockC) === false;
collisionDetected(blockC, blockB) === true;
```

## Debug the Program

```javascript
function getPropsAndMethods(object){
  var propsAndMethods = { props : [], methods : [] };

  for(var x in object){
    if(typeof x === 'function'){
      propsAndMethods.methods.push(x);
    } else {
      propsAndMethods.props.push(x);
    }
  }

  return propsAndMethods;
}

var cat = {
  name : "Kitty",
  age : 7,
  purr : function(){
    return ("The " + this.age +" year old kitty purrs...");
  }
};

getPropsAndMethods(cat); //==> { props : ["name", "age"], methods : ["purr"] }
```

```javascript
function isLucky(runner){
  if(runner.luck > 10){
    return true;
  }

  return false;
}

function race(){
  var winner = null;

  for(var i = 0; i <= runners.length; i += 1){
    var runner = runners[i];
    var speed = runner.runinngSpeed;

    if(isLucky(runner)){
      speed += 5;
    }

    if(speed > winner.runningSpeed){
      winner = runner;
    }
  }

  return winner.name;
}

var runners = [
  {
    name : "Jon",
    runningSpeed : 12,
    luck: 15
  },{
    name : "Anthony",
    runningSpeed : 5,
    luck : 26
  },{
    name : "Carl",
    runningSpeed : 13,
    luck : 8
  },
];

race(runners); //==> "Jon"
```


## deepIndexOf

Write a function `deepIndexOf(array, val)` that takes a 2-dimensional `array`
and `val` as its parameters. Return the pair of indices that can represent the
location of `val` in `array`. If the element does not exist, return `[-1, -1]`
