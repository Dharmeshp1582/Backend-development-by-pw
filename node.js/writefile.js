var fs = require('fs');

var str = "THIS FILE IS GENERATED";
var ws = fs.createWriteStream('sample.txt');//THIS FILE IS GENERATED
ws.write(str,'utf-8');
ws.end();

console.log("This data is written to that file ");

/**for handling errors add below code*/

ws.on('error', function(err){
    console.log(err.stack);
}) 