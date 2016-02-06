var cookieMonster = {
  name : "Fred",

  hair : "blue",

  favorite_foods : ["cookies"],

  good_foods : ["pizza", "skittles"],

  bad_foods : ["water", "banana"],

  hated_foods : ["spinach"],

  eat : function(food){
    var score = 0;

    for(var i = 0; i < food.length; i += 1){
      var food_item = food[i];

      if(this.favorite_foods.indexOf(food_item.toLowerCase()) !== -1){
        score += 2;
      } else if(this.good_foods.indexOf(food_item.toLowerCase()) !== -1){
        score += 1;
      } else if(this.bad_foods.indexOf(food_item.toLowerCase()) !== -1){
        score -= 1;
      } else if(this.hated_foods.indexOf(food_item.toLowerCase()) !== -1){
        score -= 2;
      }
    }

    return score;
  },

  isAlrightMeal : function(food){
    var score = this.eat(food);

    if(score >= -1 && score <= 1){
      return true;
    }

    return false;
  }

};

/********/
module.exports = cookieMonster; // Don't touch this line
