# Lecture Notes 9

## What is Scope?

## The Global Scope

In both of the main JavaScript environments (browser and node), everything exists
in whats called 'the global object'. To understand this, let's think about a plain
old object:

```
var scope = {};
{}
```

I can create key-value pairs where the value is of any data-type. Let's create a
function (method) in the object:

```
scope.myFunc = function(){
  console.log("This is my func");
};
```

Now is I write `scope.myFunc = 1;`, I have clearly overwritten the function I
created before. The global scope works similarly. *Every variable that is
declared outside of a function/method becomes a method on the global object.*
Let's see an example of this. Open up your node console and type `global`. This
keyword evaluates to the global object. (In the browser environment, the global
object is called `window`). Let's see how things become attached to the global
scope.

```
> global.myVar
undefined

>var myVar = 12;
undefined

>myVar
12

>global.myVar
12
```

When we declare variables outside of a function, aka in the global scope, they
become properties of the global object.


## Importance of `var`

You may have noticed that the `var` keyword is optional. If not, go ahead and try
to initialize a variable without using it.

```
>myOtherVar = "no var";
undefined

>myOtherVar;
"no var"

>global.myOtherVar
"no var"
```

So why would we ever use `var`? Because if we don't, the variable will default
to the global scope. The implications of this become much more apparent when we
understand function scope.

## Function Scope

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
```

It also means that is a variable name in a function is the same name as a
variable in an outer scope, the variable in the outer scope won't be overwritten.



## The scope of this

## Common JS Gotchas
