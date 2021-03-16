const http = require("http")
const fs = require("fs")

const port = process.env.PORT || 3000

const server = http.createServer(function (req, res) {
    // Here, when the reading of the file is completed then the server will send a response. 
    // So, if the file is very big, then it takes some time to read the whole file and then sending 
    // back to the client.
    // fs.readFile("demos/simpleText.txt", (err, data) => {
    //     res.end(data);
    // });

    const stream = fs.createReadStream('demos/simpleText.txt')
    stream.pipe(res)
});
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
