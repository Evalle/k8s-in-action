var http = require('http');
var os = require('os');

var handler = function(request, response) {
    response.writeHead(200);
    response.end("You've hit " + os.hostname());
}

var www = http.createServer(handler);
www.listen(8080);
