const User = require('./node-02-module-03-exports-default-object');
const jim = new User('Jim', 37, 'jim@example.com');

console.log(jim.getUserStats());