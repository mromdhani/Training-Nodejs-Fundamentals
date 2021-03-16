// The keywords let and const add block scoping in JavaScript.
//    - When we declare a variable as let, we cannot re-define or re-declare another let variable 
//       with the same name in the same scope (function or block scope) but we can re-assign a value to it.
//    - When we declare a variable as const, we cannot re-define or re-declare another const variable 
//      with the same name in the same scope (function or block scope). But we can change the values stored in that 
//      variable if the variable is of a reference type like an array or object.

{
    let i = 20;   // var i = 20;

    console.log('inside:', i); // inside: 20
    i = 30;
    console.log('i again:', i); // i again: 30
}

console.log('outside:', i); // Uncaught ReferenceError: i is not defined