var fs = require("fs");

function getRecordsFromFile(filename, cb){
  fs.readFile(filename, 'utf8', function(err, data){
    if(err){
      console.log("---Error---");
      console.log(err);
      return;
    }

    var records = data.split("\n");

    cb(records);
  })
}

function parseWord(record){
  var wordRecord = record.split(" ")[2];
  return wordRecord.split("=")[1];
}

function parseSentiment(record){
  var sentimentRecord = record.split(" ")[5];
  return sentimentRecord.split("=")[1];
}

function detectSentiment(filename, sentence, cb){
  getRecordsFromFile(filename, function(records){
    var score = 0;
    var splitSentence = sentence.toLowerCase().split(" ");

    records.forEach(function(record){
      if(!record){
        return;
      }

      var word = parseWord(record).toLowerCase();
      var sentiment = parseSentiment(record);

      if(splitSentence.indexOf(word) !== -1){
        if(sentiment === "negative"){
          score -= 1;
        } else if(sentiment === "positive"){
          score += 1;
        }
      }
    });

    cb(sentence, score);
  });
}

detectSentiment("sentimentDict.txt", "i love and cherish you", function(sentence, rating){
  console.log(sentence + " has a ranking of " + rating + ".");
});
