var obj = {
  name: "Sunny",
  meth: function () {
    console.log(this);
  }
}

/*
above I've declared an object called `obj`.
obj has two key-value pairs:
1) key `name` and a string value "Sunny"
2) key `meth` and a function value

both of these statements about `obj.meth` are true
1) obj.meth is a function.
2) obj.meth is a method.

RECAP: methods are functions declared inside an object.
*/

// uncomment the line below
// console.log(obj.meth); // don't believe me? what does this return?

/*
`obj.meth` is a function with 0 arguments.
The function body consists of 1 line of code: `console.log(this);``

ok now what happens when I call `obj.meth`?
What would we see printed to the screen?
In other words, what would `this` evaluate to?

RECAP: the keyword `this` exist in every function
and it evaluates to the object that the method is being called on.

"it evaluates to the object that the method is being called on."
wait, what does this mean?

for example, what happens when we call `obj.meth`?
*/

// uncomment the line below
// obj.meth(); // what is printed to the screen?

/*
`{ name: 'Sunny', meth: [Function] }` is printed to the screen.
that looks familiar... that's our `obj` object!
It's also the thing that appeared on the left-hand side of the period on line 40.

in this example `this` evaluated to `obj`.
obj is simply the object we declared at the beginning.

there are two ways for you to think about this:
  - it evalutes to the object that the method is being called on
  - it evallutes to the object that appeared on the left-hand side of the period

you should 100% aspire to define this using the 1st definition
but if it's hard for you to think about, you can try using the 2nd definition at first
*/

// uncomment the 3 lines below
// obj.meth = function () { // let's redefine our method meth
//   console.log(this.name);
// }

/*
ok now `obj.meth` is a function with 0 arguments.
the function body consists of 1 line of code: `console.log(this.name);`

ok now what happens when I call obj.meth?
what would we see printed to the screen?
in other words, what would `this.name` evaluate to?

well first what does `this` evaluate to?
if you're not sure please look at the section above...

ok so `this` evalutes to the object `obj`.
given the object `obj` what does `obj.name` evaluate to?
thus what does `this.name` evaluate to?
the same thing! the string "Sunny"
*/

// uncomment the line below
// obj.meth(); // double check me

/*
let's take this to next level
*/

// uncomment the line below
// var foo = obj.meth;

/*
above I've initialized a function foo
and assigned it to the value return by obj.meth.
this is the equivalent code:

var foo = function () {
  console.log(this.name);
}

to clarify, foo is a function but it is not a method.
it is not a method because it is not a function defined in an object.

what happens when I try to run foo?
will it throw an error?
print "sunny" to the screen?
*/

// uncomment the line below
// foo(); // try it!

/*
it prints `undefined` to the screen

why does calling `foo` print `undefined` to the screen...?
well the function body consists of 1 line of code: `console.log(this.name);`
what does `this` evaluate to when we call foo?
in other words, what's the object that the method is being called on?
in other other words, what's the object that appears on the left-hand side of the period?

wait what period?? what object?? the global object!

RECAP: every variable that is declared outside of a function/method
becomes a property on the global object.

foo is a method on the global object.
however it's awkward to think about the global object
*/

// uncomment the 2 lines below
// global.name = "Tofu";
// foo(); // what does this return now? why?

/*
make sure you understand why! if not, revisit the lecture and problems from
w2d4 when we talked about scope.
*/

/*
if you're following, let's take this to the next next level

what if when we declared `foo`
and assigned it to the function returned by `obj.meth`
we wanted every function call of `foo` to evalute to "Sunny"?

in other words, we want `this` to evaluate to `obj`
and `this.name` to evaute to `obj.name`?

how do we do this? we must bind the correct `this` to the function!
*/

// uncomment the line below
// var bar = obj.meth.bind(obj); // let's try again

/*
RECAP: `Function.prototype.bind(thisContext)`
`bind` is a method that exists on every function
and the argument we pass in as `thisContext` will
be what `this` evaluates to when the function is called.

in the example above, this means that whenever we call the
function `bar`, `this` will evaluate to the argument passed
into the bind call. in this case, it's `obj`, the object
we declared at the very beginning!
*/

// uncomment the line below
// bar(); // what does this call print now? why?
