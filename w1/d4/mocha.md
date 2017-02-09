## You down with TDD? (Test Driven Development)

So far we have been typically testing our code by calling a function and seeing what it returns using `console.log`.

```
function isEven(num) {
  return num % 2 === 0;
}

var result = isEven(5);
console.log(result);

//or
console.log(isEven(5));

```

Testing code for correctness is important! In the example above we expect our function to give a particular output (return value) when given
a particular set of inputs (arguments). In the the case of `isEven`, we expect an input of `5` to give us an output of `false` (because 5 is
an odd number!). See this test below.
```
isEven(5); //=> false
```

As you work the problem sets, you have may have noticed that every problem has examples of how your function should behave. You should
keep these examples in mind because they are your goal. You should be asking yourself, "How can I write a function that behaves in this way?"
Programmers do this all the time! In particular we call this **Test Driven Development** (TDD). All this means is that the tests we are trying 
to satisfy will dictate how we write the code.

## Mocha
[Mocha](https://mochajs.org/) is a testing framework that we will use to check if our JavaScript code is working properly quickly, without having to
fiddle around and explicity call our own functions. In Bootcamp Prep, we will be using Mocha to test assessments. Using Mocha, we can get
instant feedback on whether or not the functions we write are correct.

### Installing Mocha

To install mocha, run this in your command line:

```
$ npm install --global mocha
```


To check if you have installed mocha properly, run :
```
$ mocha -V
```
If you see a number printed out, you are ready to rock!

For assessments and projects we will provide the mocha test cases, so you don't have to worry too much about them. More on this when we start
the cookieMonster project.



