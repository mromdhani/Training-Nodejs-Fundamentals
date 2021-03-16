# Lab 01- Getting started with Node.js
---


### Lab Steps

- [Step 1: Test your Node.js installation and play with REPL](#step-1-test-your-nodejs-installation-and-play-with-repl)
- [Step 2: Let Node.js says "Hello World"](#step-2-let-nodejs-says-hello-world)
- [Step 3: Hello npm (Node Package Manager)](#step-3-hello-npm-node-package-manager)
- [Step 3: Hello Node.js Server](#step-3-hello-nodejs-server)
- [Step 4 : Review of JavaScript new features](#step-4--review-of-javascript-new-features)
- [Step 5 : Review of TypeScript Syntax](#step-5--review-of-typescript-syntax)


Node.js is a Cross-Platform Runtime Environment for Server-side and Open Source which is written in JavaScript. The Node.jsruntime built on Chrome's V8 JavaScript engine. it is designed to build scalable network applications

# Step 1: Test your Node.js installation and play with REPL

- Launch a command shell and check if `node` and `npm` are installed. Run the following commands.
```code
node -v
npm -v
```
- Start the Node.js interactive REPL using `node` command and evaluate these expressions:
```shell
> 10 +10
> 'bonjour'.toUpperCase()
> console.log('test')
> [1, 2, 3].forEach(num => {
... console.log(num)
... })
```
   - Explore global objects using REPL. You can inspect the globals you have access to by typing global. and pressing <TAB> key:
```shell
> global. <TAB>
> process.versions.v8
``` 
  - To quit REPL interpreter, type `.exit` command or type `CTRL-C` twice.
  
# Step 2: Let Node.js says "Hello World"

- Check that folder `C:\Nodejs-Fundamentals-Workspace` exists . It has been created for you and it represents your worskpace folder for the training. You will use the **starter** folders to do your labs. The **solution** folders contain the soltions. 

- Launch the VS Code Editor either from its shortcut on the desktop, or from the Windows 10 Lauchner or using the command `code` from the command line and open the folder `C:\Nodejs-Fundamentals-Workspace\module-01-introduction-starter\node-01-hello-world`.

- Install the following useful extensions to VS Code:

   - Node developer pack
   - Node-snippets

- From within VSCode, create a new file named `node-01-hello-world.js` in the the folder `node-01-hello-world-starter`. Initialize it as follows:

```javascript
let message = 'Hello World';
console.log(message);
```

- Run the program. Launch a terminal from the menu of VS Code and type the following command. 
  
```shell
node  node-01-hello-world.js 
```
- **Exercice**:  Extend the Hello-world to print the `Hello World` message ten times. 


- Installing and managing the Node.js versions 
Node.js follows a release schedule and adopts a **Long-Term Support (LTS)** policy. Even-numbered major releases of Node.js are promoted to LTS after 6 months. Even-numbered releases are scheduled for release in April and promoted to LTS in October.**It is recommended to use LTS versions of Node.js for production applications**. 
  - Check if  `nvm` is installed, therwise install it using  Chocolatey from an admininstrative Powershellshell: `choco install nvm -y`. 
 
```shell
 nvm version
```

- Install nodejs latest, LTS 14 and LTS 12 using `nvm`

```shell
nvm install latest
nvm install 14.16.0
nvm install v12.12.0
nvm list
```
- Change the default version using `nvm -use`.
In case these command do not have effet, you are probably using a node version that is installed with the windows installer. So, you have to uninstall it from windows.

# Step 3: Hello npm (Node Package Manager)

- Usually when you start a new Node.js project I use `npm` to generate you initial project.

```shell
npm init
```

npm then asks me some questions and builds a `package.json` file for me. Then you start building the project.

`npm init -y` accepts all of the default options that npm init asks you about

- You can see your current npm config by entering `npm config list` on the command line. There are a number of defaults you can set; author name, author email, author url, the license, and the version. 
```shell
npm set init.author.name "PUT HERE YOUR NAME"
npm set init.author.email "yourname@yourdomain.com"
npm set init.author.url "https://your-url.com"
npm set init.license "MIT"
npm set init.version "1.0.0"
```
- Open the folder `node-02-hello-world-npm` and walk through the structure of the project. Open the `package.json` file and notice the `lodash` dependency.
- This is the content of the js file
- 
```javascript
const _ = require('lodash');
let message = 'Hello World';
console.log(_.upperCase(message));
```

- Install the dependency using the proper `npm install` command.
- **Exercise** : Remove completely the `package.json` file and the `node_modules` folder and regenerate them using the proper `npm` commands.


# Step 3: Hello Node.js Server 

- Open the folder `node-03-hello-world-server` and walk through the structure of the project. This is the content of the js file:
```javascript
const http = require('http');
http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('Hello World!');
    })
    .listen(3000, ()=> console.log('The server is listening on port 3000'));
```
- Run the program. Launch your web browser and open <http://localhost:3000>. You should see the 'Hello World' message send by the Node.js web server.
- From the terminal, stop the server by typing `CTRL-C`.
  
# Step 4 : Review of JavaScript new features 
This step is optional. If necessary, walk through the step-by-step examples in the folder `node-04-review-js`.
The features which are included in the examples are the following:
- `let` and `const` keywords
- Lambda expressions
- Promises
- ES7 `async` and `await`
- classes and inheritence
- ES6 modules definition and use  

# Step 5 : Review of TypeScript Syntax
This step is optional. If necessary, walk through the step-by-step examples in the folder `node-05-review-ts`. 
The Typescript features which are included in the examples are the following:
- hello-world Typescript
- Typescript basic types
- interfaces 