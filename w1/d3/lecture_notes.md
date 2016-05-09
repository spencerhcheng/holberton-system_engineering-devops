# Lecture Notes 3

### Arrays

Sometimes we will want to group related data together into a convenient
structure; for instance, the alphabet. Sure, I could create a bunch of strings:

```javascript
var a = "a";
var b = "b";
var c = "c";
var d = "d";
// and so on...
```

But this becomes cumbersome and unmanageable quickly. The Array is a data
structure that solves this problem. Arrays are defined by `[]` and store their
elements in sequential order. We can put elements into the array, replace elements
in the array, and remove elements from the array. If

```javascript
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
```

I can also structure this array to be more readable:

```javascript
var alphabet = [
  "a", "b", "c", "d", "e",
  "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o",  
  "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y",
  "z"
];
```

If we want to get the nth-element in the array, we have to 'index' into the
array. **Arrays start at the 0 index, not 1**. This is the convention in
programming.

```javascript
alphabet[0] === "a";
alphabet[9] === "j";
alphabet[alphabet.length - 1] === "z";
```

By packaging groups of related data in an array, we gain the added benefit of
being able to refer to that data as a single collection. Take a moment to just
appreciate how useful the Array is as a tool for managing complexity... ah.

#### Useful methods

Arrays have a bunch of useful properties and methods, such as
`Array.prototype.length` (which returns the number of elements in the array).
Take a look at the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array),
but these are the ones you should commit to memory:

* `Array.prototype.indexOf(element)`
* `Array.prototype.unshift(element)`
* `Array.prototype.shift()`
* `Array.prototype.push(element)`
* `Array.prototype.pop()`
* `Array.prototype.concat(other_array)`
* `Array.prototype.slice(startIndex, endIndex)`
* `Array.prototype.length` (property)
* `Array.isArray(obj)`

#### `String.prototype.split(separator)` and `Array.prototype.join(separator)`

`String.prototype.split(separator)` is a very helpful string method that splits a string into an array of substrings on the separator and returns the new array. It does not change the original string.

```js
> str = "Hey, whats up? Hello"
'Hey, whats up? Hello'

> splitStr = str.split(" ")
[ 'Hey,', 'whats', 'up?', 'Hello' ]

> splitStr
[ 'Hey,', 'whats', 'up?', 'Hello' ]

> str
'Hey, whats up? Hello'
```

The opposite of that is `Array.prototype.join(separator)`. This string method joins an array into a string where array elements are joined by the `separator`. If no separator is specified, array elements are joined by a comma. If an element is undefined or null, it is converted to an empty string. Like `split()`, `join()` does not change the original string.

Try it out in your terminal/command prompt!

```js
> splitStr
[ 'Hey,', 'whats', 'up?', 'Hello' ]

> joinStr = splitStr.join(" ")
'Hey, whats up? Hello'

> joinStr
'Hey, whats up? Hello'

> splitStr.join()
'Hey,,whats,up?,Hello'
```

One side effect of `split()` and `join()` is that when used in conjunction they are very useful for replacing characters or words in a string. Let's say I wanted to replace the word "Hey" with "Hi" in my string above. Or replace all e's with the letter o.

Check it out!

```js
> var replaceHey = str.split("Hey")
[ '', ', whats up? Hello' ]

> replaceHey.join("Hi") // all the Hey's got replaced with Hi's!
'Hi, whats up? Hello'

> var replaceE = str.split("e")
[ 'H', 'y, whats up? H', 'llo' ]

> replaceE.join("o") // all the e's got replaced with e's!
'Hoy, whats up? Hollo'
```

### Controlling Complexity

Uncontrolled complexity is the arch-nemesis of a programmer. If we do not
understand our programs, we will inevitably introduce bugs. Today I want to
introduce two ideas that will help you in your quest to master the complexity of
your programs: Decomposition and Abstraction.

#### Decomposition

Decomposition is the process of breaking down a larger problem into it's smaller
sub problems. Let's look at an example:

###### `laligatSequence(base, n)`

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

We can use the laligat sum to define a special sequence, called the laligat
sequence. The laligat sequence of a number begins with the number itself. The
second number in the sequence is the first number's laligat sum, the third
number is the second number's laligat sum, and so on.

For example, the first 4 numbers in the laligat sequence of 10 are: 10, 17, 58, 381.

```
> laligatSequence(10, 4)
[ 10, 17, 58, 381 ]

>laligatSequence(5, 2)
[ 5, 10 ]
```

We could try to write the whole thing in a single function:

```javascript
function laligatSequence(base, n) {
  var sequence = [base];

  while (sequence.length < n) {
      var prevElement = sequence[sequence.length - 1];

      var laligatSum = 0;

      for (var maybePrime = 2; maybePrime <= prevElement; maybePrime += 1) {
        var prime = true;

        for (var i = 2; i < maybePrime; i += 1) {
          if (maybePrime % i === 0) {
            prime = false;
          }
        }

        if (prime) {
          laligatSum += maybePrime;
        }
      }

      sequence.push(laligatSum);
  }

  return sequence;
}
```

But, as you can see, this function is very hard to read and reason about. What
if this code contained a bug? How noticeable would it be? If there was an issue
with how prime numbers are found, would you know where to look?

Let's decompose this method into a bunch of smaller methods:

```javascript
function isPrime(n) {
  for (var i = 2; i  < n; i += 1) {
    if (n % i === 0) {
      return false
    }
  }
  return true;
}

function sumOfPrimesUpToN(n) {
  var sum = 0;

  for (var i = 2; i <= n; i += 1) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

function laligatSequence(base, n) {
  var seq = [base];

  while (seq.length < n) {
    var prevElement = seq[seq.length - 1];
    var nextElement = sumOfPrimesUpToN(prevElement);
    seq.push(nextElement);
  }

  return seq;
}
```

#### Abstraction

Abstraction is the process of hiding details. The human brain is relatively bad
at reasoning through complexity. As you will see, computer programs become pretty
complex rather quickly and it is hard for the human brain to keep up. The job of
a programmer is to manage the complexity by keeping the program modular and
hiding details. The act of hiding details allows our minds to focus on other
aspects of the program that need attention. Decomposition is a technique that
uses abstraction because it hides details. Go back and look at the two
`laligatSequence` solutions. The decomposed one exposes less implementation
details and is easier to reason about.
