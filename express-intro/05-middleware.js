const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
//third party middleware
const morgan = require("morgan");

// app.use(logger); //to be used by all request instead of manually adding it to each route
// app.use([authorize, logger]);
// app.use(express.static("./public"));
// app.use('/api',logger); //middleware will be applied to all routes that start with /api
//request =>middleware =>response

// const logger = (req,res,next) => {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().getFullYear();
//   console.log(method, url, time);
// //   res.send("Testing")
//   next()
// };

// app.get("/",logger,  (req, res) => {
//   res.send("Home");
// });

app.use(morgan("tiny"));

app.get("/",  (req, res) => {
  res.send("Home");
});

app.get("/about",logger, (req, res) => {
  res.send("About");
});

app.get("/api/products",logger, (req, res) => {
  res.send("Products");
});

app.get("/api/items",[authorize,logger], (req, res) => {
  res.send("Items");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});