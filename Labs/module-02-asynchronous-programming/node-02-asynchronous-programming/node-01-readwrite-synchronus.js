const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, 'hello.txt');

const contents = fs.readFileSync(filepath, "utf8");
console.log("File Contents:", contents);

const upperContents = contents.toUpperCase();

fs.writeFileSync(filepath, upperContents);
console.log("File updated.");
