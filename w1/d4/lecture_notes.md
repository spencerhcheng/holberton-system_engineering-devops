# Lecture Notes 4

## What is an Object?

An object is a data structure that stores other data, like an array. Objects
associate keys with values. The keys are always strings. The value can be any
data type (numbers, strings, functions, arrays, objects, anything).Objects,
however, differ from arrays in two important ways:

* Instead of indexing with numbers, objects are indexed with keys (strings).

* Order is not guaranteed. When you iterate through the elements in an object,
they may not be in the same order they were entered in. Like arrays, the only
way to access the value in an object is through indexing.

Objets are defined by curly brackets `{}`. Open up the console and let's make
some objects.

```
> var dog = {};
undefined

> dog
{}
```

We can create new key-value pairs using bracket notation `[]`:

```
> dog["name"] = "Rover";
'Rover'

> dog["type"] = "Husky";
'Husky'

> dog["name"]
'Rover'

> dog["type"]
'Husky'
```

We can also use what's called dot notation `.` to set up our key-value pairs:

```
> dog.bark = "Bowowowo";
'Bowowowowo'

> dog.bark
'Bowowowo'

> dog
{ name: 'Rover', type: 'Husky', bark: 'Bowowowowo' }

> dog.name
"Rover"
```

You need quotation marks when using bracket notation:

```
> dog[name]
Error message...

> dog["name"]
"Rover"

> name
Error Messages...
```

We can also create the entire object in a single statement.

```
> var dog2 = {
... name : "Silver Fang",
... type : "Wolf",
... bark : "Rawrrrr"
... };
undefined

> dog2
{ name: 'Silver Fang', type: 'Wolf', bark: 'Rawrrrr' }

> dog2.name
'Silver Fang'

> dog2["type"]
'Wolf'
```

### method vs function

A method is essentially a function that belongs to an object. It is referred to
as a method of that object.

`myObject.myFunc` - `myFunc` is a method of `myObject`

`myFunc` - `myFunc` is a function

### this

When a function is the value in an object, it is typically referred to as
a method of that object. There will be times when you will want a method to refer
to the object it belongs to. The keyword `this` exist in every function and it
evaluates to the object that the method is being called on. If that sounds
abstract, let's look at an example:

```
var spaceship = { fuel : 100 };

// I want to write a function called 'fly', that will fly if there's enough fuel
// or print an error message if there isn't

spaceship.fly = function(){
  if(this.fuel >= 50){
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
    if(fuel >= 50){
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

* `for x in object ...` (loop)
* `typeof`
