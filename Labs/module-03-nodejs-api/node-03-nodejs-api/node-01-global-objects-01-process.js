// print current working directory
console.log(`Starting directory: ${process.cwd()}`);

console.log(`This platform is ${process.platform}`);
console.log(`Process PID: ${process.pid}`);  
console.log(`The CPU Architecture is: ${process.arch}`);  

// change working directory to Documents
process.chdir('../');   
console.log(`Ending directory: ${process.cwd()}`);