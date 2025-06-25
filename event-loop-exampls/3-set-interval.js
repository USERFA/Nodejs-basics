setInterval(()=>{
    console.log("Hello world");
},2000)
console.log("I will run first");
// process stays alove unless hitting ctrl+c
// every 2 s , the event loop will invoke the callback