var http = require('http');
var server = http.createServer(function(req, res){
   res.writeHead(200, { "Content-Type": "text/plain" });
   res.end("welcome to this web module application!!!");

});
server.listen(8082);
console.log("server listening on 8082");