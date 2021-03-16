const fs = require('fs')

const data = 'Writable Stream Example'

const writerStream = fs.createWriteStream('demos/writable.txt')

writerStream.write(data, 'UTF8')

writerStream.end()

writerStream.on('finish', function () {
    console.log('Writing completed');
})

writerStream.on('error', function (err) {
    console.log(err.stack)
})

console.log('Streaming Ended')