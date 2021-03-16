const http = require('http')
require('dotenv').config();

// How to pass the PORT from the Command line
// MS DOS     > SET PORT=3002 && node node-04-http-server.js
// Powershell > $env:PORT=3338 ; node node-04-http-server.js
// Bash SHELL > PORT=3333 node node-04-http-server.js
// From env file :
//    - npm install dotenv --save
//    - add this require : require('dotenv').config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method !== "GET") return error(res, 405);
  if (req.url === "/todo") return todo(res);
  if (req.url === "/") return index(res);
  error(res, 404);
});

function error(res, code) {
  res.statusCode = code;
  res.end(`{"error": "${http.STATUS_CODES[code]}"}`);
}

function todo(res) {
  res.end('[{"task_id": 1, "description": "walk dog"}]}');
}

function index(res) {
  res.end('{"name": "todo-server"}');
}

server.listen(PORT, () => {
  console.log(`Server listening on port ${server.address().port}`);
});
