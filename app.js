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



//blocking code
const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home page")
    }
    if (req.url === "/about") {
        //blocking code (nested for loop) //once the loop finishes then the page is rendered
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                console.log(i, j);

            }
        }
        res.end("About page")
    }
    res.end("Error page")

});
server.listen("5000", () => {
    console.log("server is listenning on port 5000");
});