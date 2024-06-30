var net = require('net');
var read_file = require('read_file');

const PORT = 8082;
const HOST = "localhost";

const client = new net.Socket();

client.connect(PORT, HOST,function(){
  console.log("connection has been established with server");
  var mydata = read_file.question("Enter some data for sending it to the server");
  client.write(mydata);
});

client.on("data", function(data){ 
  console.log("data received from server is : %s",data);
  client.end();
})

client.on("end",function(){
  console.log("Request is ended successfully");
})