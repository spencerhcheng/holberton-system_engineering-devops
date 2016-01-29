# Lecture Notes 1

## JavaScript Environment

JavaScript runs in 2 main environments: the browser and Node. Using the browser involves more than just understanding JavaScript, but also HTML, CSS, and familiarity with the browser environment. Running our code in the Node environment will allow us to focus purely on learning JavaScript.

So what is Node exactly? The [website](https://nodejs.org/en/) has a pretty good description. But the gist is that it is a way of running JavaScript outside of the browser environment.

Go to the website and download Node if you haven't already. After you've downloaded it, open your terminal/command prompt and type:

```
current/directory $node
> console.log("Hello World");
```
If it prints `Hello World`, then congratulations. Time to learn JavaScript.

## JavaScript Data Types

Before we start manipulating data, we first have to know what kinds of data we can manipulate. JavaScript provides 5 primitive data types for us:

* Numbers
* String (text)
* Boolean
* Undefined
* Null

We can group primitive data into composite forms, but that's another day.

### Declaring Variables

In JavaScript, in order to use a variable, we must declare it. Variable
declaration is the act of introducing the variable to the environment. When we declare
a variable, we will often initialize it to a value.

To declare a variable, use the `var` keyword, followed by a space and then the name of the variable.

```javascript
var myVar;
```

To initialize it to a value, simply assign the variable to a value when you
declare it. Say, for instance, that we wanted `myVar` to equal the number 5:

```javascript
var myVar = 5;
```

Now it is time to experiment. Open your Terminal/Command Prompt and type the following:

```javascript
$ node
> myVar

//since we have not declared myVar, you'll see an error message

> var myVar;
undefined

> myVar // We can use myVar without error because we declared it.
undefined // Evaluates to undefined because we did not initialize myVar to any value.

> myVar = 5;
5

> myVar + 2 // What will this evaluate to?

// We can also declare and initialize a variable on the same line.

> var myOtherVar = "Anthony";
"Anthony"

> "Hello " + myOtherVar; // What will this evaluate to?
```

## Useful Methods

### Mathematical Operators

* `+`
* `-`
* `*`
* `/`
* `%` (modulus)

### Comparison Operators

* `>`
* `<`
* `>=`
* `<=`
* `===`
* `!==`

### Logical Operators

* `&&`
* `||`
* `!`

### String Methods

* `String.prototype.toLowerCase`
* `String.prototype.toUpperCase`
* `String.prototype.indexOf`
* `+`

## Creating a Function

We are able to create our own custom functions too. Let's say we wanted to create a function called `addThree`. The specification of this function describes it as taking as an input any three numbers and returning as the output the sum of those numbers. For example:

```
> addThree(1, 1, 1)
3
> addThree(0, 1, -15)
-14
> addThree(5, 100, 30)
135
```

The syntax for defining a function is as follows:

```
function nameOfFunction(param1, param2, param3, paramN){
  //function body...
}

OR

var nameOfFunction = function(param1, param2, param3, paramN){
  //function body...
}
```

Let's see how we would define our `addThree` function.

```
function addThree(number1, number2, number3){
  return number1 + number2 + number3;
}
```

The `return` keyword is used to actually return a value from the function. If a function doesn't return anything explicitly, then it implicitly returns `undefined`.
