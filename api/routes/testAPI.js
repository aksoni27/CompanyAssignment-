var express = require("express");
var router = express.Router();

var fs = require('fs');
const { json } = require("express");
var file = 'tales.txt';


router.post('/',(req,res)=>{
  // read file from current directory
fs.readFile(file, 'utf8', function (err, data) {

  if (err) throw err;

  var wordsArray = splitByWords(data);
  var wordsMap = createWordMap(wordsArray);


  var finalWordsArray = sortByCount(wordsMap);

  console.log(finalWordsArray);
  console.log('The word "' + finalWordsArray[0].name + '" appears the most in the file ' +
    finalWordsArray[0].total + ' times');
   var newArray=[];
    finalWordsArray.forEach((array)=>{
      for(i=0;i<n;i++){
         newArray.push(array)

      }
      console.log(newArray)
    })
    // router.get("/", function(req, res, next) {
    //     res.send("API is working properly");
    // });
  /*
    output:
    [ { name: 'he', total: 10 },
      { name: 'again', total: 7 },
      { name: 'away', total: 7 },
      ... ]
    The word "he" appears the most in the file 10 times
  */

});

})



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



module.exports = router;