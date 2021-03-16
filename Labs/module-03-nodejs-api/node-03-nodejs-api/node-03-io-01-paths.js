const path = require("path");


// Path information
const filePath = './pictures/hello.jpeg';
console.log(`Base name ${path.basename(filePath)}`);
console.log(`Dir name ${path.dirname(filePath)}`);
console.log(`Extension name ${path.extname(filePath)}`);

// Joining Paths
const join = '/path';
const joinArg = '/to/my/file.txt';
console.log(`Joined ${path.join(join, joinArg)}`);
console.log(`Concat ${path.join(join, 'user','files','file.txt')}`)


// Absolute path
console.log(`Abs path ${path.resolve(joinArg)}`);
console.log(`Abs path ${path.resolve("info.txt")}`);

// Normalize paths
console.log(`Normalize ${path.normalize('/path/to/file/../')}`)