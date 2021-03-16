const fs = require("fs").promises;
const path = require("path");

const filepath = path.join(__dirname, "hello.txt");

async function DoItWithAsyncAwait() {
  try {
    let contents = await fs.readFile(filepath, "utf8");
    console.log("File Contents:", contents);
    let upperContents = contents.toUpperCase();
    await fs.writeFile(filepath, upperContents);
  } catch (e) {
    console.log(e.message);
  }
}

DoItWithAsyncAwait();
