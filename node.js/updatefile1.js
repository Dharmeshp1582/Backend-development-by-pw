var fs = require('fs');

str = "This data is replaced by old data";

fs.writeFile("input.txt",str,function(err){
  if(err)
  throw err;
console.log("file writing done");
});