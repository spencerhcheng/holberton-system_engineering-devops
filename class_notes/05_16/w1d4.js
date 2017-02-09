var dog = {
  name : "Tofu",
  age : 5,
  bark : function () {
    console.log("woof");
  }
};

// what's the different between these two lines?
dog.bark()
console.log(dog.bark());

// write the method calculateDogYears which outputs
// dog's age in dog years.

dog.calculateDogYears = function () {
  var dogYears = this.age * 7;
  return dogYears;
}

console.log(dog.calculateDogYears());

// tofu's birthday!
dog.age++;
console.log(dog.age);
console.log(dog.calculateDogYears()); // what's this output?

for (var key in dog) {
  console.log(key + " : " + dog[key]);
}
