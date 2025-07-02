// console.log("Express Tutorial");

// const http = require("http");
// const { readFileSync } = require("fs");

// //get all files
// const homePage = readFileSync("./navbar-app/index.html");
// const homeStyles = readFileSync("./navbar-app/styles.css");
// const homeImage = readFileSync("./navbar-app/logo.svg");
// const homeLogic = readFileSync("./navbar-app/browser-app.js");

// console.log({ homePage });

// const server = http.createServer((req, res) => {
//   //we pss the content of the file,  not the file itself..
//   //write headers
//   if (req.url == "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(homePage);
//     res.end();
//   } else if (req.url == "/about") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h1>About Page</h1>");
//     res.end();
//   } else if (req.url == "/styles.css") {
//     res.writeHead(200, { "content-type": "text/css" });
//     res.write(homeStyles);
//     res.end();
//   } else if (req.url == "/logo.svg") {
//     res.writeHead(200, { "content-type": "image/svg" });
//     res.write(homeImage);
//     res.end();
//   } else if (req.url == "/browser-app.js") {
//     res.writeHead(200, { "content-type": "text/javascript" });
//     res.write(homeLogic);
//     res.end();
//   } else {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h1>404 Page Not Found</h1>");
//     res.end();
//   }
//   console.log("user hit the server");
//   console.log(req.method, req.url);

//   //write body
// //   res.write("<h1>Hello World</h1>");
// //   res.end();
// });

// server.listen(5000);

//////////////////////////////////////////////////// EXPRESS basics /////////////////////////////////////////
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.status(200).send("Home Page");
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("About Page");
// });

// app.all("*", (req, res) => {
//   res.status(404).send("<h1>Resource Not Found</h1>");
// });

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000....");
// });

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

/////////////////////////////////
// const express = require("express");
// const app = express();
// const path = require("path");

// //setup static and middleware  (will give access to the styles, logo, logic and everything instead of creating a path for each one)
// app.use(express.static("./navbar-app"));

// //send file
// // app.get("/", (req, res) => {
// //   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// //adding to stati assets
// //SSR vs API?
// // });

// app.all("*", (req, res) => {
//   res.status(404).send("Resource Not Found");
// });

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000....");
// });

/////////// API//////////////////
// const express = require("express");
// const app = express();

// const { products } = require("./data");
// app.get("api/product");

// app.get("/", (req, res) => {
//   res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
//   //   res.json(products);
//   // res.json([{name:"Product 1"},{name:"Product 2"}])
// });

// app.get("/api/products", (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, image } = product;
//     return { id, name, image };
//   });
//   res.json(newProducts);
// });

// app.get("/api/products/:productID", (req, res) => {
//   const singleProduct = products.find(
//     (product) => product.id === Number(req.params.productID)
//   );
//   if (!singleProduct) {
//     return res.status(404).send("Product Does Not Exist");
//   } else {
//     return res.json(singleProduct);
//   }
// });

// app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
//   console.log(req.params);
//   res.send("Hello World");
// });

// app.get("/api/v1/query", (req, res) => {
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];
//   console.log(req.query);
//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search);
//     });
//     // res.send(sortedProducts);
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit));
//     // res.send(sortedProducts)
//   }
//   if (sortedProducts.length < 1) {
//     // return res.status(200).send("No products match your search");
//     return res.status(200).json({ success: true, data: [] });
//   }
//   res.status(200).json(sortedProducts);
// });

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000....");
// });

/////middelwaare//////
// const express = require("express");
// const app = express();
// const logger = require("../logger");
// const authorize = require("../authorize");
// //third party middleware
// const morgan = require("morgan");

// // app.use(logger); //to be used by all request instead of manually adding it to each route
// // app.use([authorize, logger]);
// // app.use(express.static("./public"));
// // app.use('/api',logger); //middleware will be applied to all routes that start with /api
// //request =>middleware =>response

// // const logger = (req,res,next) => {
// //   const method = req.method;
// //   const url = req.url;
// //   const time = new Date().getFullYear();
// //   console.log(method, url, time);
// // //   res.send("Testing")
// //   next()
// // };

// // app.get("/",logger,  (req, res) => {
// //   res.send("Home");
// // });

// app.use(morgan("tiny"));

// app.get("/",  (req, res) => {
//   res.send("Home");
// });

// app.get("/about",logger, (req, res) => {
//   res.send("About");
// });

// app.get("/api/products",logger, (req, res) => {
//   res.send("Products");
// });

// app.get("/api/items",[authorize,logger], (req, res) => {
//   res.send("Items");
// });

// app.get("/api/items", (req, res) => {
//   res.send("Items");
// });
// app.listen(5000, () => {
//   console.log("Server is listening on port 5000....");
// });
///////////////// Morgan intro//////////

// const express = require("express");
// const app = express();
// let { people } = require("./data");

// //static assets
// app.use(express.static("./methods-public"));

// // parse form data
// app.use(express.urlencoded({ extended: false }));

// app.use(express.json());



// //insert data
// app.post("/login", (req, res) => {
//   console.log(req.body);
//   const { name } = req.body;
//   if (name) {
//     return res.status(200).send("welcome " + name);
//   }
//   res.status(401).send("Please Provide Credentials");
// });

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000....");
// });

// //read data
// app.get("/api/people", (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });

// //post data
// app.post("/api/people", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "Please provide name value" });
//   } else {
//     res.status(201).json({ success: true, person: name });
//   }
// });

// //edit data
// app.put("/api/people/:id", (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;

//   const person = people.find((person) => person.id === Number(id));

//   if (!person) {
//     return res
//       .status(400)
//       .json({ success: false, msg: `no person with id ${id}` });
//   } else {
//     const newPeople = people.map((person) => {
//       if (person.id === Number(id)) {
//         person.name = name;
//       }
//       return person;
//     });
//     res.status(200).json({ success: true, data: newPeople });
//   }
// });

// //delete data
// app.delete("/api/people/:id", (req, res) => {
//   const person = people.find((person) => person.id === Number(req.params.id));
//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${req.params.id}` });
//   } else {
//     const newPeople = people.filter(
//       (person) => person.id !== Number(req.params.id)
//     );
//     return res.status(200).json({ success: true, data: newPeople });
//   }
// });


//////////////////////////////// ROuter

const express = require("express");
const app = express();

//static assets
app.use(express.static("./methods-public")); 

// parse form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const people = require('./routes/people')
const auth = require('./routes/auth')


//route will be used as middleware here
app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
    console.log("Server is listening on port 5000....");
})