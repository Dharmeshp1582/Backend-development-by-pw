var fs = require('fs');

fs.unlink("myfile.txt",function(err,data){
  if(err)
     throw err;
    console.log("File deleted successfully");
});