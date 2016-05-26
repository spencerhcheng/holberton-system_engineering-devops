function wordYeller(sentence) {

}

function divisibleByNPairSum(ary, n) {
  var results = [];

  ary.forEach(function (n1, i) {
    ary.forEach(function (n2, j) {
      if ((j > i) && ((n1 + n2) % n === 0)) {
        results.push([i, j]);
      }
    });
  });

  return results;
}

function peakFinder(array) {
  var peaks = [];

  array.forEach(function(num, idx) {
    if ((idx === 0) && (num > array[idx + 1])) {
      peaks.push(idx);
    } else if ((idx === array.length - 1) && (num > array[idx - 1])) {
      peaks.push(idx);
    } else if ((num > array[idx + 1]) && (num > array[idx - 1])) {
      peaks.push(idx);
    }
  });

  return peaks;
}
