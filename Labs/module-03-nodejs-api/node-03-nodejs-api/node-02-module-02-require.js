const user = require('./node-02-module-01-exports');
console.log(
  `${user.getName()} lives in ${user.getLocation()} and was born on ${user.dob}.`
);