var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("Welcome users!!!");
});

var server = app.listen(8080);  
console.log("server started successfully");