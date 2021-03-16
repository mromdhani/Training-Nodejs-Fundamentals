
const http = require('http');

http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('Hello World!');
    })
    .listen(3000, ()=> console.log('The server is listening on port 3000'));