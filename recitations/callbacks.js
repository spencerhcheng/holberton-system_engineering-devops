function myMap(arr, cb) {
  var mapped = [];

  arr.forEach(function(ele, i, ar) {
    var mappedValue = cb(ele, i, ar);
    mapped.push(mappedValue);
  });

  return mapped;
}
