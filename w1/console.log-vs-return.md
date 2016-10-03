# `console.log` vs `return`

##### Students will nearly always confuse these terms. If they seem like magic, consider reading this.
<br>

Here's a little table showing differences between `console.log` and `return`:


<x>         |console.log         | return
-----------|--------------------|------------------------
_Takes an<br>expression,<br>evaluates it and_| prints it           | returns it from<br> a function
_is a_  | function | key word
_can be_ | anywhere | only inside<br>a function
_exits the current<br>function?_ | No | Yes
_Used for displaying<br>something_ | Yes | No

<hr>

If we type this expression, we won't see anything:
```javascript
5 * 3
```

However in the Node __REPL__, which evaluates _and prints_ every statement, we would see this:
```javascript
> 5 * 3
15
>
```
`console.log` takes an argument and prints it, like so:

```javascript
console.log("Dude!"); // we see "Dude!" printed.
```

`console.log` evaluates its argument before printing it:


```javascript
console.log(5 * 3); // we see 15, not "5 * 3"
```
We can even call a function inside of console.log's argument-accepting parenthesis:

```javascript
function five(){
  return 5;
}    
console.log(five());               // We see 5 printed.
console.log(five() + five() + 10); // Basically graduate-level math.
```
A function invocation is an _expression_ and will be evaluated, whereupon its return value will be passed to `console.log`.

If a function doesn't return anything, then by default it returns `undefined`. This is why we see both __2__ and `undefined` in this __REPL__ example:

```javascript
>console.log(2);
2
undefined
>
```

>##### Here's a detailed explanation:
>1. `console.log(2)` is evaluated; first,
  - the argument, `2`, evaluates to itself
  - `2` is then passed to console.log
2. `console.log` prints `2`
  - `console.log` always returns `undefined`
  - since this in the __REPL__, `console.log`'s return value will be evaluated and printed
4. The __REPL__ prints `console.log`'s return value: `undefined`

So basically...
# We use console.log to __print__ something.
#### Now, about `return`:

`return` simply causes Javascript to leave a function. When a function is being executed, and Javascript encounters `return`, Javascript will immediately exit from the function and resume immediately after wherever the function was called. Return may also evaluate an expression and bring its value back along with it.

```javascript
function six(){
  return 6;
  console.log("haha, this function is silly!");
}

six();        // It appears as if nothing happens.
              // However this expression evaluates to 6...
              // ... but we don't do anything with it, and
              // it then vanishes in a 'poof!' of computer-smoke.
```

In the above code, even though we call `six()`, we never see the message `"haha, this function is silly!"`. That's because the line with `return 6;` is executed _before_ the next line, which calls `console.log`. Because return causes us to leave a function (bringing 6 with it), we won't execute any more lines of code within the function `six`.

### Closing Remarks

- We use console.log __ONLY__ for __PRINTING__ things.
  - Basically, it's for debugging purposes only, such as for checking values or confirming functions work correctly.
- `console.log` is __NOT__ needed to call/run/execute a function. It's just used to __PRINT__ whatever a function call/invocation __RETURNS__ (_evaluates_ to).
- `return` is simple - it causes a function to end, and optionally brings an evaluated expression along with it, if an expression is provided.
  - If an expression isn't provided, such as calling just `return;`, or failing to call `return` at all, the function will (by default) return `undefined`.
- If a function _always_ returns a number, then that function invocation is interchangeable with a number.
  - Given: `function five(){ return 5; }`
  - `five()` may _always_ be used wherever a number could be.
  - The same goes for every other data type.
