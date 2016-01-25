var cookieMonster = {
  name : "Fred",

  hairColor : "blue",

  cookiesEaten : 0,

  kaleEaten : 0,

  healthRanking : function(){
    return this.kaleEaten/this.cookiesEaten;
  },

  isHealthy : function(){
    return this.healthRanking() > 0.3;
  },

  happinessRanking : function(){
    return this.cookiesEaten/this.kaleEaten;
  },

  isHappy: function(){
    return this.happinessRanking() >= 2;
  },

  eat : function(food){
    for(var i = 0; i < food.length; i += 1){
      var item = food[i];

      if(item == "K"){
        kaleEaten += 1;
      } else {
        cookiesEaten += 1;
      }

      if(!isHealthy()){
        return "I can't eat anymore. Too many cookies.";
      } else if(!isHappy()){
        return "I don't want anymore. Kale taste awful.";
      }
    }

    return "That was some good food!";
  }

};

/********/
module.exports = cookieMonster; // Don't touch this line
