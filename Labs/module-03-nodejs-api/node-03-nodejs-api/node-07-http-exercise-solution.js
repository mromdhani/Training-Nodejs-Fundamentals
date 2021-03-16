const http = require("http");
const fs = require("fs");
const path = require("path");

const form = fs.readFileSync(path.join(__dirname, "public", "form.html"));

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      get(res);
      return;
    }
    if (req.method === "POST") {
      post(req, res);
      return;
    }
    error(405, res);
  })
  .listen(3000, () => {
    console.log(`The Exercise Server Server running ...`)
  })

function get(res) {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.end(form);
}

function post(req, res) {
  if (req.headers["content-type"] !== "application/json") {
     error(415, res);
    return;
  }

  let input = "";

  req.on("data", (chunk) => {
    input += chunk.toString();
  });

  req.on("end", () => {
    const parsed = JSON.parse(input);

    if (parsed.err) {
      error(400, "Bad Request", res);
      return;
    }
    let name =  parsed['name'];
    let age =  parsed['age'];

    res.setHeader('content-type', 'text/plain');
    let message = (age >=20) ? `<p> Mr/Mm <span style=color:blue;font-weight:bold>${name}</span>, You are <span style=color:blue;font-weight:bold>an OLD </span>person  </p>`
                      :
                `<p> Mr/Mm <span style=color:blue;font-weight:bold>${name}</span>, You are <span style=color:blue;font-weight:bold>a YOUNG </span> person  </p>`;
    res.end( message )
           

  });
}

function error(code, res) {
  res.statusCode = code;
  res.end(http.STATUS_CODES[code]);
}
