const {createReadStream} = require('fs');

const stream = createReadStream("./content/big.txt",{highWaterMark:90000,encoding:'utf8'});

//reads file in chunks
stream.on("data",(result)=>{
    console.log(result);
})

stream.on("error",(err)=>{
    console.log(err);
})

//size of buffer : 64kb
//highWaterMark : size of buffer, can be added as a props 