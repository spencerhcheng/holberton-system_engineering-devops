### Read These Programs

```javascript
var foo = 5;

function bar(){
  var foo = "Anthony";
  foo + " is home";
  return foo;
}

console.log(foo); //What is foo on this line?
console.log(bar()); //What is bar() on this line?
console.log(foo); //What is foo on this line?
```
-------------------------------------------------------------------------------
```javascript
var foo = 5;

function bar(foo){
  return foo + 65;
}

console.log(foo); //What is foo on this line?
console.log(bar(5)); //What is bar() on this line?
console.log(foo); //What is foo on this line?
console.log(bar(5)); //What is bar() on this line?
```
-------------------------------------------------------------------------------
```javascript
var foo = "Happy";

for(var foo = 0; foo <= 5; foo += 1){
  console.log(foo); //What will foo be on each iteration?
}

console.log(foo); //What will foo be on this line?
```
-------------------------------------------------------------------------------
```javascript
var bar = 5;
console.log("1: " + bar); //1: What will bar be on this line?

function foo(){
  var bar = 10;
  console.log("3: " + bar); //3: What will bar be on this line?

  var innerFoo = function(){
    bar = 15;
  }

  console.log("4: " + bar); //4: What will bar be on this line?
}

console.log("2: " + bar); //2: What will bar be on this line?
foo();
console.log("5: " + bar); //5: What will bar be on this line?
```
-------------------------------------------------------------------------------
```javascript
var bar = "dance";

function foo(){
  bar = 10;

  var innerFoo = function(){
    var bar = 15;
  }

  console.log("2: " + bar); //2: What will bar be on this line?
  innerFoo();
  console.log("3: " + bar); //3: What will bar be on this line?
}

console.log("1: " + bar); //1: What will bar be on this line?
foo();
console.log("4: " + bar); //4: What will bar be on this line?
```

## Factorial

Write a function `factorial(n)`, that returns the factorial of the number `n`.
Example: factorial(4) => 4 * 3 * 2 * 1 => 24

```
> factorial(1)
1

> factorial(4)
24

> factorial(5)
120

> factorial(10)
3628800
```

# Long Word Count

Write a function `longWordCount(string)` that takes in a string and returns the
number of words longer than 7 characters.

```
>longWordCount("")
0

>longWordCount("short words only")
0

>longWordCount("one reallylong word")
1

>longWordCount("two reallylong words inthisstring")
2

>longWordCount("allwordword longwordword wordswordword")
3

>longWordCount("seventy schfifty five")
1
```

# Least Common Multiple

Write a function `lcm(num1, num2)` that returns the lowest number which is a
multiple of both inputs

```
>lcm(2, 3)
6

>lcm(6, 10)
30

>lcm(24, 26)
324
```

# Hipsterfy
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

```
>hipsterfy("proper")
"propr"

>hipsterfy("proper tonic panther")
"propr tonc panthr"

>hipsterfy("towel flicker banana")
"towl flickr banan"

>hipsterfy("runner anaconda")
"runnr anacond"

>hipsterfy("turtle cheeseburger fries")
"turtl cheeseburgr fris"
```
