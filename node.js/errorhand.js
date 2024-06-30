var fs = require('fs');

fs.readFile("inp.txt",function(err, data){
  if(err){
    throw err;
    console.log(data);
  }
});

process.on("uncaughtException", function(error){
    console.log("Exception caught !!! file is not present")
});