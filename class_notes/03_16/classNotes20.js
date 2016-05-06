/******************************************************************************
Write myForEach(arr, cb). It should pass the callback every element, its
corresponding index, and the array itself. It should return undefined.

Example:
> myForEach([1,2,3], function(ele, idx, arry) { console.log(ele, idx, arry); });
1 0 [1, 2, 3]
2 1 [1, 2, 3]
3 2 [1, 2, 3]
undefined // return value
******************************************************************************/



/******************************************************************************
Write myMap(arr, cb). It should pass the callback every element, its
corresponding index, and the array itself. It should return a new array where
each element in the new array is the return value of the callback.

Use Array#forEach.

Example:
> myMap([1,2,3], function(ele, idx, arry) { return ele + idx; });
[1, 3, 5]
******************************************************************************/
function myMap(arr, cb) {
  var results = [];

  for(var i = 0; i < arr.length; i++) {
    var element = arr[i];
    results.push(cb(element, i, arr));
  }
  return results;
}

function myMap(arr, cb) {
  var results = [];

  arr.forEach(function(element, i, arr) {
    var newElement = cb(element, i, arr);
    results.push(newElement);
  });

  return results;
}

Array.prototype.myMap = function(cb) {
  var results = [];
  this.forEach(function(ele, i, arr) {
    results.push(cb(ele, i, arr));
  });

  return results;
}

[1,2,3].myMap(function(ele, idx, arry) { return ele + idx; });

/******************************************************************************
Write mySelect(arr, cb). It should pass the callback every element, its
corresponding index, and the array itself. It should return a new array containing
all the elements of arr for which the given calback returns a truthy value.

Use Array#forEach.

Examples:
> mySelect([1,2,3], function(ele, idx, arry) { return ele % 2 === 0; });
[2]

> mySelect([1,2,3], function(ele, idx, arry) { return ele % 2 !== 0; });
[1, 3]
******************************************************************************/
function mySelect(arr, cb) {
  var results = [];
  arr.forEach(function(ele, i, arry) {
    var returnValue = cb(ele, i, arry);

    if (returnValue) {
      results.push(ele);
    }
  })
  return results;
}
/******************************************************************************
Write multipyN(num) which takes a number num and returns a function which takes an argument
and returns that argument multiplied by num.

Example:
> var multiplyTen = multiplyN(10);

> multiplyTen;
[Function]

> multiplyTen(35)
350
******************************************************************************/

function multiplyN(num) {
  return fuction(arg) {
    return num * arg;
  };
}

// function multiplyN(num) {
//
//   var f1 = function(arg) {
//
//     var f2 = function(arg2) {
//       return num * arg * arg2;
//     }
//
//     return f2;
//   };
//
//   return f1;
// }
