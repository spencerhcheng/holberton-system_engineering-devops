# Lecture Notes 3

### Arrays

Sometimes we will want to group related data together into a convenient
structure; for instance, the alphabet. Sure, I could create a bunch of strings:

```
var a = "a";
var b = "b";
var c = "c";
var d = "d";
// and so on...
```

But this becomes cumbersome and unmanageable quickly. The Array is a data structure that solves this problem. Arrays are denoted by `[]` and store their elements in sequential order.

```
var alphabet = [
  "a", "b", "c", "d", "e",
  "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y",
  "z"
];
```

If we want to get the nth-element in the array, we have to 'index' into the array:

```
alphabet[0] == "a"
alphabet[9] == "j"
alphabet[alphabet.length - 1] == "z"

```

As you can see, **arrays start at the 0 index, not 1**. This is the convention among the vast majority of programming languages.


By packaging groups of related data in an array, we gain the added benefit of being able to refer to that data as a single name. Take a moment to just appreciate how useful the Array is as a tool for managing complexity...ah.

#### Useful methods

Arrays have a bunch of useful properties and methods, such as `Array.prototype.length` (which returns the number of elements in the array). Take a look at the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), but these are the ones you should commit to memory:

* `Array.prototype.indexOf(element)`
* `Array.prototype.forEach(callback)`
* `Array.prototype.unshift(element)`
* `Array.prototype.shift()`
* `Array.prototype.push(element)`
* `Array.prototype.pop()`
* `Array.prototype.concat(other_array)`
* `Array.prototype.slice(index, length)`
* `Array.prototype.splice(index, length)`
* `Array.prototype.length` (property)

### Controlling Complexity

Uncontrolled complexity is the arch-nemisis of a programmer. If we do not understand out programs, we will inevitably introduce bugs. Today I want to introduce two ideas that will help us in our quest to master the complexity of our programs: Decomposition and Abstraction.

#### Decomposition

Decomposition is the process of breaking down a larger problem into it's smaller sub problems. Let's look at an example:

I want to write a function called `myMadeUpSequence(base, n)`. Return an array where every element is the product of the element before it and the largest prime number smaller than that element. The sequence starts with `base` and it's length is `n`. For example:

```
myMadeUpSequence(10, 4) == [10, 70, 4690, 21944510]
myMadeUpSequence(5, 5) == [5, 15, 195, 37635, 1416317955]
```

We could try to write the whole thing in a single function:

```
function myMadeUpSequence(base, n){
  var sequence = [base];

  while(sequence.length < n){
      var prevElement = sequence[sequence.length - 1];
      var largestPrime = 2;

      while(true){
          var oldLargest = largestPrime;
          var prime;

          while(true){
            prime = true;
            largestPrime += 1;
            for(var i = 2; i < largestPrime; i += 1){
              if(largestPrime % i === 0){
                prime = false;
              }
            }

            if(prime){ break; }
          }

          if(largestPrime >= prevElement){
            largestPrime = oldLargest;
            break;
          }
      }

      sequence.push(prevElement * largestPrime);
  }

  return sequence;
}
```

But, as you can see, this function is very hard to read and reason about. What if this code contained a bug? How noticeable would it be? If there was an issue with how prime numbers are found, would you know where to look?

Let's decompose this method into a bunch of smaller methods:

```
function isPrime(n){
  for(var i = 2; i  < n; i += 1){
    if(n % i === 0){
      return false
    }
  }
  return true;
}

function largestPrimeUnderN(n){
  largestPrime = 2;

  for(var i = 2; i < n; i += 1){
    if(isPrime(i)){
      largestPrime = i;
    }
  }

  return largestPrime;
}

function myMadeUpSequence(base, n){
  var seq = [base];

  while(seq.length < n){
    var prevElement = seq[seq.length - 1];
    var largestPrime = largestPrimeUnderN(prevElement);
    seq.push(prevElement * largestPrime);
  }

  return seq;
}
```

#### Abstraction

Abstraction is the process of hiding details. The human mind is limited. The
less is has to focus on, the more energy it can give to what is it focusing on.
The act of hiding details allows our minds to focus on other aspects of the
program that need attention. Decomposition is a technique that uses abstraction
because it strips away details. Go back and look at the two `myMadeUpSequence`
functions. The decomposed one exposed less implementation details and is easier
to reason about.
