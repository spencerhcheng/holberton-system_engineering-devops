### isValidEmail

Write a function `isValidEmail(email)` that takes an email string. Return `true`
if the email is considered valid. A valid email:

* Contains one and only one "@" symbol
* All the characters before the "@" symbol are alphanumeric, underscores, or dots "."
* There is one and only one dot "." after the "@" symbol
* Besides the dot ".", all the characters after the "@" are in the alphabet (no numbers or underscores)

Feel free to use these arrays in your solution:

```javascript
var alphabet = [
  "a","b","c","d","e",
  "f","g","h","i","j",
  "k","l","m","n","o",
  "p","q","r","s","t",
  "u","v","w","x","y",
  "z"
]

var numbers = [ "1","2","3","4","5","6","7","8","9","0" ]
```

### peakFinder

Write a function `peakFinder(array)` that takes in an array of numbers. It should
return an array containing the indices of all the peaks. A peak is an element
that is greater than both of its neighbors. If it is the first or last element,
if it s peak if it is greater than its one neighbor.

### stockPicker

Write a function `stockPicker(stocks)`. `stocks` is an array of numbers where
the index represents the day, and the number at that index represents to stock
price of that day. Return the buy day and sell day (indices) that will yield
the most profit in an array.

### Project Euler Problem 1

Make an account [here](https://projecteuler.net/). Do the Problem 1

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
