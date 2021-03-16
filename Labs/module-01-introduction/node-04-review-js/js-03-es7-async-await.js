async function printString(message){
    setTimeout(() =>  { console.log(message); }, 300); 
}
async function printMyAsync(){
    await printString("one")
    await printString("two")
    await printString("three")
  }

printMyAsync();