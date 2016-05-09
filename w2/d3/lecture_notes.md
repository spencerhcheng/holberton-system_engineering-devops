#Lecture Notes 8

## like Array, like String

Arrays and Strings have more in common than you may think. Several earlier (and
lower level) programming languages implemented Strings as Arrays, where each
character is an element in the Array. While this doesn't directly apply to
JavaScript in the same way (i.e. this is no Character data type), it does provide
an explanation as to why Arrays and Strings share many of the same methods:

* `indexOf`
* `concat`
* `slice`
* `[]` - indexing

## Why is style important?

Your code will be read by the computer, you (the programmer), and often times
other people who will maintain your code. Good code style promotes correctness
and the readability of our programs. The more readable our program is, the higher
the chance is that it will be properly executed by the computer.

When we are talking about larger scale programs, you will often have to write code that
can be read by other people. The readability of your code will directly effect your
ability to get into a bootcamp and a job.

The style conventions of a language are called its idioms. You always want to follow
the idioms of a language you're working in because (1) will help you write less error-prone code and (2) they are industry standards and will make your code more readable for other developers (and yourself).

Good code should almost read like English.

## JS Style Guidelines

Below are some of the most common JavaScript style conventions. We expect you to follow them from now on..

* Always use semi-colons.
* Use camelCase for variable naming.
* Use the strict equality operator `===`, not the equality operator `==`.
* Always use `var` to declare a variable.
* Indent blocks of code (i.e. lines of code wrapped by a pair of curly brackets, `{}`).
* Use blank lines to set off sections of code that are logically related.
* Follow commas by a space (eg. `[0, 1, 2]` not `[0,1,2]`).
* When calling a function, do not use a space to separate the function name and the pair of parenthesis (e.g. `foo()` not `foo ()`).
* Be consistent.

## The Art of Debugging

* Read the error message
  - The filename
  - The line number
  - Type of error
  - Stack Trace
    * Start from the top
    * Keep going to a deeper level until you see you filename that looks familiar    
* Common Mistakes
  - `=` or `===`
  - Accidental `undefined` or `Nan`
  - Check the scope of your variables
* If you can't figure it out, refactor your code. Make it more readable. Decompose your methods.
* Logic Errors
  - use `console.log`
  - Ask questions about state
  - Test your assumptions

## Common JS Errors

* ReferenceError: `x` is not defined
* TypeError: Cannot read property `x` of `object`
* SyntaxError: Unexpected token `x`
