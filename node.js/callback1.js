var fs = require('fs');
console.log("serving user1");

fs.readFile('output.txt',function(err, data){
    if(err)
        return console.error(err);
        console.log("content of the file are...");
        console.log(data.toString());+
});

console.log("serving user2");
console.log("srerving user3");
console.log("Good bye !!"); 