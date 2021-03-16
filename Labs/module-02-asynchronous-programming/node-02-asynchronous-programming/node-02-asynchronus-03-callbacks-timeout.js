const fs = require("fs");
const path = require("path");

const filepath = path.join(process.cwd(), "hello.txt");

fs.readFile(filepath, "utf8", (err, contents) => {
  if (err) {
    return console.log(err);
  }
  console.log("File Contents:", contents);
  const upperContents = contents.toUpperCase();

  // The setTimeout() method calls a function or evaluates an expression 
  // after a specified number of milliseconds.
  setTimeout(() => updateFile(filepath, upperContents), 2000);
});

function updateFile(filepath, contents) {
  fs.writeFile(filepath, contents, function (err) {
    if (err) throw err;
    console.log("File updated.");
  });
}

// unref() don't let that keep the process alive!
// It run as normal while the process is alive, but if the rest of the event queue 
// is empty then they're ignored, and the process exits anyway.
setInterval(() => process.stdout.write("**** \n"), 1).unref();
