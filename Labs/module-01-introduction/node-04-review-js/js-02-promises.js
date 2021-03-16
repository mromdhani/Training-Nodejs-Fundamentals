// Callback demo 
function printString(){
    console.log("Tom"); 
    setTimeout(() =>  { console.log("Jacob"); }, 300); 
    console.log("Mark")
 }
 
 printString();

 // Defining a Promise  
 const myFirstPromise = new Promise((resolve, reject) => { 
    const condition = true;   
    if(condition) {
         setTimeout(function(){
             resolve("Promise is resolved!"); // fulfilled
        }, 300);
    } else {    
        reject('Promise is rejected!');  
    }
});

// using a Promise
myFirstPromise
.then((successMsg) => {
    console.log(successMsg);
})
.catch((errorMsg) => { 
    console.log(errorMsg);
});