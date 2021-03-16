const events = require("events");

var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = () => {
   console.log("Listner1 executed.");
}

// listener #2
var listner2 = () =>{ 
   console.log("Listner2 executed."); 
}

// Bind the connection event with the listner1 function
eventEmitter.addListener("connection", listner1);

// Bind the connection event with the listner2 function
eventEmitter.on("connection", listner2);

var eventListeners = eventEmitter.listenerCount("connection");
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event
eventEmitter.emit("connection");

// Remove the binding of listner1 function
eventEmitter.removeListener("connection", listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event
eventEmitter.emit("connection");

var eventListeners = eventEmitter.listenerCount("connection");
console.log(eventListeners + " Listner(s) listening to connection event");
