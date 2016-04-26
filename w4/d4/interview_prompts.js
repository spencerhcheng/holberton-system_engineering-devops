/*
### INSTRUCTIONS
#
# Welcome to the App Academy technical interview. Over the next 45 minutes, you
# will be given a series of three programming questions. For each question, you
# will have 15 minutes to write a solution in Ruby, Python, JavaScript, Perl,
# PHP, or Java. We accept partial solutions, and overall logic is more important
# to us than exact syntax, so try not to stress if your solution is incomplete
# or imperfect. Take a deep breath and focus on your approach to the next
# problem.
#
# Talk us through your approach as you work through the problem.  We need to know
# how you communicate the way that you solve problems.  Some people prefer to talk
# while they come to a solution, while other people prefer to walk us through
# after they've done a bit of work.  Either way is fine.
#
# We want to evaluate you on your own work, so the interview is closed-book. You
# are not permitted to consult any outside sources: don't ask others for help,
# search the web for solutions, or refer to any notes or code you may have
# written previously. Don't run your code in any REPL or interpreter, and don't
# share these questions or your solutions with anyone else (even anonymously).
# We take cheating very seriously, and violation is grounds for rejection or
# dismissal from the course.
#
# That said, you may ask your interviewer any questions you might have. We are
# more than happy to help clarify the question or let you know the right syntax
# for the language you're using.
#
# Good luck!
*/

/******************************************************************************
Write a function concatSandwich(word) which takes a string `word` and returns a
function that takes three string arguments and returns `word` concatenated between
the three arguments with spaces separating them.

Example:
> var tofuSandwich = concatSandwich("Tofu");

> tofuSandwich;
[Function]

> tofuSandwich("Hello", "Hey", "Bye");
"Hello Tofu Hey Tofu Bye"
******************************************************************************/

// code goes here

/******************************************************************************
Write the function countAdjacentSums(arr, n) which takes an array and number.
It should count the number of times that two adjacent numbers in an array add up
to n. Use Array#forEach.

Examples:
> countAdjacentSums([1, 5, 1], 6)
2

> countAdjacentSums([7, 2, 4, 6], 7)
0

> countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)
3
******************************************************************************/

// code goes here

/******************************************************************************
Isogram Matcher

An isogram is a word with only unique, non-repeating letters.

Given two isograms of the same length, return an array with two numbers
indicating matches: the first number is the number of letters matched in both
words at the same position, and the second is the number of letters matched in
both words but not in the same position.

Examples:
console.log(isogramMatcher("an", "at")) // [1, 0]
console.log(isogramMatcher("or", "go")) // [0, 1]
console.log(isogramMatcher("cat", "tap")) // [1, 1]
console.log(isogramMatcher("home", "dome")) // [3, 0]
console.log(isogramMatcher("ultrasonic", "ostracized")) // [3, 4]
console.log(isogramMatcher("unpredictably", "hydromagnetic")) // [1, 8]
******************************************************************************/

// code goes here
