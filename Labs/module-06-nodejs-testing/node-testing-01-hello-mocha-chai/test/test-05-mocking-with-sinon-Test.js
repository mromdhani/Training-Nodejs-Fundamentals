// npm i --save-dev sinon
// https://scotch.io/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs


const fs = require("fs");
const chai = require('chai')
const expect = chai.expect;

// import sinon
const sinon = require("sinon");

let expected = "This is the message."

describe("Test asynchronous code with mocks", () => {

    //using a callback function
    it("should return the intended output", () => {

        let fake = sinon.fake.yields(null, 'This is the message.');
        sinon.replace(fs, 'readFile', fake);

        sinon
        .stub(fs, 'readFileSync')
        .withArgs('foo.txt', 'utf8')
        .returns('fake text')

        fs.readFile('./test/message.txt',(err,data)=>{  expect(data).to.equal(expected)});
   })
})
