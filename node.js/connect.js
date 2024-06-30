var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017";

MongoClient.connect(url,function(err,db){
  if(err)
  throw err;
var dbo = db.db("mydatabase");
console.log("Connection successful");
})