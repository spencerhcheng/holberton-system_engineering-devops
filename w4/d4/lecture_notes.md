# Lecture Notes 21

## What is Test Driven Development (TDD)?

Test Driven Development is a unique way of writing code. Instead of jumping into a problem right away, you create tests for behavior or output you expect from your code. After your tests are finished, they will all fail (red). Then, you write the code so that the test cases are passed (green). Finally, you clean up your code and ensure that it is efficient and easy to understand (refactor). For this reason, this process is sometimes called red, green, refactor.

## Why use Test Driven Development?

There are many reasons to use Test Driven Development. First, it gives you a better understanding of the code you're going to write. Before you get caught up in a problem, you spend time thinking about your expectations of what you want to happen. Additionally, in many companies, tests are often neglected and thought to be unnecessary. By practicing TDD, companies can be confident in their codebase because it has been properly tested. And finally, you get immediate feedback on your code during development, to help find and fix bugs faster.

## Making Your First Tests

Let's say we want to make a function that will determine whether a number is prime or not. Take a look in `problem_set.js` and you will see we have already created the function definition for you, `isPrime(n)`. Now, before we get to work on our function, we need to write the tests for it. Spend some time thinking about possible input this function could take in, and what you would expect out of it. 

What is a prime number? According to Wikipedia, it is a number greater than 1 that has no positive divisors other than 1 and itself. That means that any number less than 2 will definitely not be prime. Let's write a test case.

````
var assert = require('assert');

var isPrime = require('../problem_set.js').isPrime;

describe('#isPrime()', function () {
	it('should return false for numbers less than 2', function() {
		assert.strictEqual(isPrime(1), false);
		assert.strictEqual(isPrime(0), false);
		assert.strictEqual(isPrime(-13), false);
		assert.strictEqual(isPrime(-953), false);
	});
});
````

Next, let's write a test cases for some numbers that are greater than 2, but not prime. These should all be false.

````
it('should return false for non-prime numbers greater than 2', function() {
	assert.strictEqual(isPrime(10), false);
	assert.strictEqual(isPrime(24), false);
	assert.strictEqual(isPrime(56), false);
	assert.strictEqual(isPrime(111), false);
});
````

Finally, let's write a test case for some prime numbers, which should return true.

````
it('should return true for prime numbers', function() {
	assert.strictEqual(isPrime(2), true);
	assert.strictEqual(isPrime(3), true);
	assert.strictEqual(isPrime(97), true);
	assert.strictEqual(isPrime(19087), true);
});
````

Now run your tests using Mocha. They should fail. Great! Let's complete our function `isPrime(n)`. Hopefully you remember it from earlier in the course.

````
function isPrime(n) {
	if (n < 2) {
		return false;
	}
	for (var i = 2; i < n; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}
````

Run your tests. Everything should pass. Hopefully you wrote a readable and efficient function so there is no need to refactor. If not, make sure to clean it up.

Time to get started on more tests. Here are some resources you might find helpful:  
[Mocha Documentation](https://mochajs.org)  
[Assert Documentation](https://www.npmjs.com/package/assert)  
[Video: Agile in Practice: Test Driven Development](https://www.youtube.com/watch?v=uGaNkTahrIw)  
[Video: What is test-driven development (TDD)? | lynda.com](https://www.youtube.com/watch?v=QCif_-r8eK4)  
[Video: Common questions and concerns | lynda.com](https://www.youtube.com/watch?v=B6xhmya6Mo8)