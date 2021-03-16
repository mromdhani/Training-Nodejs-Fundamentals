
// synchronously load CommonJS module
const cjsModule = require('./node-02-module-01-exports');
console.log(`CommonJS Module loaded synchronously from an CJS Module: ${cjsModule.getLocation()}`);

// asynchronously load ES module using CommonJS
async function main() {
  const {sayHello} = await import('./node-02-module-06-esm-01-export.mjs');
  console.log(`ES Module loaded asynchronously from a CJS module: ${sayHello()}`);
}
main();