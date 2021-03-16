const https = require('https');
const fs = require('fs');

/*  HOW TO Generate the X509 Certificate

    openssl genrsa -out privatekey.pem 1024 
    openssl req -new -key privatekey.pem -out certrequest.csr 
   openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
*/


const options = {
  key: fs.readFileSync('certificates/privatekey.pem'),
  cert: fs.readFileSync('certificates/certificate.pem')
};

const port = process.env.PORT_HTTPS || 3443

const server = https.createServer(options, (req, res) => {

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  res.end('<h1>From Secured Server Hello, World!</h1>')
})
server.listen(port, () => {
  console.log(`The Secure Server Server running at port ${port}`)
})