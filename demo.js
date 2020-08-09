var http = require('http');
http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  var fs = require('fs');
//const { json } = require("express");
var file = 'api/routes/tales.txt';
fs.readFile(file, 'utf8', function (err, data) {

  if (err) throw err;

  var wordsArray = splitByWords(data);
  var wordsMap = createWordMap(wordsArray);


  var finalWordsArray = sortByCount(wordsMap);
   var newArray=[];
   let n=10;
   
      for(i=0;i<n;i++){
         newArray.push(finalWordsArray[i]);

      }
  res.write(JSON.stringify({newArray}));
  res.end();
      //console.log(newArray)
     
});


  
}).listen(8080);





function splitByWords (text) {
  // split string by spaces (including spaces, tabs, and newlines)
  var wordsArray = text.split(/\s+/);
  return wordsArray;
}


function createWordMap (wordsArray) {

  // create map for word counts
  var wordsMap = {};
  /*
    wordsMap = {
      'Oh': 2,
      'Feelin': 1,
      ...
    }
  */
  wordsArray.forEach(function (key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });

  return wordsMap;

}


function sortByCount (wordsMap) {

  // sort by count in descending order
  var finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function(key) {
    return {
      name: key,
      total: wordsMap[key]
    };
  });

  finalWordsArray.sort(function(a, b) {
    return b.total - a.total;
  });

  return finalWordsArray;

}



