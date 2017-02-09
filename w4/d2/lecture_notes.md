# Lecture Notes 19

## What is a Class?

We have created several objects before during this course (usually cats). Let's create
three cats:

```javascript
var cat1 = {
  name : "Kitty",
  age : 2,
  meow : function() {
    console.log(this.name + " says meow.");
  }
}

var cat2 = {
  name : "Whiskers",
  age : 7,
  meow : function() {
    console.log(this.name + " says meow.");
  }
}

var cat3 = {
  name : "Whitney",
  age : 11,
  meow : function() {
    console.log(this.name + " says meow.");
  }
}
```

This code is violating the DRY (don't repeat yourself) rule. What if I wanted add
a new property to my cats (like `color`) or modify the `meow` method? As the code is
right now, I'd have to find everywhere in my code where I created a cat and change
the method. Or what if I needed to create 1000 cat objects? To create each object
by hand would be very error prone. So how can we solve this? **Classes**.

Think of a class as a blueprint for an object. If we create a `Cat` class, we can use
it to create as many cat objects as we need. We will specify all of the properties
and methods that are common to all cats on the class, DRYing up our code considerably.
We can then create new cat objects on the fly with out `Cat` class.

The next three sections will go over the full process needed to create our `Cat`
class.

## Creating New Classes

Functions have many roles in javascript: creating new abstraction layers, creating
new scopes, etc.. Functions are also the way we create new classes in JavaScript.

*It is technically incorrect to say that a function is how we create a new class. The
construct we are introducing to you is technically called a* **Constructor**. *For our purposes,
a Class and a Constructor are synonymous. If you are interested in the distinction, see the resources page for more reading*

Let's create the `Cat` class:

```javascript
function Cat() {

}

var cat1 = new Cat();
var cat2 = new Cat();
var cat3 = new Cat();

cat1.name === undefined; //true
cat2.age === undefined; //true
cat3.color === undefined; //true
```

There you have it. In the above code, we created a `Cat` class, then used it to
create three cats. Now, these cats are essentially empty objects that were
created from an empty class, but there are two things we can learn about Javascript
classes from this example:

* A Javascript class starts, by convention, with a capital letter
* The `new` keyword is used to create an object (also called an *instance*) from the
Constructor


## Creating Instance Variables

We want all of our cats to have a name, age, and color property, but we want the
values of those properties to be different for every cat instance.

```javascript
function Cat(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

var cat1 = new Cat("Kitty", 2, "red");
var cat2 = new Cat("Whiskers", 7, "black");
var cat3 = new Cat("Whitney", 11, "gray");

cat1.name === "Kitty"; //true
cat2.age === 7;        //true
cat3.color === "gray"; //true

// What is cat1.color?
// What is cat2.name?
// What is cat3.age?
```

The `this` keyword, when used inside of a constructor function, evaluates to the object
that will be created when the constructor is used with the `new` keyword. In other
words, when the constructor is run with the `new` keyword, the function body is evaluated, and `this` is the object that is being created.

An **instance variable** is a property that exists on each object. In this case, `name`,
`age`, and `color` are instance variables. The canonical way to set up instance
variables is to pass in the values as arguments.

## Creating Methods on Classes

By now, you'd probably expect the below to be how we defined instance methods:

```javascript
function Cat(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.meow = function() {
    console.log(this.name + " says meow.");
  }
}
```

If you run this code, you will see that it'll behave as expected. **BUT IT IS WRONG**.
Why, you ask? Because this will create a new function object that represents that
method every time we create a new cat. This is unnecessary and not optimal because
`meow` will return the same thing for every cat. What we want to do is define the
method once and have all instances refer to that definition when they call the method.
We achieve this by defining the method on the `prototype` property of the `Constructor`:

```javascript
function Cat(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

Cat.prototype.meow = function() {
  console.log(this.name + " says meow.");
}

var cat1 = new Cat("Kitty", 2, "red");
var cat2 = new Cat("Whiskers", 7, "black");
var cat3 = new Cat("Whitney", 11, "gray");

cat1.meow(); // logs "Kitty says meow."
cat2.meow(); // logs "Whiskers says meow."
cat3.meow(); // logs "Whitney says meow."
```

## Prototype Modification

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
