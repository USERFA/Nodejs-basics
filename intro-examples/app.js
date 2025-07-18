// // ComminJS, every file is a module (by default)
// // Modules - Encapsulated Code (only share minimum)

//////////////////PART 1//////////////

// const names = require('./4-names');
// // console.log(names);

// const sayHi = require('./5-utils');
// const data = require('./6-alternative-flavor');
// // console.log(data);

// sayHi('John');
// sayHi(names.john);
// sayHi(names.peter);

// require('./7-mind-grenade');

///////////////PART 2////////////////////////
// const os = require('os');
// //info about current user
// const user = os.userInfo();
// console.log(user);
// //method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);

// const currentOS={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem()
// }
// console.log(currentOS);

///////////////////PART 3//////////////////
// const path = require('path');
// console.log(path.sep);
// //returns the relative path
// const filePath = path.join('/content','subfolder','test.txt');
// console.log(filePath);
// //returns the file name
// const base = path.basename(filePath);
// console.log(base);
// //returns the absolute path
// const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
// console.log(absolute);

///////PART4/////// fs sync (no-blockin - blocking)
// const { readFile, writeFile } = require("fs");
// //uses callbacks
// //read from file
// readFile("./content/first", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
//   const first = result;
//   readFile("./content/second", "utf-8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(result);
//     const second = result;
//     writeFile(
//       "./content/result-async.txt",
//       `Here is the result:${first}, ${second}`,
//       { flag: "a" },
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });

///////PART6/////////////////////// http
// const hhtp = require("http");
// const server = hhtp.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url === "/") {
//     res.end("Welcome to our home page");
//   }
//   if (req.url === "/about") {
//     res.end("Here is our short history");
//   }
//   res.end(`
//   <h1>Oops!</h1>
//   <p>We can't seem to find the page you are looking for</p>
//   <a href="/">back home</a>
//   `);

//   res.write("Hello world");
//   res.end(); //end request
// });

// server.listen(5000);



// const _ = require('lodash');
// const items = [1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items);
// console.log(newItems);



// //blocking code
// const http = require("http");
// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.end("Home page")
//     }
//     if (req.url === "/about") {
//         //blocking code (nested for loop) //once the loop finishes then the page is rendered
//         for (let i = 0; i < 100; i++) {
//             for (let j = 0; j < 100; j++) {
//                 console.log(i, j);

//             }
//         }
//         res.end("About page")
//     }
//     res.end("Error page")

// });
// server.listen("5000", () => {
//     console.log("server is listenning on port 5000");
// });

///////readfile async
// // promise will be use to execute multiple useActionState, ex, reading 2 files and writing...
// const fs = require("fs");

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, "utf-8", (err, content) => {
//             if (err) {
//                 reject(err)
//                 // return;
//             } else {
//                 resolve(content)
//                 // console.log(content);
//             }
//         });

//     })
// }

// // getText("./content/first").then((result)=>{console.log(result)}).catch((err)=>console.log(err))
// // getText("./content/second").then((result)=>{console.log(result)}).catch((err)=>console.log(err))

// const start = async () => {
//     try {
//         const first = await getText('./content/first') //once the promise is resolved we'll get our reposnse
//     } catch (error) {
//         console.log(error);
//     }
// }

// start();

// const EventEmitter = require("events");

// //custom ->extend class
// //emit event =>create instance

// const customEmitter = new EventEmitter();

// //events on:listen for an event ; emit:emit an event
// customEmitter.on('response', (name,id) => {
//     console.log("Data received", name, id);
// }) //name of event is response

// customEmitter.on('response', () => {
//     console.log("Many logics for the same event are allowed, but the order matters");
// }) //name of event is response


// customEmitter.emit('response','John',34)
// //built-oin modules rely on EvenEmiiter module by extending it
// const http = require("http");

// const server = http.createServer()
// server.on('request',(req,res)=>{
//     res.end("welcome");
// })
// server.listen(5000);


////////Streams///
// read file
// const {createReadStream} = require('fs');

// const stream = createReadStream("./content/big.txt",{highWaterMark:90000,encoding:'utf8'});

// //reads file in chunks
// stream.on("data",(result)=>{
//     console.log(result);
// })

var http = require("http");
var fs = require("fs");
var server = http.createServer((req, res) => {
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
        fileStream.pipe(res);//pushes from the read stream in the right stream (read and write data in chunks)
    })
    fileStream.on("error", (err) => {
        res.end(err)
    })
    //bad since sending a very large amount of data to the server is not goo
    // const text = fs.readFileSync("./content/big.txt","utf8");
    // res.end(text)
})
server.listen(5000)