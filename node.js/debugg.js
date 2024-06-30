var fs = require("fs"); 
str = "this is replacing the previous version";
var strlen = str.length;

fs.writeFile("input.txt", str,function(err){
  if(err) 
  throw err;

  console.log("file updated successfully");
  console.log("the length of the code is " + strlen);
});