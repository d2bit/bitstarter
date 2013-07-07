var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
//fs.openSync('index.html','r');
var buf = new Buffer(256);
fs.readSync('index.html', buf);

app.get('/', function(request, response) {
    response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});