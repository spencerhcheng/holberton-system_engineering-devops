var fs = require("fs");
// console.log(fs);
function getRecordsFromFile(filename, cb) {
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }

    // console.log("data:", data);
    var records = data.split("\n");
    console.log("records:", records);
    cb(records);
  })
}

function printRecords(recs) {
  recs = recs.slice(0, recs.length - 1);
  recs.forEach(function(record, idx) {
    console.log("line:", idx, "record:", record);
  })
}

getRecordsFromFile("data.txt", printRecords);
