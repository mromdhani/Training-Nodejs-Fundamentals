interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 var militant :IPerson = { 
    firstName:"Nelson",
    lastName:"Mandela", 
    sayHi: ():string =>{return "Hi there"} 
 } 
 
 console.log("Militant Object ") 
 console.log(militant.firstName) 
 console.log(militant.lastName) 
 console.log(militant.sayHi())  