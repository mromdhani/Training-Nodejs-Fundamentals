# Lab 02- Asynchronous Programming in Node.js
---


### Lab Steps
- [Step 1: Read and Write a file: Compare the synchronous and the asynchronous modes](#step-1-read-and-write-a-file-compare-the-synchronous-and-the-asynchronous-modes)
- [Step 2: Using Named Functions in Callbacks](#step-2-using-named-functions-in-callbacks)
- [Step 3: Using Timers in Callbacks](#step-3-using-timers-in-callbacks)
- [Step 4: Converting Callbacks to Promises using util.promisify](#step-4-converting-callbacks-to-promises-using-utilpromisify)
- [Step 5: Converting Callbacks to Promises using fs.promises](#step-5-converting-callbacks-to-promises-using-fspromises)
- [Step 6: Converting Callbacks to Promises using raw Promises](#step-6-converting-callbacks-to-promises-using-raw-promises)
- [Step 7: Converting Callbacks to async/await](#step-7-converting-callbacks-to-asyncawait)
- [Step 8: Event-Driven Development using EventEmitter](#step-8-event-driven-development-using-eventemitter)


Node.js promotes an asynchronous coding style from the ground up, in contrast to many of the most popular web frameworks. 

All the steps of this lab are in included in the folder `node-02-asynchronous-programming-starter` in your Workspace. 

# Step 1: Read and Write a file: Compare the synchronous and the asynchronous modes

Let's consider, first, an example of synchronous code in Node.js. With this mode, we should be aware that the world is paused until the execution of the synchronous function finishes. This would block the thread loop since I/O operations are time consuming.

- Open the file `node-01-readwrite-synchronus.js` and verify the synchronous style of the given code. The example code reads, the writes synchronously a text file. 

Now, we are considering the asynchronous version of the code seen in the previous step.

- Open the file `node-02-asynchronus-01-callbacks.js` and verify the asynchronous style of the given code. The example code reads, the writes synchronously a text file. Here is the provided code.
```javascript
const fs = require("fs");
const path = require("path");
const filepath = path.join(process.cwd(), "hello.txt");
fs.readFile(filepath, "utf8", (err, contents) => {
  if (err) {
    return console.log(err);
  }
  console.log("File Contents:", contents);
  const upperContents = contents.toUpperCase();
  updateFile(filepath, upperContents);
});
function updateFile(filepath, contents) {
  fs.writeFile(filepath, contents, function (err) {
    if (err) throw err;
    console.log("File updated.");
  });
}
```
- Run the example. Notice the syntactical style of the asynchronous call. There is no async syffix in the name of the methods as they are all asynchronous by default. There is a callback that handles the data when the asynchronous operation finishes. Notice alse the error argument that enables handling errors. it is the first argument of the callback.The error-first Node-style callbacks is what was originally used by Ryan Dahl and it is now pretty universal and expected for any asynchronous functions that take callbacks.

# Step 2: Using Named Functions in Callbacks

In this step, we are refactoring the previous example in order to use a named function within the callback. This is one of the approaches to avoid the callback hell. Another approach would be the use of Promises.   
- Open the js file `node-02-asynchronus-02-callbacks-using-named-function.js`. Review the code. Identify the function wich is called within the callback. This is the code:

```javascript
const fs = require("fs");
const path = require("path");
const filepath = path.join(process.cwd(), "hello.txt");
fs.readFile(filepath, "utf8", (err, contents) => {
  if (err) {
    return console.log(err);
  }
  console.log("File Contents:", contents);
  const upperContents = contents.toUpperCase();
  updateFile(filepath, upperContents);
});
function updateFile(filepath, contents) {
  fs.writeFile(filepath, contents, function (err) {
    if (err) throw err;
    console.log("File updated.");
  });
}
``` 
- Run the program.
  
# Step 3: Using Timers in Callbacks

In this step, we are introducing a timer in the callback function.    
- Open the js file `node-02-asynchronus-03-callbacks-timeout.js`. Review the code. Identify the function which is called within the callback. Timer functions like `setInterval` and `setTimeout` in Node.js return a Timeout object, representing the ongoing timer. These can be passed to `clearInterval` or `clearTimeout` to shutdown the timer entirely, but they also have a little-used `unref()` method. This does something magical: it keeps running your code, but stops it from keeping the process alive. This is the code of the program.

```javascript
const fs = require("fs");
const path = require("path");
const filepath = path.join(process.cwd(), "hello.txt");
fs.readFile(filepath, "utf8", (err, contents) => {
  if (err) {
    return console.log(err);
  }
  console.log("File Contents:", contents);
  const upperContents = contents.toUpperCase();
  updateFile(filepath, upperContents);
});
function updateFile(filepath, contents) {
  fs.writeFile(filepath, contents, function (err) {
    if (err) throw err;
    console.log("File updated.");
  });
}
``` 
- Run the program.

# Step 4: Converting Callbacks to Promises using util.promisify

In this step, we are converting the Callback to a Promise. The technique presented here is based on the  `util.promisify()` API which was added in Node.js 8.0.0. It allows standard Node.js callback style APIs to be wrapped in a function that returns a Promise.   
An example use of `util.promisify()` is shown below.
```javascript
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
readFile('/some/file')
  .then((data) => { /** ... **/ })
  .catch((err) => { /** ... **/ });
```
- Open the js file `node-02-asynchronus-04-promisify.js`. The code rewrites the Callbacks presented in the previous examples into Promises using `util.promisify`. Review the code and run it. 

# Step 5: Converting Callbacks to Promises using fs.promises

In Node.js V10, functions of the fs can return promises directly, eliminating the extra step and overhead of the old way. This due to its fs/promises API.

In this step, we are converting the Callback to a Promise using fs.promises.

```javascript
const fs = require("fs").promises;  // As of v10.0, you can use fs.Promises
const path = require("path");
const filepath = path.join(__dirname, 'hello.txt');
let upperContents='';
fs.readFile(filepath, "utf8")
    .then( contents => {
              console.log("File Contents:", contents);
              upperContents = contents.toUpperCase();    
              console.log(`Voici le contenu : ${upperContents}`);
              return upperContents;  
    })
    .then( content =>  fs.writeFile(filepath, content))
    .then ( ()=> console.log('File updated'))
    .catch( err => console.log(`${err} occured`));
```
- Open the js file `node-02-asynchronus-05-fs-promises.js`. The code rewrites the Callbacks presented in the previous examples. Review the code and run it. 
  
# Step 6: Converting Callbacks to Promises using raw Promises

In this step, we are converting the Callback to a Promise using raw Promise. In this technique, we write the code of the Promise from the scratch.

We are showing in the code  belowthe Callback version and the equivalent Promise.
```javascript
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
```
- Open the js file `node-02-asynchronus-06-promise-raw.js`. Review the code and run it. 
  
# Step 7: Converting Callbacks to async/await

In this step, we are converting the Callback to async/await. 

```javascript
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
```
- Open the js file `node-03-asynchronus-07-fs-async-await.js`. Review the code and run it. 
 
# Step 8: Event-Driven Development using EventEmitter

Node.js allows us to create and handle custom events easily by using events module. `Event` module includes `EventEmitter` class which can be used to raise and handle custom events.

We are showing the Callback verion and the Promise version.
```javascript
const events = require("events");
var eventEmitter = new events.EventEmitter();
// listener #1
var listner1 = () => {
   console.log("Listner1 executed.");
}
// listener #2
var listner2 = () =>{ 
   console.log("Listner2 executed."); 
}
// Bind the connection event with the listner1 function
eventEmitter.addListener("connection", listner1);
// Bind the connection event with the listner2 function
eventEmitter.on("connection", listner2);
var eventListeners = eventEmitter.listenerCount("connection");
console.log(eventListeners + " Listner(s) listening to connection event");
// Fire the connection event
eventEmitter.emit("connection");
// Remove the binding of listner1 function
eventEmitter.removeListener("connection", listner1);
console.log("Listner1 will not listen now.");
// Fire the connection event
eventEmitter.emit("connection");
var eventListeners = eventEmitter.listenerCount("connection");
console.log(eventListeners + " Listner(s) listening to connection event");
```
- Open the js file `node-04-event-emitter.js`. Review the code and run it. 

