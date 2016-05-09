function myForEach (arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

function mySelect1 (arr, cb) {
  var selected = [];

  myForEach(arr, function (ele, i, ar) {
    if (cb(ele, i, ar)) {
      selected.push(ele);
    }
  });

  return selected;
}

function mySelect2 (arr, cb) {
  var selected = [];

  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      selected.push(arr[i]);
    }
  }

  return selected;
}

function myReject1 (arr, cb) {
  var selected = [];

  myForEach(arr, function (ele, i, ar) {
    if (!cb(ele, i, ar)) {
      selected.push(ele);
    }
  });

  return selected;
}

function myReject2 (arr, cb) {
  var selected = [];

  for (var i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i, arr)) {
      selected.push(arr[i]);
    }
  }

  return selected;
}

function myMap1 (arr, cb) {
  var mapped = [];

  myForEach(arr, function (ele, i, ar) {
    mapped.push(cb(ele,i,ar));
  });

  return mapped;
}

function myMap2 (arr, cb) {
  var mapped = [];

  for (var i = 0; i < arr.length; i++) {
    mapped.push(cb(arr[i], i, arr));
  }

  return mapped;
}

function createExpFunc(power) {
  return function (num) {
    return Math.pow(num, power);
  };
}

function createExpFunc2(power) {
  return function (num) {
    var result = num;

    for (var x = 1; x < power; x++) {
      result *= num;
    }
    return result;
  };
}
