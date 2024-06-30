var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("Welcome users!!!");
});

app.get('/Aboutus', function(req, res) {
  res.send("Welcome to About page!!!");
});

app.get('/Contact', function(req, res) {
  res.send("Welcome to Contact page!!!");
});

app.get('/Home', function(req, res) {
  res.send("Welcome to home page!!!");
});

var server = app.listen(3000);  
console.log("server started successfully");