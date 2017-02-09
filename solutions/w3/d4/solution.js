function logEach(array) {
  array.forEach(function (ele, idx) {
    console.log(idx + ": " + ele);
  });
}

function maxValue(array) {
  var max = null;

  array.forEach(function(num) {
    if (num > max) {
      max = num;
    }
  });

  return max;
}

function wordYeller(sentence) {
  var yelledWords = [];

  var punctuation = [".", ",", "!", "?", ";", ":"];
  var words = sentence.split(" ");

  words.forEach(function(word) {
    var lastCharacter = word.slice(-1);

    if (punctuation.indexOf(lastCharacter) !== -1) { // word already has punctuation
      yelledWords.push(word);
    } else {
      yelledWords.push(word + "!");
    }
  });

  return yelledWords.join(" ");
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
