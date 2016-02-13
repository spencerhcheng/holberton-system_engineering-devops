/// Predict The Output and Fix the Code
var dog = {
  age : 5,

  live : function(){
    this.age += 1;

    if(this.age < 15){
      console.log("Dog lives another dat at age " + this.age);
    } else {
      console.log("Dog has been dead for " + this.age - 15 + " years");
    }

    setInterval(function(){
      this.live();
    }.bind(dog), 1000);
  }
}

dog.live()

/*--------------------------------------------------------------------------*/

var annoyingDancer = {
  favoriteDances: ["salsa", "waltz", "hip-hop"],

  currentFav : 0,

  askQuestion : function(){
    var currentFavDance = this.favoriteDances[this.currentFav];
    console.log("Do you want to dance " + currentFavDance + "with me?");

    this.currentFav += 1;

    if(this.currentFav === this.favoriteDances.length){
      this.currentFav = 0;
    }

    setTimeout(this.askQuestion.bind(annoyingDancer), 1000);
  }
}

annoyingDancer.askQuestion()
