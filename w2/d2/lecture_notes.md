# Lecture Notes 7

## Multi-Dimensional Arrays

A multi-dimensional array is an array that has other arrays as its elements.

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

  for(var i = 0; i < array.length; i += 1) {
    for(var j = 0; j < array.length; j += 1) {
      if (array[i] + array[j] === 0) {
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
  `[1, 2, -1]`, we will get back `[ [0,1], [1,0] ]` instead of `[ [0,1] ]`).

How can you fix these issues? We want our output to `pairZero` to look like this:

```js
> pairZero([4, 1, 0,])
[ ]

> pairZero([1, 2, -1])
[ [0, 1] ]

> pairZero([0, 2, 5, -2, 0])
[ [0, 4], [1, 3] ]
```

Note: the order of the indices matters

## Data Modeling

Data modeling is the art of structuring your data in ways that make sense for your application. The same idea can be structured in different way and can affect the complexity of your program. Let's look at an example:

Say we have to write a function where we are given an array of items and it has to return how many times each item appeared in the array. There are many ways to model the notion of a count.

I could represent the count as a multi-dimensional array:

```js
> var myArray = ["a", "b", "a", "c", "a", "b", "d"]
> getCount(myArray)
[["a", 3], ["b", 2], ["c", 1], ["d", 1]]
```

I could also represent the count as an object:

```js
> var myArray = ["a", "b", "a", "c", "a", "b", "d"]
> getCount(myArray)
{ a : 3, b : 2, c : 1, d : 1 }
```

So which one is better? The answer is that there is no "right" answer. It depends upon the requirements of your system. If the order of the count has to reflect the order of the elements in the input array, it probably makes sense to use the array representation because arrays are meant for ordered collections. However, the object representation is much more succinct and would definitely be easier to write.

#### Data Modeling Scenarios

*  The function should return pairs (or triplets, or quadruplets, etc) of things, it probably makes sense to use a 2D array. The outer array to hold all of the pairs. The inner arrays to hold each pair.

* You have to write a function that asks you to keep track of a robot's location on a 2D plane. How do we represent that data (robot's location)? We can use 2D arrays to represent a cartesian plane, but that may be an overkill. We can also initialize two variables (`x` and `y`) to zero. When the robot moves in the positive direction, increment (or decrement) the counter associated with that axis. No we have a succinct representation of location without the weight and complexity of a 2D array.

* Your employer ask you to create a data model of a car. What data structure would you use? If you thought `Object`, you are correct. Objects are great for modeling complex data structures.

```js
var car = {
  type : "Tesla",
  mpg : 1000,
  engines: ["Rev4", "Mark22"]
  //etc...
}
```
