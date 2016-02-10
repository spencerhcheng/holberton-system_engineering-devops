### TicTacToe Part 1
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
