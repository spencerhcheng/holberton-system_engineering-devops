// defining a 2D array
var ary = [[0, 0, 1], ["a", "b", "c"]];

// indexing into a 2D array
ary[0] //=> [0, 0, 1]
ary[1] //=> ["a", "b", "c"]

ary[0][0] //=> 0
ary[0][1] //=> 0
ary[0][2] //=> 1
ary[1][0] //=> "a"
ary[1][1] //=> "b"
ary[1][2] //=> "c"

var temp = ary[0]; //=> [0, 0, 1]
temp[0] //=> 0
temp[1] //=> 0
temp[2] //=> 1


// iterating over a 2D array using nested loops
for (var i = 0; i < ary.length; i++) {
  for (var j = 0; j < ary[i].length; j++) {
    console.log(ary[i][j]);
  }
}

// doing the same thing with while loops

var i = 0;
while (i < ary.length) {
  var j = 0;
  while (j < ary[i].length) {
    console.log(ary[i][j]);
    j++;
  }
  i++;
}

// nested loops for an regular ol' one dimensional array
var regularAry = [5, 6, 7, 8, 9];

for (var i = 0; i < regularAry.length; i++) {
  console.log("i", array[i]);
  for (var j = 0; j < regularAry.length; j++) {
    console.log("j", array[j]);
  }
}

// how would you do this with while loops?

// nested loop example!
// Let's say we are given an array and have to return the indices of all pairs of
// elements that sum to 0. This means we will have to add each element to
// the other elements in the array.

function pairZero(array) {
  var pairs = [];
  var miniArray = [];

  for(var i = 0; i < array.length; i++) {
    for(var j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        miniAry = [i, j];
        pairs.push(miniAry);
      }
    }
  }
  return pairs;
}

console.log(pairZero([4, 1, 0]));
console.log(pairZero([1, 2, -1]));
console.log(pairZero([0, 2, 5, -2, 0]));
