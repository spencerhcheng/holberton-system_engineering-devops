# Lecture Notes 2

## Conditionals

A conditional is a statement that evaluates to wither `true` or `false`. We can
use conditionals to create branching logic within our program and solve more
complex problems. Which of the following statements are conditionals:

*  `I am tall.`
*  `Go sit down.`
*  `Do you want to go to the store?`
*  `Why did the sun set?`

### if statements
Conditionals are primarily utilized within `if-then` statements. The basic
structure is:

```
if(conditional){
  //do something...
} else {
  //do something else...
}
```

We can also use `else if` if there are several conditionals that lead to many
different branches of logic:

```
if(conditional1){
  //do something...
} else if(conditional2) {
  //do something else...
} else {
  //do this is no conditionals are true...
}
```

What will the program below print to the console:
```
if(1 + 2 == 3){
  console.log("Branch 1");
} else {
  console.log("Branch 2");
}
```

## Looping

A common maneuver in programming is to do a task over and over again. Say, for instance, our program is printing a range of numbers onto the screen. We could write code that looks like this:

```
function print10(){
  console.log(0);
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8);
  console.log(9);
}
```

But what if I wanted to print numbers up to five, or seven? I'd have to write
new functions just for those numbers. This function isn't dynamic, and for very
large numbers (like 2 million) it becomes unfeasible to write by hand. The
programmers of old developed a construct that we can use called a loop. In
essence, a loop allows us to run code repeatedly *in a loop* until we tell it to stop. **Failure to terminate a loop will result in the deadly infinite loop.**

Loops come in several flavors. The most common in JavaScript are the `for` loop and `while` loop.

### for loop

The structure of a `for` loop is as follows:

```
for([initialization]; [conditional]; [iterator]){
  //do something...
}

for(var i = 0; i < 10; i += 1){
  console.log(i)
}
```

* `[initialization]` - This is where you initialize a variable that will be used as the counter. This counter will be updated in the iterator and checked in the condition.
* `[conditional]` - If it evaluates to true, we do another loop. If false, we don't.
* `[iterator]` - This is evaluated after every iteration of the loop. **This step should bring the counter that was created in the `[initialization]` closer to a `[conditional]` that evaluates to false**

Which loops are well-formed:

```
A)
for(var i = 0; i < 200; i -= 1){
  //some code...
}

B)
for(var i = 2; i > 40; i += 1){
  //some code...
}

C)
for(var i = 32; i >= 2; i -= 1){
  //some code...
}


D)
for(var i = 1; i == 20; i += 2){
  //some code...
}
```

### while loop

```
while([conditional]){
  //do something...
}

var i = 0;

while(i < 10){
  console.log(i);
  i += 1;
}
```

* `[conditional]` - If it evaluates to true, we do another loop. If false, we don't.

With these new constructs in our toolbelt, we can fix the problems with our
earlier `print10` function.

```
function printN(n){
  var i = 0;

  while(i < n){
    console.log(i);
    i += 1;
  }
}
```

Can you write this using a `for` loop.

### Looping Keywords

* `break` - Terminates the loop.

* `continue` - Skips the current loop iteration.

If we wanted to change our `printN` function so that it skipped multiples of 5,
we could write:

```
function printNSkip17(n){
  var i = 0;

  while(i < n){
    if(i % 17 === 0){ continue; }

    console.log(i);
    i += 1;
  }
}

function printNStop17(n){
  var i = 0;

  while(i < n){
    if(i % 17 === 0){ break; }

    console.log(i);
    i += 1;
  }
}
```
