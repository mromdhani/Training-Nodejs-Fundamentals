const fs = require("fs");
const path = require("path");
const util = require("util");

const readFilePromise = util.promisify(fs.readFile);  // As of Node.js 8.0.0
const writeFilePromise = util.promisify(fs.writeFile);

const filepath = path.join(__dirname, 'hello.txt');

let upperContents='';
readFilePromise(filepath, "utf8")
    .then( contents => {
              console.log("File Contents:", contents);
              upperContents = contents.toUpperCase();    
              console.log(`Voici le contenu : ${upperContents}`);
              return upperContents;  
    })
    .then( content =>  writeFilePromise(filepath, content))
    .then ( ()=> console.log('File updated'))
    .catch( err => console.log(`${err} occured`));