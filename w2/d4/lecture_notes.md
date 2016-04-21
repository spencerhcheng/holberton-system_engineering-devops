# Lecture Notes 9

### Scope
### What is Scope?

A **scope** is a section in your program where a name binding is considered valid. A
*name binding* is when a variable (a name) evaluates to a certain value. If I
declare `var myName = 20;`, this binding will only be valid in the scope where
I declared it.

New scopes can be created inside of other scopes. An inner scope has access to
bindings that were declared in the outer scope, but the outer scope *does not*
have access to the bindings declared in its inner scopes. If this sounds confusing,
read the next three sections, then come back to this section.

### The Global Scope

In both of the main JavaScript environments (browser and node), everything exists
in what's called 'the global object'. To understand this, let's think about a plain
old object:

```javascript
var scope = {};
```

I can create key-value pairs where the value is of any data-type. Let's create a
function (method) in the object:

```javascript
scope.myFunc = function(){
  console.log("This is my func");
};

scope.myFunc()
// What does this output?
```

Now if I write `scope.myFunc = 1;`, I have clearly overwritten the function I
created before.

```javascript
scope.myFunc = 1;

scope.myFunc;
// What does this output?
```

The global scope works similarly. *Every variable that is
declared outside of a function/method becomes a property on the global object.*

Let's see an example of this. Open up your node console and type `global`. This
keyword evaluates to the global object. (In the browser environment, the global
object is called `window`). Let's see how things become attached to the global
scope.

```javascript
> global.myVar
undefined

> var myVar = 12;
undefined

> myVar
12

> global.myVar
12
```

When we declare variables outside of a function, aka in the global scope, they
become properties of the global object.


### Importance of `var`

You may have noticed that the `var` keyword is optional. If not, go ahead and try
to initialize a variable without using it.

```javascript
> myOtherVar = "no var";
undefined

> myOtherVar;
"no var"

> global.myOtherVar
"no var"
```

So why would we ever use `var`? Because if we don't, the variable will look up
the scope chain for the binding, or until it hits the global scope. The
implications of this become much more apparent when we understand function scope.

### Function Scope

JavaScript has function scope, which means that every time we create a new
function, we also create a new scope. I can create two functions and declare the
same variable names in them without worrying about overwriting one of the
variables:

```javascript
function func1(){
  var name = "Anthony";
  console.log("Hello, " + name);
}

function func2(){
  var name = "Bammsie";
  console.log("Hello, " + name);
}

func1(); // What does this output?
func2(); // And what does this output?
```

It also means that if a variable name in a function is the same name as a
variable in an outer scope, the variable in the outer scope won't be overwritten.

```javascript
var myVar = 20;

function foo(){
  var myVar = 2;
  return myVar + 5;
}

console.log(foo());
console.log(myVar);
```

However, if we neglect to use `var`, we will overwrite the variable in the outer
scope.

```javascript
var myVar = 20;

function foo(){
  myVar = 2;
  return myVar + 5;
}

console.log(foo());
console.log(myVar); // What does this output?
```

### Polluting The Global Namespace

If we don't have any global variables (which we should avoid as much as possible),
you may be asking yourself if using `var` in functions is still necessary?
Yes, it still
is.

JavaScript has a single global scope, which means all of the files from your
projects and any libraries you use will be sharing the same scope. Every time a
variable is declared on the global scope, the chance of a name collision increases.

We often don't know all of the code that goes into a library, so our job is to
limit the number of globally declared variables in our code as much as possible,
to avoid accidental collisions.

* If we don't use `var` in our functions, we are *polluting* the global namespace.
* Every time we declare a function globally, we are *polluting* the global namespace.

We'll talk about some techniques to mitigate this later in the course, but for
now it is enough to know about this risk.

### The Scope of `this`

Functions and methods are objects, which means they can be passed around without
being called. This feature of JavaScript has implications for how we think about
`this`. What will the following program do?

```javascript
var myObj = {
  name : "Markov",
  sayHi : function(){
    console.log(this.name + " says Hi.");
  }
};

var myFunc = myObj.sayHi; // not calling sayHi

myFunc(); // What does this output?
```

If you run this code, you'll see that it prints `undefined says Hi.`. Why is
that? Let's remember what `this` evaluates to: the object that is calling the
function. When we assign the method to a variable, we detach it from the
object. Therefore, when we call it and it evaluates `this`, it no longer
references its original object, so what does it reference...?

* A function/method (`myFunc`) that is called like `someObj.myFunc()`, the `this`
will reference `someObj`.

* A function (`myFunc`) that is called like `myFunc()`, the `this` will
reference the global object.

Let's attach a `name` to the global object and try to run the earlier code again.

```javascript
var myObj = {
  name : "Markov",
  sayHi : function(){
    console.log(this.name + " says Hi.");
  }
};

var myFunc = myObj.sayHi // not calling sayHi

var name = "Bill";

myFunc(); // What does this output?
```
