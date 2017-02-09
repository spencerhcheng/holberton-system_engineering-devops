var addTwo = function(arg) {
  return arg + 2;
}

var num = 3;
addTwo(num); // => 5
addTwo(5); // => 7

/////////////////////////////////////////////////////

var func = function() {
  console.log("this is my function");
} // function declaration

func(); // calling my function

/////////////////////////////////////////////////////

var foo = function() {
  console.log("the callback function");
}

var foo2 = function() {
  console.log("hey hello");
}

var bar = function(cb) {
  console.log("before the callback");
  console.log(cb);
  console.log("after the callback");
}

bar(foo);
bar(foo2)

/////////////////////////////////////////////////////

var logTheAnswer = function(answer) {
  return ("The answer is " + answer + ".");
}

var add5ToAnswer = function(answer) {
  return answer + 5;
}

var add = function(num1, num2, cb) {
  var sum = num1 + num2;
  return cb(sum);
}

add(1, 5, logTheAnswer);
add(3, 10, add5ToAnswer);

var concatenate = function(str1, str2, cb) {
  var str = str1 + str2;
  return cb(str);
}

concatenate("hey", "hello", logTheAnswer);
concatenate("3", "5", add5ToAnswer);

/////////////////////////////////////////////////////

var array = ["a", "b", "c", "d", "e"];

var foo = function(ele, idx, arr) {
  console.log("Current ele is: " + ele);
  console.log("Current idx is: " + idx);
  console.log("Current array is: " + arr);
  console.log("------------------------");
};

array.forEach(foo);

function myForEach(array, cb) {
  for (var idx = 0; idx < array.length; idx++) {
    cb(array[idx], idx, array);
  }
}

var cookieMonster = {
  name : "Cookie",
  favoriteFoods : ["apple", "cookie", "orange"],

  badLogFavFoods: function() {
    this.favoriteFoods.forEach(function(food) {
      console.log(cookieMonster.name + " loves " + food + "!");
    });
  },

  logFavFoods1: function() {
    this.favoriteFoods.forEach(function(food) {
      console.log(this.name + " loves " + food + "!");
    }.bind(cookieMonster));
  },

  logFavFoods2 : function() {
    this.favoriteFoods.forEach(function(food) {
      console.log(this.name + " loves " + food + "!");
    }, cookieMonster);
  },
}

/////////////////////////////////////////////////////
var cb = function () {
  console.log(this.name);
}

var obj = {
  name: "Sunny",
  bar: function(cb) {
    cb().bind(this);
  } }

/////////////////////////////////////////////////////

function createAdder(num) {
  var f =  function(num2) {
    var sum = num2 + num;
    return sum;
  }

  return f;
};

var addTwo = createAdder(2);
addTwo(10);
addTwo(-5);

var addTwenty = createAdder(20);
addTwenty(100);
addTwenty(-50);
