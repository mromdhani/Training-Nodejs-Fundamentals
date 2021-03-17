# Lab 05- Accessing to MongoDB Data bases 
---


### Lab Steps



# Step 1: Set up a MongoDB Server using Docker and a VS Code Extension for MongoDB
Docker enables to spin up quickly a MongoDB Server as an isolated container.

- Create the following Docker-compose file, named it `docker-compose.yaml`

```yaml
version: "3.8"
services:
  mongodb:
     image : mongo
     container_name: mongodb
     volumes:
        - ./mongodb:/data/db
     ports:
       - 27017:27017
     restart: unless-stopped
```
- Start the container using the command:
```shell
docker-compose up
```
- To stop the the container, rum the command:
```shell
docker-compose down
```
- Install the **MongoDB Extension for VS Code** extension in order to use it as client to the MongoDB server.
  
# Step 2: Accessing MongoDB using MongoClient

Implement the step by step examples to get started with MongoiClient and MongoDB.

# Step 3: Accessing MongoDB using the Mongoose ODM

# Step 4: Building a CRUD service using Express and Mongoose 

In Node every file is considered a module and before each file (module) is executed, it's wrapped within a Module Wrapper function which exposes the following variables/arguments module, exports, require, filename, dirname and looks something like;

```javascript
(function(exports, require, module, __filename, __dirname) {
  // module code goes in here
});
```
The exports and module object exposed by the wrapper function enable the module to expose functions/objects to be used by other modules. 
The require object allows for the module to import other module(s)
The Node.js module system is an implementation of the **CommonJS specification**.

## Creating, exporting and importing a Module

In `node-02-module-01-exports.js`, we exporting multiple methods and values.
```javascript
const getName = () => {
  return 'Bruno';
};
const getLocation = () => {
  return 'Brussels';
};
const dateOfBirth = '12.01.1982';
exports.getName = getName;
exports.getLocation = getLocation;
exports.dob = dateOfBirth;
```
We are using the module in `node-02-module-02-require.js`.

```javascript
const user = require('./user');
console.log(
  `${user.getName()} lives in ${user.getLocation()} and was born on ${user.dob}.`
);
```

- In the example `node-02-module-03-exports-default-object.js`, we are exporting a default object. We are requiring that object in example `node-02-module-04-require-default-object.js`.

- In the example `node-02-module-05-module-exports.js`, we are exporting a composite object object. We are selectively requiring a part of the exposed elements in example `node-02-module-05-require-module-exports.js`. We are using the destructuring syntax (new in ES6).

## Working with ES6 Modules

To use ES 6 modules in Node.js apps (Starting from Node.js v13), You need to either:
- Save the file with .mjs extension, or
- Add { "type": "module" } in the nearest `package.json`.

For Node.js versions that are less than v12, save the file with ES6 modules with `.mjs` extension and run it like: `node --experimental-modules my-app.mjs`

- In example `node-02-module-06-esm-01-export.mjs` we are exporting an ES6 module. We are requiring that module in the example `node-02-module-06-esm-01-import.mjs`. Note that both of the files have the extension .mjs.

-In example `node-02-module-07-interop-commonjs-esm.js`, we are mixing the import of a CommonJS module and an ES6 module in the same program.

- In example `node-02-module-08-using-external-modules.js`, we are importing an external module using the syntax of ES6 module i.e `import` keyword. Notice that we should here add the entry `type=module` in package.json. 
  
# Step 3: I/O

- Practice the methods of the path API which are inluded in `node-03-io-01-paths.js`.
- Practice the methods of the file and directory manipulations which are inluded in `node-03-io-02-files-directories.js`.

  
# Step 4: Buffer API

The Buffer class in Node.js is designed to handle raw binary data. Each buffer corresponds to some raw memory allocated to it.

-  Practice the methods of the Buffer which are inluded in `node-04-buffers.js`.

# Step 5: Node.js Streams

 Streams are objects that let you read data from a source or write data to a destination in continuous fashion.

-  Practice the Stream pipeling which are inluded in `node-05-streams-01-pipeline.js`.
-  Practice the Http Streams which are inluded in `node-05-streams-02-http-stream.js`.
-  Practice an example of writable Streams which is inluded in `node-05-streams-03-writable-streams.js`.
  
  # Step 6: The Http/Https API 

 -  Practice the Http example which is inluded in `node-06-http-server-revisited.js`.
 -  Generate a X509 Self signed certificate and practice the example included in `node-06-https-server`. the instructions for certificate generation are included in the same file.

# Step 7: Exercise 

 A starter for an HTTP endpoint server is provided in `node-07-http-exercise-starter.js`. It accepts a form data composed of a name and an age of a a person. Complete the logic of the service in order to return back if the person is YOUNG (age <20 ) or OLD (age >=20).
 

