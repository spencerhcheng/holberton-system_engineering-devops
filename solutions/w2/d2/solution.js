function divisibleByThreePairSum(array) {
  var pairs = [];

  for (var i = 0; i < array.length; i += 1) {
    for (var j = i + 1; j < array.length; j += 1) {
      var sum = array[i] + array[j];

      if (sum % 3 === 0) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}

/******************************************************************************/


function isAlpha(char) {
  var alphabet = [
    "a","b","c","d","e",
    "f","g","h","i","j",
    "k","l","m","n","o",
    "p","q","r","s","t",
    "u","v","w","x","y",
    "z"
  ];

  return (alphabet.indexOf(char) !== -1);
}

function isNumeric(char) {
  var numbers = [ "1","2","3","4","5","6","7","8","9","0" ];

  return (numbers.indexOf(char) !== -1);
}

function isAlphanumeric(char) {
  return (isAlpha(char) || isNumeric(char));
}

function isValidEmail(email) {
  var emailParts = email.split("@");

  if (emailParts.length !== 2) {
    return false;
  }

  var firstPart = emailParts[0];
  var secondPart = emailParts[1];

  for (var i = 0; i < firstPart.length; i += 1) {
    var char = firstPart[i];

    if (!isAlphanumeric(char) && char !== "_" && char !== ".") {
      return false;
    }
  }

  if (secondPart.split(".").length !== 2) {
    return false;
  }

  for (var i = 0; i < secondPart.length; i += 1) {
    var char = secondPart[i];

    if (!isAlpha(char) && char !== ".") {
      return false;
    }
  }

  return true;
}



/******************************************************************************/

function peakFinder(array) {
  var peaks = [];

  for (var i = 0; i < array.length; i += 1) {
    var point = array[i];
    var before = array[i - 1];
    var after = array[i + 1];

    if (i === 0 && point > after) {
        peaks.push(i);
    } else if ((i === array.length - 1) && (point > before)) {
        peaks.push(i);
    } else if ((point > before) && point > after) {
        peaks.push(i);
    }
  }

  return peaks;
}
