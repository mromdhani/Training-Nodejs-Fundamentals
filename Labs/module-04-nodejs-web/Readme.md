# Lab 04- Web and REST Developemnt
---


### Lab Steps
- [Step 1: Getting Stated with Express](#step-1-getting-stated-with-express)
- [Step 2: Web Rendering with ejs](#step-2-web-rendering-with-ejs)
- [Step 3: Creating a Custum Middleware](#step-3-creating-a-custum-middleware)
- [Step 4: Scaffolding Applications with "Express Generator"](#step-4-scaffolding-applications-with-express-generator)
- [Step 5: Adding nodemon to Express](#step-5-adding-nodemon-to-express)
- [Step 6: Building REST Controllers](#step-6-building-rest-controllers)
- [Step 7: Error Handling](#step-7-error-handling)

# Step 1: Getting Stated with Express
Express is a web application framework for Node.js that allows you to create APIs and web servers in a much easier and cleaner way. It is a lightweight package that does not obscure the core Node.js features.

- Create and initialize the project
In module 4 folder, create a folder for the Express project and call it `node-web-01-expressjs-hello`. CD into the folder, initialize `npm` and add the `Express` dependency.
```shell
npm init --yes
npm install express --save
```
Create the two following folders:
```
```shell
mkdir public styles
```

- Create the Express server
In the root of the project folder, create a file named `app.js` and set it as follows:
```javascript
const express = require('express');
const app = express();
```
- With the first line, we import Express into your project so we can use it. 
- In the second line, we call the express function, which creates a new application and then assigns the result to the app constant.

Now let's define the port that the server will be listening, it's a great idea to take that from the environment variables, so could be easily configurated and by default we will set it as `3000`.

```javascript
const PORT = process.env.PORT || 3000;
```
At last, we must start our server! We are passing the port into the listen function. The function passed-in as the second optional parameter, and runs when the server starts up. This just gives us some feedback on the console to know that our application is running.

```javascript
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);    
});
```
Now we have a basic server:
```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);    
});
```
- Basic Routing
The main responsibility of any server is how the application responds to the client request to specific endpoints like path by specific HTTP methods. In the server-side routing, each route has one route method, one route path, and one or more route handler functions.

- CD into the `routes` and create a file named `index.js`. It contains the router for the landing page. Set the content of `index.js` as follows:
```javascript
router.get('/', (req, res) => {
    const title = 'Express';
    res.send(`
        <html><head>
                <title> ${title} </title>
                <link rel='stylesheet' href='styles.css'>
              </head>
              <body>
                <h1> ${title} </h1>
                <p> Welcome to ${title} </p>
               </body>
        </html>
        `);
});
module.exports = router;
```
Add the following line to `app.js` in order to inject the router in the application. Add it before starting listening.
```javascript
app.use('/', index);
```
Add the following line to `app.js` in order to require the router module. Add on the topof the file just below the existing requires.
```javascript
const index = require('./routes/index');
```
The `app.js` content shoul finally look like the following :
```javascript
const express = require('express');
const path = require('path');
const index = require('./routes/index');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);    
});
```
- Adding static assets
We add now some basic styling for the site. Under the folder  `public` and a file named `styles.css` within it. Set the contents of css file as follows:
```css
body {
    padding: 50px;
    font: 14px 'Lucida Grande', Helvetica, Arial, sans-serif;
}
```
In `app.js`, add the following instruction in order to let express able to resolve the location of the css file.
```javascript
app.use(express.static(path.join(__dirname, 'public')));
```
We can now test the application by  starting the app and connecting to <http://localhost:3000>.
Stop the server when you have finished the tests.

# Step 2: Web Rendering with ejs
EJS is a simple templating language that lets you embed Javascript into HTML templates. 

In the project, the HTML content was rendered as static HTML. We aim to refactor the application in order to externalize the HTML content into a separate view. By the way, we want template the HTML content in order to receive a value for the title, this value is resolved using EJS.

-  In `app.js`, set the `view engine` property of Express to `ejs`. 
```javascript
app.set('view engine', 'ejs');
```

- Create a folder named `views` and add a new file `index.js` to hold the view. its content should look like this:
```html
<html>
  <head>
    <title><%= title %></title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
  </body>
</html>
```
- Update the content of the router `index.js` in order to let it dispatch the request to the view.
```
router.get('/', (req, res) => {

    res.render('index', {
        title: 'Express with EJS',
    });
});   
```
- Start the `app` Launch the Browser and check the result by connectiong to <http://localhost:3000>
- Stop the `app` after testing.
  
# Step 3: Creating a Custum Middleware
Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

In this step, we are creating a simple Logging middleware. 
- Create a folder for the middlware. Add a file for the mmiddlware code :
```shell
mkdir middleware
cd middleware
mkdir logger.js
```
- Set the content of the middleware:
```javascript
module.exports = logger;
function logger() {
    return (req, res, next) => {
        console.log(new Date().toLocaleString(),' Request received:', req.method, req.url);
        next();
    };
}
```
- Import the middlware module and inject in app.js.
```javascript
const logger = require('./middleware/logger');
```
```javascript
app.use(logger());
```
**Question** : explain the role of `next()` call in the middleware.

- Run the application and check that the middleware has been activated within the request processing pipeline.

** Exercise:** The logger middleware triggers twice when you send a request to <http://localhost:3000>. Explain why and update the appliaction in a way that the logger triggers once per access to landing page.

# Step 4: Scaffolding Applications with "Express Generator"
**express-generator** is a tool for quickly creating Express application skeleton.
You can run the application generator with the `npx` command (available in Node.js 8.2.0).

```shell
$ npx express-generator
```
For earlier Node versions, install the application generator as a global npm package and then launch it.

```shell
$ npm install -g express-generator
$ express
```
Display the command options with the -h option:

```shell
$ express -h
  Usage: express [options] [dir]

  Options:
    -h, --help          output usage information
        --version       output the version number
    -e, --ejs           add ejs engine support
        --hbs           add handlebars engine support
        --pug           add pug engine support
    -H, --hogan         add hogan.js engine support
        --no-view       generate without view engine
    -v, --view <engine> add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory
```
For example, the following creates an Express app named `node-web-04-expressjs-express-generator`. The app will be created in a folder named `node-web-04-expressjs-express-generator` in the current working directory and the view engine will be set to Pug:

```shell
$ express --view=ejs node-web-04-expressjs-express-generator
   create : node-web-04-expressjs-express-generator
   create : node-web-04-expressjs-express-generator/package.json
   create : node-web-04-expressjs-express-generator/app.js
   create : node-web-04-expressjs-express-generator/public
   create : node-web-04-expressjs-express-generator/public/javascripts
   create : node-web-04-expressjs-express-generator/public/images
   create : node-web-04-expressjs-express-generator/routes
   create : node-web-04-expressjs-express-generator/routes/index.js
   create : node-web-04-expressjs-express-generator/routes/users.js
   create : node-web-04-expressjs-express-generator/public/stylesheets
   create : node-web-04-expressjs-express-generator/public/stylesheets/style.css
   create : node-web-04-expressjs-express-generator/views
   create : node-web-04-expressjs-express-generator/views/index.ejs
   create : node-web-04-expressjs-express-generator/views/error.ejs
   create : node-web-04-expressjs-express-generator/bin
   create : node-web-04-expressjs-express-generator/bin/www
```
Then install dependencies:

```shell
$ cd node-web-04-expressjs-express-generator
$ npm install
```
On Windows Command Prompt, use this command:

```shell
> set DEBUG=node-web-04-expressjs-express-generator:* & npm start
```
On Windows PowerShell, use this command:

```shell
PS> $env:DEBUG='node-web-04-expressjs-express-generator:*'; npm start
```
Then load <http://localhost:3000/> in your browser to access the app.

The generated app has the following directory structure:

```shell.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.ejs
    ├── index.ejs
```    

# Step 5: Adding nodemon to Express

**nodemon** is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. 
The objective of this step is to integrate nodemon within our project.

-  Open the project `node-web-05-expressjs-express-generator-nodemon`
-  Install nodemon as **development dependency** for the project.
```shell
$  npm i --save-dev nodemon
```
- Configure the starter scripts in `package.json` as follows:
```shell
  "scripts": {
    "start": "node ./bin/www",
    "dev": "SET DEBUG=node-web-05-expressjs-express-generator-nodemon:* & nodemon ./bin/www"
  }
```
- Lauch the application with
```shell
npm run dev
```
- Check that if you change any file, the nodemon will relaunch the server instantly.

# Step 6: Building REST Controllers
In this step we are going to develop an example of HTTP REST Controller. We will follow these steps
1. Create new Node.js Project with Express.js
2. Create and Run API endpoints.
3. CRUD Operations and HTTP methods.
4. Fix No "Access-Control-Allow-Origin" (CORS feature)

Let's start:

1. Create New Project (using Node.js with Express.js)
Use express-generator to create a new project named `node-web-06-expressjs-REST-controllers`.

Open up and update your server.js file with below code:
```javascript
const http = require('http');
const express = require('express');
const app = express();
app.use(express.json());
// default URL to API
app.use('/', function(req, res) {
    res.send('node-ex-api works :-)');});
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);
```
Run the project with `npm start`  and connect to URL: http://localhost:3000. Test that the API works.

2. Create API endpoints
- Create the following file under routes called `items.js`. Set it as follows:

```javascript
const express = require('express');
const router = express.Router();

// create a JSON data array
let data = [
    { id: 1, title: 'Create a project',  order: 1, completed: true, createdOn: new Date() },
    { id: 2, title: 'Take a coffee',     order: 2, completed: true, createdOn: new Date() },
    { id: 3, title: 'Write new article', order: 3, completed: true, createdOn: new Date() },
    { id: 4, title: 'Walk toward home', order: 4, completed: false, createdOn: new Date() },
    { id: 5, title: 'Have some dinner', order: 5, completed: false, createdOn: new Date() },
];
// this end-point of an API returns JSON data array
router.get('/', function (req, res) {
    res.status(200).json(data);
});
// this end-point returns an object from a data array find by id
// we get `id` from URL end-points
router.get('/:id', function (req, res) {
    // find an object from `data` array match by `id`
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    // if object found return an object else return 404 not-found
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});
module.exports = router;
```
- Register API endpoints
Lets register it in the "server.js" file to make use of new endpoint.

```javascript
const http = require('http');
const express = require('express');
// import `items` from `routes` folder 
const itemsRouter = require('./routes/items');
// create new app
const app = express();
app.use(express.json());
/* this '/items' URL will have two end-points:
→ localhost:3000/items/ (this returns array of objects)
→ localhost:3000/items/:id (this returns single object)*/
app.use('/items', itemsRouter);
// default URL to API
app.use('/', function(req, res) {
    res.send('node-ex-api works :-)');
});
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);
```
3. CRUD Operations and HTTP methods.

```code 
For Create we will create new end-point router.post('/', .......) 
  → localhost:3000/items (With post request)
For Read we already have two end-points:
→ localhost:3000/items (Returns all objects)
→ localhost:3000/items/1 (Returns single object of id=1)
For Update we will create new end-point router.put('/', .......)
→ localhost:3000/items (With put request)
For Delete we will create new end-point router.delete('/', .......)
→ localhost:3000/items (With delete request)

```
Yet we have a list of items ( localhost:3000/items). Next task is to manage this list. To do so we need to have CRUD operations Create, Read, Update and D elete over the list of items. The implementation is provided already. Try to walk through it.

4. Fix No "Access-Control-Allow-Origin"
You may face this error:
No 'Access-Control-Allow-Origin'’ while calling these APIs from another application. Some minor changes required to fix this error. Do not forget to install **CORS**.
Open your terminal in the "node-ex-api" folder and run this command:
```shell
npm install cors
```
Next, open up your node-ex-api/server.js file and add below code:
```shell
// import required essentials
...
let cors = require('cors');
...
// create new app
const app = express();
app.use(express.json());
// use it before all route definitions
// allowing below URL to access these APIs end-points
app.use(cors());
```
# Step 7: Error Handling

- Open the project `node-web-07-expressjs-error-handling` and review its code.
- Review the code in the end of `app.js` that handles the errors. Explain the purpose of the twe error related middleware. 

```javascript
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
```
- Open `the bookController.js` file. Notice that theindex actions contains the following code: 
```javascript
let err = new Error(`${req.ip} tried to access Forbidden /catalog`); // Sets error message, includes the requester's ip address!
    err.statusCode = 403;
    next(err);
```
- Launch the program and access the index of books in order how the error is managed.