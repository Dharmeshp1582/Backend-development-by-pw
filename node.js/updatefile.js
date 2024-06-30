var fs = require("fs");

str = "this is txt file text  how are you?";

fs.appendFile('myfile.txt', str , function(err){
  if (err)
  console.log(err);
  console.log("file appended");
})