### Prototype Modification
Wouldn't it be cool if this actually worked?
```javascript
var x = 2, y = 3;

x.isEven();                 // true
y.isOdd();                  // true
x.isPrime() && y.isPrime(); // true

var arr = [1, 2, 3];

arr.average();              // 2
arr.sum();                  // 6
```

Hold on to your seat - it _does_ work!

This wizardry is __prototype modification__. Remember this?

> Array.prototype.whatever<br>
> String.prototype.whatever

There are plenty of built-in functions, like `indexOf` and `split`; you can _add your own_. It's as simple as saying:

```javascript
Number.prototype.isFive = function(){
  return Number(this) === 5;
};
```
> There's no need to be paranoid; just in case _Javascript is plotting to get you_, you can always make sure your fives are actually fives:

```javascript
var five = 5;
five.isFive();            // true - But what if it wasn't?!!?
```

__But what's up with Number(this)?__

`this` is a complicated fellow who refuses to go along with my machinations; luckily Javascript allows us to 'force' `this` into what I want. If only it worked on myself! This is known as [type casting](https://en.wikipedia.org/wiki/Type_conversion). We have to call `Number(this)` and `String(this)` because otherwise, `this` won't actually be a number or string; it will be some complex blob of an object with myriad key-value pairs.

If it lets you turn your night-light off, you can even do something like this:

```javascript
String.prototype.log = function(){
  var self = String(this);  // Now you can sleep at night

  console.log(self);
};

"Brosephina, I'm totally sleeping ijn the dark!".log(); // COURAGE
```

#### Finding the Maximum

We often have to find the maximum or minimum values in an array.<sup>[1](#apply)</sup> Here's what finding the maximum would look like:

```javascript
Array.prototype.max = function(){
  return this.reduce(function(previous, current){
    return Math.max(current, previous)
  });
};

[1, 2, 5, -42].max()     // 5
              .isFive()  // Probably
```
> _That is similar to this more imperative code:_

```javascript
 Array.prototype.max = function(){
  var max = Array.from(this)[0];

  for (var i = 0; i < this.length; i++){
    max = this[i] > max ? this[i] : max;
  }

  return max;
};
```


---
#### This isn't a Problem Set. But if it Were...

The problems would probably be:
  1. Add to the `Number` prototype:
    - `isPrime`
    - `isEven` and `isOdd`
    - `lessThan` and `greaterThan`
      - _will take an argument and return `Number(this) ??? arg`_
    - `multiply`, `divide`, `add` and `subtract`
      - _similar to above_

  <br>
  2. Add to the `String` prototype:
    - `words`: Returns an array of the sentence's words
    - `myReverse`: Returns the sentence... _reversed!_

  <br>
  3. Add to the `Array` prototype:
    - `frequency`: returns an object whose keys are unique values in the array, and whose values are their count
    - `last` / `back`: returns the last element in the array
    - `first` / `front` : returns the first element in the array
    - `min` and `max` : See the _max_ code given above


<br><br>
<br><br>
<br><br>
<a name="apply">1</a>: _Let's pretend that `Math.max.apply(Math.max, array)` and `Math.max.call(Math.max, a, b, c, etc)` don't exist._
