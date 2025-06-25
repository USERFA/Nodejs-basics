var http = require("http");
var fs = require("fs");

var server = http.createServer((req,res)=>{
    const text = fs.readFileSync("./content/big.txt","utf8");
    res.end(text)
})
server.listen(5000)