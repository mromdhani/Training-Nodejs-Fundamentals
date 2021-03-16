const fs = require('fs')
const path = require('path')

const filePath = './lib/data.json';

// Reading a text file asynchrously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
      console.error(err)
      return
  }
  console.log(`\nReading a text file:`)
  console.log(`Contents of the data.json file : ${data}`)
})
// Reading a text file asynchrously
fs.writeFile(path.join(__dirname, 'lib/NewText.txt'), 'Hello World!', function (err) {
  if (err)
      console.log(err);
  else
      console.log('Write operation complete. Check the file NewText.txt in the current folder');
});

 
// Open a Directory and list its files
fs.readdir(path.join(__dirname, 'lib'), (err, files) => {
  if (err) {
    console.error(`Err: ${err.message}`)
  } else {
    files.forEach(file => {
      console.log(`Open dir, File:  ${file}`);
    })
  }
})