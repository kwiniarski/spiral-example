var http = require('http');

var hostname = '127.0.0.1';
var port = 1337;

http.createServer(function (req, res) {

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'X-Powered-By': 'Node.js ' + process.versions.node
  });

  if (req.url.indexOf('/api') === 0) {
    res.end('API\n' + req.url);
  } else {
    res.end('Hello World\n' + req.url);
  }

}).listen(port, hostname, function () {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});
