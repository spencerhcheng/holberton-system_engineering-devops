# Week 1

### Truthy or Falsey
Will these expressions evaluate to true or false? Check your work in the console.

* `(false || false || true) && (true && true && false)`
* `(false || false) && (false && false) || (true && false) || (false && true)`

### Truth Table

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

### dynamicFizzBuzz

Define a function `dynamicfizzBuzz(max, num1, num2)` that takes three numbers
as arguments and prints to the console every number from 0 to `max` that is
divisible by either `num1` or `num2`, but not both.

### What will this program evaluate to?

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

### minMaxDifference

Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers.

### dogsAndBones

You have 100 dogs (soo many dogs!). You have arranged all your dogs in a line.
Initially, none of your dogs have any bones. You take 100 rounds walking around
the dogs, always starting at the beginning. Every time you stop at a dog, you
put a bone in it's mouth if it doesn't have one, and you take away a bone if it
has one on (so cruel). The first round, you stop at every dog. The second
round, you only stop at every 2nd dog (#2, #4, #6, #8, etc.). The third round,
you only stop at every 3rd dog (#3, #6, #9, #12, etc.). You continue this
process until the 100th round (i.e. you only visit the 100th dog).

Write a program `dogsAndBones()` that prints which dogs have bones at the end.

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

Write a function `collisionDetected(block1, block2)` that returns `true` if `block1` and `block2` intersect, `false` otherwise.

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

### Debug the Programs

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

getPropsAndMethods(cat); // ==> { props : ["name", "age"], methods : ["purr"] }
```
---------------------------------------------------------------------------

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

race(runners); // ==> "Jon"
```

### deepIndexOf

Write a function `deepIndexOf(array, val)` that takes a 2-dimensional `array`
and `val` as its parameters. It returns an array containing the pairs of indices that represents the
location of `val` in `array`. If the element does not exist, return `[ [-1, -1] ]`.

```javascript
var ary = [
  [0, 2, 4],
  [1, 3, 9],
];

deepIndexOf(ary, 3); // => [ [1, 1] ]

var ary2 = [
  ["a", "b", "c"],
  [5, 0, 5, 0],
  [0, 1, 2]
];

deepIndexOf(ary2, 0); // => [ [1, 1], [1, 3], [2, 0] ]
```

### Tic-Tac-Toe Project

Assume you have a 3 x 3 array:
```js
[ [ , , ],
  [ , , ],
  [ , , ] ]
```

It represents a tic-tac-toe grid! Spaces filled by `"-"` represent empty spots and spaces can be filled by either `"X"` or `"O"`. For example,
```js
 var grid1 = [
   ["-","X","O"],
   ["O","X","O"],
   ["-","X","-"] ];

 var grid2 = [
   ["-","X","O"],
   ["O","X","X"],
   ["X","O","O"] ];
```

#### Part 1

Write a function `tttWon(grid)` which takes a 3 x 3 `grid` array and returns `true` if there's a tic-tac-toe winner and `false` otherwise. You can assume that `grid` is a 2D array filled with single character `"-"`, `"X"`, and `"O"`'s. This is a great time to practice *decomposition* (i.e. write helper functions). If you're not sure about how to play tic-tac-toe, click [here][ttt-overview].

```js
> tttWon(grid1)
true

> tttWon(grid2)
false
```

If you get stuck, below are a few hints.

**Hints:**
- Write `tttHorizontal(grid)` which takes `grid` and returns `true` if there's three in a row and `false` otherwise.
- Write `tttVertical(grid)` which takes `grid` and returns `true` if there's three in a column and `false` otherwise.
- Write `tttDiagonal(grid)` which takes `grid` and returns `true` if there's three in a diagonal and `false` otherwise.

[ttt-overview]:https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=tic%20tac%20toe%20rules

#### Part 2

Write a function `tttWinner(grid)` so that it returns the mark of the winner if there is a winner or `"no winner!"` otherwise. You have the majority of the logic for this already; you just wrote it! Modify your `tttWon(grid)` and your helper functions to solve for the winner.

```js
> tttWinner(grid1)
"X"

> tttWinner(grid2)
"no winner!"
```

# Week 3

### lengthOfHypotenuse

Write a function `lengthOfHypotenuse(sideA, sideB)` that takes in two numbers.
These numbers represent the sides of a right triangle that are adjacent to the right angle. This function returns the length of the hypotenuse of the triangle.

*Hint:* To find the length of a hypotenuse, we can use the Pythagorean Theorem (a^2 + b^2 = c^2), where c is the length of the hypotenuse, and a and b are the lengths of the remaining sides.

### collidingCircles

A circle is represented by a x-coordinate position, y-coordinate position, and radius (e.g. `{ x: 0, y: 0, radius: 1 }`). The x-y coordinates represent the position of its center.

Write a function `collidingCircles(circle1, circle2)` that takes in two circle objects as input and returns `true` if the circles are colliding, otherwise `false`.

*Hints:*
- The `lengthOfHypotenuse` function may be useful here.
- Finding the difference between the two circles' coordinate positions will give you the length of two sides of a right triangle.

### diagonalWalk

Write a function `diagonalWalk(path)` that takes a string (`path`) of characters as its input. These characters will be either `u`, `d`, `l`, or `r`, representing moves "up", "down", "left", or "right", respectively. The function returns `true` if we are along the diagonal axis of our starting position, `false` otherwise. Assume each step moves us the same distance.

```javascript
> diagonalWalk("urdl");
true
> diagonalWalk("urdldldl");
true
> diagonalWalk("urdlll");
false
```

# Week 4

### Pokemon Project

* [Part 1](./w4/d4/pokemon/class.md): Create a Pokemon class.
* [Part 2](./w4/d4/pokemon/battle.md): Battle your Pokemon.
