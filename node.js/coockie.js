const express = require('express');

const coockieParser = require('coockie-parser'); 
const app = express();
app.use(coockieParser());

app.get('/', function(req, res) {
  res.send("COOCKIE DEMO");
});

var student = {
  rollno: "101",
  name:"Dharmesh"
};

app.get('/setstudent', function(req, res) {
  res.cookie("studentData", student);
  res.send("Student data addded to coockie");

});

app.get('/getstudent', function(req, res) {
  res.send(req.coockies);
});

app.get('/deletestudent', function(req, res) {
  res.clearCookie("studentData");
  res.end("Student data delete from coockie");
})

app.listen(8082,function(){
  console.log("Server is listening on port 8082");
})