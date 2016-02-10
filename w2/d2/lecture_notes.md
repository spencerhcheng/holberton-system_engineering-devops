# Lecture Notes 7

## Multi-Dimensional Arrays

A multi-dimensional array is an array that has other arrays as it's elements.

```javascript
var multiArray = [
  [1], [2], [3], [4, 5]
];
```

Just like with normal arrays, we use the bracket notation to index into the
nested arrays.

```javascript
multiArray[0][0] === 1;
multiArray[1][0] === 2;
multiArray[2][0] === 3;
multiArray[3][1] === 5;
```

## Nested Loops

Sometimes you will need to nest a loop inside of another loop. Let's say we are
given an array and have to return the indices of all pair of elements that sum
to 0. This means we we will have to add each element to the other elements in
the array.

```javascript
function pairZero(array) {
  var pairs = [];

  for(var i = 0; i < array.length; i += 1){
    for(var j = 0; j < array.length; j += 1){
      if(array[i] + array[j] === 0){
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}
```

There are a few issues with this solution though:

* We end up adding every element to itself. If the array contains a 0, then we
will add the same pair of indices into the array. (i.e. If the array is
  `[4, 1, 0]`, we will get back `[ [2, 2] ]`)

* Our answer will contain a bunch on inverse pairs. (i.e If the array is
  `[1,2,-1]`, we will get back `[ [0,1], [1,0] ]` instead of `[ [0,1] ]`).

How can you fix these issues?
