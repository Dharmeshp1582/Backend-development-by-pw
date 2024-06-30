var fs = require('fs');

fs.open('myfile.txt', 'w' , function(err, file) {
 if (err) 
  console.log(err);
  console.log("File Created");
})