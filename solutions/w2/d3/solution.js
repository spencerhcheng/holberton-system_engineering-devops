function containsPunctuation(word) {
  var punctuation = [";", "!", ".", "?", ",", "-"];


  for (var i = 0; i < punctuation.length; i += 1) {
    if (word.indexOf(punctuation[i]) !== -1) {
      return true;
    }
  }

  return false;
}

function isStopWord(word, stopWords) {
  for (var i = 0; i < stopWords.length; i += 1) {
    var stopWord = stopWords[i];

    if ((containsPunctuation(word)) && (word.indexOf(stopWord) === 0) && (word.length === stopWord.length + 1)) {
      return true;
    } else if (word === stopWord) {
      return true;
    }
  }

  return false;
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
