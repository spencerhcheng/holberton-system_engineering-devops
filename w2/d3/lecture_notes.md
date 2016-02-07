#Lecture Notes 8

## like Array, like String

## Why is style important?

Your code will be read by the computer, the programmer, and often times other people
who will maintain your code. Good code style promotes correctness and reasonability
of our programs. The more readable our program is, the higher the chance that it will
be properly executed by the computer.

When we are talking about larger scale programs, you will often have to write code that
can be read by other people. The readability of your code will directly effect your
ability to get into a bootcamp and a job.

The style conventions of a language are called it's idioms. You always want to follow
the idioms of a language you're working in because (1) they are often motivated by the
making the resulting code less error prone and (2) they are industry standards and will
make your code more readable for other developers (and yourself).

Good code should almost read like English.

## JS Style Guidelines

Every organization has their own set of style guidelines. Below are some of the most
common, and those I expect you to follow during the remainder of the course:

* Always use semi-colons
* Use camelCase for variable naming

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
