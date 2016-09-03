# Pokemon Part 2

Now that we have our `Pokemon` class, let's create a Battle class and battle our pokemon!

#### Modules

So far, we've written all of our code in single files. But let's learn how to split code up into Node **modules**, which will allow us to use code written in other files. Let's see an example of what I'm talking about:

```js
// cat.js
function Cat () {
  // ...
};

Cat.prototype.meow = function () {
  console.log("meow");
};

module.exports = Cat; // exports the Cat class
```
```js
// dog.js
function Dog () {
  // ...
};

Dog.prototype.bark = function () {
  console.log("woof");
};

module.exports = Dog; // exports the Dog class
```

There are two files: `cat.js` and `dog.js`. In `cat.js`, I define a `Cat` class with a `meow` method. Similarly, in `dog.js`, I define a `Dog` class with a `bark` method.

I *export* both classes using `module.exports`.

```js
// animals.js
var Cat = require("./cat");
var Dog = require("./dog");

var cat = new Cat();
var dog = new Dog();

cat.meow();
dog.bark();
```
I *import* them using `require` into a third file `animals.js`.

Node uses `require` to allow one JavaScript file to load a second JavaScript file. `module` is a pre-defined variable set up by Node, and its `exports` property is returned whenever we `require` it from another file. When a file is `require`d, Node loads and executes its code.

Let's take a closer look at our example. `cat.js` exports the `Cat` constructor function by setting `module.exports = Cat`. `animals.js` calls `var Cat = require("./cat")` to save the `Cat` class to a variable to use. We use the same pattern to export and import our `Dog` class from `dog.js` to `animals.js`. This pattern is key to understanding and using Node modules.

### Phase 0

Let's export our `Pokemon` class. Add `module.exports = Pokemon` at the end of your Pokemon class file. Create a new file in the same directory called `battle.js` and add `var Pokemon = require("./pokemon")`.

To test if you've exported and imported your `Pokemon` class correctly, try creating a few pokemon.

```js
// pokemon.js
function Pokemon () {
  // ...
}

module.exports = Pokemon;
```

```js
// battle.js
var Pokemon = require("./pokemon");

var electricTypeMoves = [ {name: "Tackle", damage: 3}, {name: "Thunder Shock", damage: 4}, {name: "Charge Beam", damage: 5}, {name: "Thunder Wave", damage: 5}, {name: "Spark", damage: 7}, {name: "Thunder Punch", damage: 8}, {name: "Shock Wave", damage: 10}, {name: "Thunder Bolt", damage: 15 }, {name: "Thunder", damage: 20}, {name: "Zap Cannon", damage: 30}, {name: "Electric Beam", damage: 35} ];
var leafTypeMoves = [ {name: "Absorb", damage: 2}, {name: "Tackle", damage: 3}, {name: "Bullet Seed", damage: 4}, {name: "Mega Drain", damage: 6}, {name: "Vine Whip", damage: 8}, {name: "Razor Leaf", damage: 15}, {name: "Giga Drain", damage: 18 }, {name: "Seed Bomb", damage: 22}, {name: "Petal Dance", damage: 25}, {name: "Solar Beam", damage: 35} ];

// for testing
var pikachu = new Pokemon('pikachu', 'Electric', electricTypeMoves, 10);
var bulbasaur = new Pokemon('bulbasaur', 'leaf', leafTypeMoves, 11);

console.log(pikachu);
console.log(bulbasaur);
```

**NB**: If you have any code used for testing in your Pokemon class file, comment it out because when a file is `require`d, Node loads and executes its code.

### Phase 1

* Create a `Battle` class.
* Give it the instance variables: `pokemon1` and `pokemon2` and `turn`.

The constructor takes as arguments:
 + a `Pokemon` argument for `pokemon1`
 + a `Pokemon` argument for `pokemon2`

Initialize `turn` to `true`. It is a Boolean which we'll use to indicate whose turn it is. If it is `true`, it's `pokemon1`'s turn and if it is `false`, it's `pokemon2`'s turn.

```js
var battle = new Battle(pikachu, bulbasaur);
```

### Phase 2

Our `Battle` class is going to contain all of the logic involved in a simplified pokemon battle, including user input.

Let's write the methods:
- `Battle.prototype.fight`
- `Battle.prototype.potion`
- `Battle.prototype.run`
- `Battle.prototype.won`
- `Battle.prototype.results`

#### `Battle#fight`
  - If `turn` is `true`, it is `pokemon1`'s turn and it attacks `pokemon2`.
  - If `turn` is `false`, `pokemon2` attacks `pokemon1`.

Use the `Pokemon#attack(opponent, moveName)` method that you wrote. For now, just pass in the appropriate argument for `opponent` and nothing for `moveName`. Remember, if no move is passed in, the pokemon attacks with its strongest attack.

```js
> battle.fight();
PIKACHU attacked with Thunder Shock!
Damage to BULBASAUR: -4
PIKACHU hp: 22
BULBASAUR hp: 20
```
#### `Battle#potion`

`Battle#potion` increases the current pokemon's `hp` by `10`. Print to screen a message.

```js
> battle.potion();
Used potion on PIKACHU ( hp: 32 )!
```

#### `Battle#run`

Write a method `Battle#run` in which the current pokemon forfeits the battle by setting its `hp` to `0`. Print to screen a message.

```js
> battle.run();
PIKACHU ran ( hp: 0 )!
```

#### `Battle#won`
Next write a method `Battle#won`. Return `true` if either or both pokemon have fainted, and `false` otherwise. Check to see if a pokemon has fainted using your `Pokemon#faint` method.

```js
> battle.won();
true
```

#### `Battle#results`
Write a method `Battle#results`. It prints to the screen the name of the winning pokemon (the pokemon with the higher hp) and its call.

```js
> battle.results();
Winner: BULBASAUR
BULBA-BULBA
```

### Phase 3

#### `readline` Library

Ok now that we have our battle functionality done, let's get some user input! We'll do this but using the `readline` library. Here's the [documentation](https://nodejs.org/api/readline.html) and here's an example:

```js
// test.js
var readline = require('readline');

var reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

reader.question("What's your name?", function (answer) {
  console.log("Hello " + answer + "!");
});

console.log("Last program line");
```

The `question` method takes a prompt (`"What is your name?"`) and a callback. It will print the prompt, and then ask Node to read a line from stdin. `question` is asynchronous; it will not wait for the input to be read and will return immediately. When Node has received the input from the user, then it will call the callback we passed to `reader.question`.

Let's see it in action:
```
~/Desktop$ node test.js
What is your name?
Last program line
Anthony
Hello Anthony!
```

Notice that because `reader.question` returns immediately and does not wait, it prints `"Last program line"` before I get a chance to write anything. Notice also that I don't try to save or use the return value of `reader.question`: that's because this method does not return anything. `reader.question` cannot return the input, because the function returns before I have actually typed in any input. _Asynchronous functions do not return meaningful values: we give them a callback so that the result of the async operation can be communicated back to us._

Lastly, note that our program didn't end when it hits the end of the code. It patiently waited for our input. That's because Node understands that there is an outstanding request for user input. Node knows that the program may not be done yet: anything could happen in response to that input. So for that reason, Node doesn't terminate the program just because we hit the end of the source file. If we want to stop accepting input, we have to explicitly call `reader.close()`. Let's fix our example so that it does this:

```js
var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question("What is your name?", function (answer) {
  console.log("Hello " + answer + "!");

  // Close the reader, which will allow the program to end
  // because it's no longer waiting for any events.
  reader.close();
});

console.log("Last program line");
```

#### `Battle#promptUser`

Require `readline` and define `reader` like we did in the example above.

Next write a method `promptUser` which calls `reader.question`. Pass it the prompt `"Select 'a' for attack, 'p' for potion, 'r' for run: "` and a callback function. The callback takes an argument `userInput` and calls the method `Battle#makeMove` passing it the `userInput` as an argument.

#### `Battle#makeMove`

This method is going to interpret what a user types to the console, in other words it'll interpret the argument passed in. If the argument is `'a'` call your `Battle#fight method`, `'p'` call `Battle#potion` and `'r'` call `Battle#run`. Next check if anyone has won using your `Battle#won`. If someone has, print out the results and close the reader. Otherwise, update turn and call `Battle#promptUser`.

### Phase 4

Write a method `Battle#play` which calls `Battle#promptUser`. Let's start battling!

Create an instance of battle, passing it two pokemon and call play!

```js
// battle.js
var battle = new Battle(pikachu, bulbasaur);
battle.play();
```

```
~/Desktop$ node test.js$ node battle.js
What should PIKACHU do?
Select 'a' for attack, 'p' for potion, 'r' for run: a
PIKACHU attacked with Thunder Shock!
Damage to BULBASAUR: -4
PIKACHU hp: 22
BULBASAUR hp: 20
What should BULBASAUR do?
Select 'a' for attack, 'p' for potion, 'r' for run: a
BULBASAUR attacked with Tackle!
Damage to PIKACHU: -3
BULBASAUR hp: 20
PIKACHU hp: 19
What should PIKACHU do?
Select 'a' for attack, 'p' for potion, 'r' for run: p
Used potion on PIKACHU ( hp: 29 )!
```
