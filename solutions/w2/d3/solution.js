function removePunctuation(word) {
  var punctuation = [";", "!", ".", "?", ",", "-"];
  var lastChar = word[word.length - 1];

  if (punctuation.indexOf(lastChar) !== -1) {
    return word.slice(0, -1);
  } else {
    return word;
  }
}

function isStopWord(word, stopWords) {
  var noPuncWord = removePunctuation(word);

  return stopWords.indexOf(noPuncWord) !== -1;
}

function titleize(title, stopWords) {
  var words = title.split(" ");
  var goodTitle = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i].toLowerCase();

    if (isStopWord(word, stopWords)) {
      goodTitle.push(word);
    } else {
      word = word[0].toUpperCase() + word.slice(1);
      goodTitle.push(word);
    }
  }

  return goodTitle.join(" ");
}
