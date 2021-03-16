fs = require('fs');
const { readFile } = require("fs/promises");
const chai = require('chai')
const expect = chai.expect;

let expected = "This is the message."

describe("Test asynchronous code", () => {

    //using a callback function
    it("should return the intended output", done => {
        fs.readFile('./test/message.txt', 'utf8', function (err, data) {

            expect(data).to.equal(expected)
            done()
        });
   })
  
    //using promises
    it("should return another output", () => {
        return readFile('./test/message.txt','utf-8').then(result => {
            expect(result).to.equal(expected)
        })
    })

    //using async/await
    it("should return a different output", async () => {
        let result = await readFile('./test/message.txt', 'utf-8')
        expect(result).to.equal(expected)

    })
})