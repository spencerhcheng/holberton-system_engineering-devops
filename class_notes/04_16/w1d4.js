// LECTURE NOTES 4 - 04/07/16

function maxValue(array) {
  var max = null; // max value I have seen so far
  for (var i = 0; i < array.length; i++) {
    var currentElement = array[i];
    if (currentElement > max) {
      max = currentElement;
    }
  }

  return max;
}

var result = maxValue([12, 6, 43, 2]);
// console.log(result);
// console.log(maxValue([]));
// console.log(maxValue([-4, -10, 0.43]));



var dog = { name: 'Tofu',
            age: 5,
            breed: 'Poodle Maltese Mix'}

dog.calculateDogYears = function (naughty) {
  if (naughty) {
    return this.age * 7 - 10;
  } else {
    return this.age * 7;
  }
};

// console.log(dog);
// console.log(dog.calculateDogYears(false));
// console.log(dog.calculateDogYears(true));

for (var key in dog) {
  console.log(key, dog[key]); // why can't you use dot-notation
}

for (var cat in dog) {
  console.log(cat, dog[cat]);
}

// objects vs. arrays
// var dogArray = ["tofu", 5, function() {}];
