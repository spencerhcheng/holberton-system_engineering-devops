### Finish [Clock](../d2/clock.md) Project!

### Higher-Order Functions

Write a function `myForEach(arr, cb)` that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. Do not use the built-in `Array.prototype.forEach` method. The return value is irrelevant.

```js
> myForEach([1,2,3], function(ele, i, arr) {
..  console.log(ele + " is at position " + i + " in array " + arr);
..});
1 is at position 0 in array [1,2,3]
2 is at position 1 in array [1,2,3]
3 is at position 2 in array [1,2,3]
```
--------------------------------------------------------------------------------
Write a function `mySelect(arr, cb)` that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. It should return a new array of all the elements in the input array `arr` where the callback `cb` returns true.

```js
> mySelect([1,2,3,4,5,6], function(ele, i, arr) {
..  return (ele % 2 === 0);
..});
[2,4,6]

> mySelect([1,2,3,4,5,6], function(ele, i, arr) {
..  return (i % 2 === 0);
..});
[1,3,5]
```
--------------------------------------------------------------------------------
Write a function `myReject(arr, cb)` that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. It should return a new array of all the elements in the input array `arr` where the callback `cb` returns false.

```js
> myReject([1,2,3,4,5,6], function(ele, i, arr) {
..  return (ele % 2 === 0);
..});
[1,3,5]

> myReject([1,2,3,4,5,6], function(ele, i, arr) {
..  return (i % 2 === 0);
..});
[2,4,6]
```
--------------------------------------------------------------------------------
Write a function `myMap(arr, cb)` that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. Do not use the built in `Array.prototype.map` method. It should return an array where each element is the return value of the callback given the element in the corresponding position. See the examples if this is confusing.

```js
> myMap([1,2,3], function(ele, i, arr) {
..  return ele * 2;
..});
[2, 4, 6]

> myMap([1,2,3], function(ele, i, arr) {
..  return ele + i;
..});
[1, 3, 5]

> myMap(["A", "B", "C"], function(ele, i, arr) {
..  return ele + i;
..});
["A0", "B1", "C2"]
```
--------------------------------------------------------------------------------
Write a function `createExpFunc(num)` that accepts a positive integer. It returns
a function which will raise its input to the power specified by `num` and returns
the value.

```js
> var powerTwo = createExpFunc(2);
> powerTwo(2);
4

> powerTwo(6);
36

> var powerThree = createExpFunc(3);
> powerThree(2);
8

> powerThree(6);
216

> var powerTen = createExpFunc(10);
> powerTen(2);
1024

> powerTen(6);
60466176
```
