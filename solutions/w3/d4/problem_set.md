# Finish Clock and Sentiment Detector Projects!

## `Array.prototype.forEach`

Redo these previous exercises using `Array.prototype.forEach`.

### logEach

Write a function `logEach(array)` that prints every element of the array and its
index to the console . Example:

```
> logEach(["Anthony", "John", "Carson"]);
0: Anthony
1: John
2: Carson
```

### maxValue

Write a function `maxValue(array)` that returns the largest value in the array.
Assume `array` is an array of numbers.

```
> maxValue([12, 6, 43, 2])
43

> maxValue([])
null

> maxValue([-4, -10, 0.43])
0.43
```

### wordYeller
Write a function wordYeller(sentence) that takes in a sentence string as input. It should return the sentence where every word has an exclamation point behind it, except words that already have punctuation. Punctuation marks are ". , ! ? ; :"

Example 1
```js
var sent = "Stop it now! Please, wont you stop?";
var yelledWords = wordYeller(sent);
yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
```
Example 2
```js
var words = "Go to the store and grab the following: milk, bread, run, and cake";
wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true
```

### divisibleByNPairSum

Write a function `divisibleByNPairSum(array, n)` that takes an array of numbers. It should return an array of all the pairs of indices whose sum is a multiple of `n`.

```
> divisibleByNPairSum([1, 6, 3, 4, 2, 0], 3);
[ [ 0, 4 ], [ 1, 2 ], [ 1, 5 ], [ 2, 5 ], [ 3, 4 ] ]

> divisibleByNPairSum([8, 3, 5, 9, 2], 10);
[ [ 0, 4 ] ]
```

### peakFinder

Write a function `peakFinder(array)` that takes in an array of numbers. It should return an array containing the indices of all the peaks. A peak is an element that is greater than both of its neighbors. If it is the first or last element, it is a peak if it is greater than its one neighbor. Assume the array has a length
of at least 2.

```js
> peakFinder([ 1, 2, 3, 2, 1 ]);
[2]

> peakFinder([ 2, 1, 2, 3, 4, 5 ]);
[0, 5]

> peakFinder([-5, 0, 0, -1]);
[]
```
