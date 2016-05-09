# Lecture Notes 4

## What is an Object?

An object a data structure that stores other data, like an array. Objects,
however, differ from arrays in two important ways:

* Instead of indexing with numbers, objects are indexed with keys (strings).

* Order is not guaranteed. When you iterate through the elements in an array,
they may not be in the same order they were entered in.

Objets are denoted by curly brackets `{}`. Open up the console and let's make
some objects.

```
> var dog = {};
undefined

> dog
{}

> dog["name"] = "Rover";
'Rover'

> dog["type"] = "Husky";
'Husky'

> dog.bark = "Bowowowo";
'Bowowowowo'


> dog
{ name: 'Rover', type: 'Husky', bark: 'Bowowowowo' }

> dog.name
"Rover"

> dog[name]
Error messages...

> dog["name"]
"Rover"

> name
Error Messages...

/* We can also create the entire object in a single statement. */

> var dog2 = {
... name : "Silver Fang",
... type : "Wolf",
... bark : "Rawrrrr"
... };
undefined

> dog2
{ name: 'Silver Fang', type: 'Wolf', bark: 'Rawrrrr' }

```

Objects associate keys with values. The keys are always strings. The value can
be any data type (numbers, strings, functions, arrays, objects, anything).

### this

When a function is the value in an object, it is typically referred to as
a method of that object. There will be times when you will want a method to refer
to the object it belongs to. The keyword `this` exist in every function and it
evaluates to the object that the method is being called on. If that sounds
abstract, let's look at an example:

```js
var spaceship = { fuel : 100 };

// I want to write a function called 'fly', that will fly if there's enough fuel
// or print an error message if there isn't

spaceship.fly = function() {
  if (this.fuel >= 50) {
    this.fuel -= 50;
    return "You have a calm flight..."
  } else {
    return "Sorry. Not enough fuel.";
  }
};

// Of course, we can write the method when we initialize the object

var spaceship1 = {
  fuel : 100,

  fly  : function() {
    if (fuel >= 50) {
      fuel -= 50;
      return "You have a calm flight..."
    } else {
      return "Sorry. Not enough fuel.";
    }
  }
}
```

Why are objects useful? With them, the structure of our data can match our
semantic understanding of their relationships. This helps manage the complexity
of keeping related data together and makes it easier to reason about the
correctness of our programs.

## Useful Methods

* `Object.prototype.keys()`
* `Object.prototype.values()`
* `for x in object ...` (loop)
