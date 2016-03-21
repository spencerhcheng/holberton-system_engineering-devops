# Pokemon Part 2

Now that we have our Pokemon class, let's create a Battle class and battle our pokemon!

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

Let's export our `Pikachu` class. Add `module.exports = Pokemon` at the end of your Pokemon class file. Create a new file in the same directory called `battle.js` and add `var Pokemon = require("./pokemon")`.

To test if you've exported and imported your `Pokemon` class correctly, try creating a few pokemon.

```js
// pokemon.js
function Pokemon () {
  // ...
}

module.exports = Pokemon;
```

```js
var Pokemon = require("./pokemon");

var electricTypeMoves = [ {name: "Tackle", damage: 3}, {name: "Thunder Shock", damage: 4}, {name: "Charge Beam", damage: 5}, {name: "Thunder Wave", damage: 5}, {name: "Spark", damage: 7}, {name: "Thunder Punch", damage: 8}, {name: "Shock Wave", damage: 10}, {name: "Thunder Bolt", damage: 15 }, {name: "Thunder", damage: 20}, {name: "Zap Cannon", damage: 30}, {name: "Electric Beam", damage: 35} ];
var leafTypeMoves = [ {name: "Absorb", damage: 2}, {name: "Tackle", damage: 3}, {name: "Bullet Seed", damage: 4}, {name: "Mega Drain", damage: 6}, {name: "Vine Whip", damage: 8}, {name: "Razor Leaf", damage: 15}, {name: "Giga Drain", damage: 18 }, {name: "Seed Bomb", damage: 22}, {name: "Petal Dance", damage: 25}, {name: "Solar Beam", damage: 35} ];
var rockTypeMoves = [ {name: "Tackle", damage: 3}, {name: "Rollout", damage: 6}, {name: "Rock Blast", damage: 4}, {name: "Smack Down", damage: 10}, {name: "Rock Throw", damage: 20}, {name: "Rock Slide", damage: 30}, {name: "Head Smash", damage: 40}, {name: "Rock Wrecker", damage: 50 } ];

var pikachu = new Pokemon('pikachu', 'Electric', electricTypeMoves, 10);
var bulbasaur = new Pokemon('bulbasaur', 'leaf', leafTypeMoves, 11);
var onyx = new Pokemon('onyx', 'rock', rockTypeMoves, 9);
```

**NB**: If you have any code used for testing in your Pokemon class file, comment it out. Remember, when a file is `require`d, Node loads and executes its code.

### Phase 1

* Create a `Battle` class.
