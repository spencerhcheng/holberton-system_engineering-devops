function isOdd(number) {
  return (number % 2 !== 0);
}

function plusFive(number) {
  return number + 5;
}

function threeOrSeven(number) {
  return (number % 7 === 0) || (number % 3 === 0);
}


function hello(str) {
  var helloStr = "Hello, " + str + ".";
  return helloStr;
}

function yell(str) {
  var yelledStr = str.toUpperCase() + "!!!";
  return yelledStr;
}

function whisper(str) {
  var whisperedStr = "..." + str.toLowerCase() + "...";
  return whisperedStr;
}

function isSubstring(searchString, subString) {
  var lowerSearchStr = searchString.toLowerCase();
  var lowerSubStr = subString.toLowerCase();

  return lowerSearchStr.indexOf(lowerSubStr) !== -1;
}

function echo(str) {
  var firstEcho = str.toUpperCase();
  var lastEcho = str.toLowerCase();

  return firstEcho + " ... " + str + " ... " + lastEcho;
}

function isEven(number) {
  return !isOdd(number);
}
