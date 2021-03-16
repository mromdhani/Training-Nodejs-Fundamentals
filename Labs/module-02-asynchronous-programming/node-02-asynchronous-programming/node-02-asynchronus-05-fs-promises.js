const fs = require("fs").promises;  // As of v10.0, you can use fs.Promises
const path = require("path");

const filepath = path.join(__dirname, 'hello.txt');

let upperContents='';
fs.readFile(filepath, "utf8")
    .then( contents => {
              console.log("File Contents:", contents);
              upperContents = contents.toUpperCase();    
              console.log(`Voici le contenu : ${upperContents}`);
              return upperContents;  
    })
    .then( content =>  fs.writeFile(filepath, content))
    .then ( ()=> console.log('File updated'))
    .catch( err => console.log(`${err} occured`));
