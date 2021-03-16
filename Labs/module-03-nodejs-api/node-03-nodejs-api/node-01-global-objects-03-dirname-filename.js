const fs = require('fs');
const path = require('path');

// ___dirname vs process.cwd()

console.log(__dirname)      
console.log(process.cwd())  

console.log("filename: ", __filename); 

// Creating a new Directory

const dirPath = path.join(__dirname, '/pictures');

fs.mkdir(dirPath, function (err) {
          if (err)
               console.error(`Directory not created, reason : ${err}`);
          else
               console.log("Directory Created");
     });


// Adding a file to a directory
const filePath = path.join(__dirname, '/pictures/hello.jpeg');
fs.open(filePath, 'w', function (err) {
     if (err)
          console.error(`File Not created, reason : ${err}`);
     else
          console.log("File Created");
});
