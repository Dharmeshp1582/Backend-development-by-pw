var fs = require('fs');
fs.open("input.txt","I",function(err, fs){
  if(err)
  console.warn(err);
   else 
   console.warn("File opening successfully")
}
)