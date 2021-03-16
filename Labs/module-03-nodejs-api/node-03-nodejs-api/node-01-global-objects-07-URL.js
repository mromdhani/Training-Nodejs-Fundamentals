const fetch = require("node-fetch");

const url = new URL('https://www.register.com/?name=Ryan Dahl');

console.log(`The url protocol: ${url.protocol}`);
console.log(`The url path : ${url.pathname}`);  
console.log(`The url hostname: ${url.hostname}`);
console.log(url.searchParams.get('name'));
url.searchParams.append('job', 'Software Engineer');

fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => console.log(json))  