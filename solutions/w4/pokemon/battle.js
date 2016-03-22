var Pokemon = require("./pokemon");

var electricTypeMoves = [ {name: "Tackle", damage: 3}, {name: "Thunder Shock", damage: 4}, {name: "Charge Beam", damage: 5}, {name: "Thunder Wave", damage: 5}, {name: "Spark", damage: 7}, {name: "Thunder Punch", damage: 8}, {name: "Shock Wave", damage: 10}, {name: "Thunder Bolt", damage: 15 }, {name: "Thunder", damage: 20}, {name: "Zap Cannon", damage: 30}, {name: "Electric Beam", damage: 35} ];
var leafTypeMoves = [ {name: "Absorb", damage: 2}, {name: "Tackle", damage: 3}, {name: "Bullet Seed", damage: 4}, {name: "Mega Drain", damage: 6}, {name: "Vine Whip", damage: 8}, {name: "Razor Leaf", damage: 15}, {name: "Giga Drain", damage: 18 }, {name: "Seed Bomb", damage: 22}, {name: "Petal Dance", damage: 25}, {name: "Solar Beam", damage: 35} ];
var rockTypeMoves = [ {name: "Tackle", damage: 3}, {name: "Rollout", damage: 6}, {name: "Rock Blast", damage: 4}, {name: "Smack Down", damage: 10}, {name: "Rock Throw", damage: 20}, {name: "Rock Slide", damage: 30}, {name: "Head Smash", damage: 40}, {name: "Rock Wrecker", damage: 50 } ];

var pikachu = new Pokemon('PIKACHU', 'Electric', electricTypeMoves, 10);
var bulbasaur = new Pokemon('bulbasaur', 'leaf', leafTypeMoves, 11);

var Battle = function(pokemon1, pokemon2) {
  this.pokemon1 = pokemon1;
  this.pokemon2 = pokemon2;
  this.turn = true;
};

Battle.prototype.fight = function() {
  if (this.turn) {
    this.pokemon1.attack(this.pokemon2);
  } else {
    this.pokemon2.attack(this.pokemon1);
  }
};

//
//
Battle.prototype.stats = function() {
	console.log("---")
	console.log(this.pokemon1.name + " hp: " + this.pokemon1.hp);
	console.log(this.pokemon2.name + " hp: " + this.pokemon2.hp);
	console.log("---")
};
//
// results: function(pokemon1, pokemon2) {
// 	if (pokemon1.hp > 0) {
// 		console.log(pokemon1.name + " won!");
// 	} else {
// 		console.log(pokemon2.name + " won!");
// 	}
// 	console.log("battle over!");
// 	reader.close();
// },
//
// promptUser: function(myPokemon, oppPokemon, playMove) {
// 	console.log("What should " + myPokemon.name + " do?");
// 	reader.question("Select 'a' for attack, 'p' for potion', 'r' for run: ", function (userInput) {
// 		playMove(userInput, myPokemon, oppPokemon);
// 	});
// },
//
// makeMove: function(choice, myPokemon, oppPokemon) {
// 	if (choice === "a") {
// 		this.attack(myPokemon, oppPokemon);
// 		this.attack(oppPokemon, myPokemon);
// 		this.stats(myPokemon, oppPokemon);
// 	} else if (choice === "p") {
// 		this.potion(myPokemon);
// 		this.attack(oppPokemon, myPokemon);
// 		this.stats(myPokemon, oppPokemon);
// 	} else if (choice === "r") {
// 		this.run(oppPokemon);
// 	}
//
// 	if (myPokemon.hp > 0 && oppPokemon.hp > 0) {
// 		this.play(myPokemon, oppPokemon);
// 	} else {
// 		this.results(myPokemon, oppPokemon);
// 	}
// },
//
// Battle.prototype.play = function(myPokemon, oppPokemon) {
// 	this.promptUser(myPokemon, oppPokemon, this.makeMove.bind(this));
// }

var battle = new Battle(pikachu, bulbasaur);
battle.stats();
battle.fight();
// Battle.play(pikachu, squirtle);
