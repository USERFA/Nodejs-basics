const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("request event");
    res.end("Hello world");
})

//listen is asynchronous (stays alive) thus the event loop waits and listens for the requests to come
server.listen(5000,()=>{
    console.log("Server listenning on port :5000..");
    
})