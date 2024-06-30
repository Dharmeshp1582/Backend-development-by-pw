var express = require('express');
var mongoose = require('mongoose'); 

url = "http://localhost/mydatabase"

const app = express();

mongodb.connect(url,{useNewUrlParser : true})

const os = mongooose.connection;

app.on('open', function(req, res) {
  console.log("Connected to mongoose");
})