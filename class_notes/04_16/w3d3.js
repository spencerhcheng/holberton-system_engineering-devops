var foo = function() {
  console.log("the callback function");
}

var fooTwo = function() {
  console.log("here at fooTwo");
  return 2 + 2;
}

var bar = function(cb) {
  console.log("before the callback");
  cb(); // calling the cb function
  console.log("after the callback");
}

bar(foo);
bar(function() {
  console.log("the callback function");
});
bar(fooTwo); // bar function call

// two different ways to define the same functions
// function cat() {
//   console.log("meow");
// }
//
// var cat = function() {
//   console.log("meow");
// }

var logTheAnswer = function(answer) { // callback 1
  return ("The answer is " + answer + ".");
}

var add5ToAnswer = function(answer) { // callback 2
  return answer + 5;
}

var add = function(num1, num2, cb) {
  var sum = num1 + num2;
  return cb(sum);
}

var concatenate = function(str1, str2, cb) {
  var str = str1 + str2;
  return cb(str);
}

// add(1, 2, 3); // throws an error
// console.log(add(1, 2, logTheAnswer));
// console.log(add(1, 2, add5ToAnswer));
// console.log(add(2, 5, add5ToAnswer));

// console.log(concatenate("1", "2", logTheAnswer));
// console.log(concatenate(1, 2, logTheAnswer));
// console.log(concatenate("1", "2", add5ToAnswer));
// console.log(concatenate(1, 2, add5ToAnswer));

var array = ["a", "b", "c", "d", "e"];

var cb = function(ele, idx, arr) {
  console.log("Current ele is: " + ele);
  console.log("Current idx is: " + idx);
  console.log("Current array is: " + arr);
  console.log("------------------------");
  return ele;
};

// var ele = "a";
// var idx = 0;
// var arr = array; // what scope are these variables defined on

array.forEach(cb(ele, idx, arr)); // breaks!
array.forEach(cb); // works!

var ary = [10, 20, 30];
ary.forEach(function(ele, idx) {
  console.log(ele);
  console.log(idx);
  console.log(ary);
  // return 0; // what does this do?
}); // dont forget semicolon


// Goal: double each element
var failedDoubleElement = function(ele, idx, arr) {
  return ele * 2;
}

ary.forEach(function(ele, idx, arr) {
  arr[idx] = ele * 2; // or ary[idx] = ele * 2;
  // ele = ele * 2;
  // ele *= 2;
});
console.log(ary); // [20, 40, 60]

// Goal: return the sum of all elements
var sum = 0;
ary.forEach(function(ele, idx, arr) {
  // console.log(ele + arr[idx + 1] + arr[idx + 2]); // first attempt
  sum += ele;
});
console.log(sum); // 60

// var sum = 0; // how to do it using a for loop instead of forEach
// for (var i = 0; i < ary.length; i++) {
//   sum += ary[i];
// }
// console.log(sum);

// bind this
var cookieMonster = {
  name : "Cookie",
  favoriteFoods : ["apple", "cookie", "orange"],

  badLogFavFoods: function() {
    console.log(this);
    var favFoodsArr = this.favoriteFoods; // ["apple", "cookie", "orange"]
    favFoodsArr.forEach(function(ele, idx, arr) {
      // this.name = "Tofu"; // how does this change things?
      console.log(this.name + " loves " + ele + "!");
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

  logFavFoods3 : function() {
    this.favoriteFoods.forEach(function(food) {
      console.log(this.name + " loves " + food + "!");
    }.bind(this));
  },

  logFavFoods4 : function() {
    this.favoriteFoods.forEach(function(food) {
      console.log(this.name + " loves " + food + "!");
    }, this);
  }
}

// high-order function type 2: a function that returns a function
function createAdder(num1) {
  var adder = function (num2) {
    return num1 + num2;
  };

  return adder;

}

var addTwo = createAdder(2);
// console.log(addTwo); // what does this print?
// console.log(addTwo(6)) // why does this print 8?

// Asynchronous programming
setTimeout(function() {
  console.log("Start");
}, 0);
console.log("Done");
