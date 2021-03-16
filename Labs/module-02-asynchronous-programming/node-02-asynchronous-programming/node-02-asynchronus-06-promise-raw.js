
const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.error(err);
          return;
    }
    console.log("GOT using a Callback style: "+ data);
});


const readFile = (fileName, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, encoding, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
}

readFile('./hello.txt')
    .then(data => {
        console.log( "GOT using a Raw Promise: "+ data);
    })
    .catch(err => {
        console.log(err);
    });
