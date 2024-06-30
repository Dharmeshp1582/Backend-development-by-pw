var http = require("http"); 
var server = http.createServer(function(req, res){
  
  if(req.url == "/"){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><h1>Welcome to this Web Module </h1></body></html>");
    res.end();
  }
  else if(req.url == "/About"){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><h1>Welcome to this About page </h1></body></html>");
    res.end();
  } 
  else if (req.url == "/Contact") {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><h1>Welcome to this Contact page </h1></body></html>");
    res.end();
  }
  else{
    res.end("this is invalid request");

  }
}); 
   server.listen(8082);
   console.log("Server is listening on port 8082");