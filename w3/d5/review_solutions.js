function mapCreator(callback) {
  return function (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      var el = arr[i];
      result.push(callback(el));
    }
    return result;
  };
}

function objectSelect(obj, callback) {
  var result = {};

  for (var key in obj) {
    var val = obj[key];
    if (callback(key, val)) {
      result[key] = val;
    }
  }

  return result;
}


function randomNumberGenerator(min, range) {
  var num = (Math.random() * range) + min;
  return Math.floor(num);
}
