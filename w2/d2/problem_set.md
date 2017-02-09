### divisibleByThreePairSum

Write a function `divisibleByThreePairSum(array)` that takes an array of numbers. It should return an array of all the pairs of indices whose sum is a multiple of three.

```
> divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
[[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

> divisibleByThreePairSum([8, 3, 5, 9, 2]);
[[1, 3]]
```

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
];

var numbers = [ "1","2","3","4","5","6","7","8","9","0" ];
```

```js
>isValidEmail("junk@gmail.com");
true

>isValidEmail("now.what@now.co");
true

>isValidEmail("i_am_happy@feelings.net");
true

>isValidEmail("my@website@gmail.com");
false

>isValidEmail("webby@gmail.co.net");
false

>isValidEmail("anthony@ira_ladson.com");
false

>isValidEmail("anthony!@ladson.com");
false
```

### peakFinder

Write a function `peakFinder(array)` that takes in an array of numbers. It should
return an array containing the indices of all the peaks. A peak is an element
that is greater than both of its neighbors. If it is the first or last element,
it is a peak if it is greater than its one neighbor. Assume the array has a length
of at least 2.

```js
>peakFinder([1, 2, 3, 2, 1])
[2]

>peakFinder([2, 1, 2, 3, 4, 5])
[0, 5]

>peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])
[2, 6, 8]
```
