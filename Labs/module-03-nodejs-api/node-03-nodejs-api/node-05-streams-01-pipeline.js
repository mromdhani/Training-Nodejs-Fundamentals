const fs = require('fs');
const zlib = require('zlib')

// Compression
function compress (source, target)  {
    let readableStream = fs.createReadStream(source, { encoding: 'utf8' });
    let compressedStream = zlib.createGzip();
    let writeableStream = fs.createWriteStream(target, { encoding: 'utf8' });
    readableStream.pipe(compressedStream).pipe(writeableStream);
}

compress('./demos/simpleText.txt', './demos/simpleText.txt.gz');
console.log("See the demos folder, and check that the gzip file has been generated");
