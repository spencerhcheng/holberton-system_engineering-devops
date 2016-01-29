var cookieMonster = {
  name : "Fred",

  hair : "blue",

  favorite_foods : ["cookies"],

  good_foods : ["pizza", "skittles"],

  bad_foods : ["water", "bannana"],

  hated_foods : ["spinach"],

  eat : function(food){
    var score = 0;

    food.forEach(function(food_item){
      if(this.favorite_foods.indexOf(food_item.toLowerCase()) !== -1){
        score += 2;
      } else if(this.good_foods.indexOf(food_item.toLowerCase()) !== -1){
        score += 1;
      } else if(this.bad_foods.indexOf(food_item.toLowerCase()) !== -1){
        score -= 1;
      } else if(this.hated_foods.indexOf(food_item.toLowerCase()) !== -1){
        score -= 2;
      }
    }.bind(this));

    return score;
  },

  ifAlrightMeal : function(food){
    var score = this.eat(food);

    if(score >= -1 && score <= 1){
      return true;
    }

    return false;
  }

};

/********/
module.exports = cookieMonster; // Don't touch this line
