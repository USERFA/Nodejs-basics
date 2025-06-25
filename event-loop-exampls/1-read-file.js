const fs = require("fs");
console.log("Started first task");

//read file is synchronous
fs.readFile('../content/first','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;        
    }else{
        console.log(result);
        console.log("Completed first task");
    }
})

console.log("Starting next task");

//run all tasks then callback...
// output:
// Started first task
// Starting next task
// Hello, this is the first file
// Completed first task