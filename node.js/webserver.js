var http = require('http');
var server = http.createServer(function(req, res){
  if(req.url == "/");{
  res.writeHead(200,{"content-type":"text/plain"});
  res.write("<html><body><h1>Welcome to web page</h1></body></html>")
  res.end();
   }

   else if(req.url =="/About"){
    res.writeHead(200,{"content-type":"text/plain"});
    res.write("<html><body><h1>About page</h1></body></html>");
    res.end();
   }

   else if(req.url == "/Contact"){
    res.writeHead(200,{"content-type":"text/plain"});
    res.write("<html><body><h1>Contact page</h1></body></html>");
    res.end();
   }
   else 
   res.end("This is invalid request");
});

server.listen(8082);
console.log("Server is running on port 8082");