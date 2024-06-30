var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("Welcome to express js ");
});

var server = app.listen(8082,function(){ 
  console.log("server started");
})