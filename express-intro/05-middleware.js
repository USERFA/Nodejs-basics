const express = require("express");
const app = express();

app.use(logger); //to be used by all request instead of manually adding it to each route
app.use([authorize, logger]);
app.use(express.static("./public"));
app.use('/api',logger); //middleware will be applied to all routes that start with /api
// request =>middleware =>response

const logger = (req,res,next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
//   res.send("Testing")
  next()
};

app.get("/",logger,  (req, res) => {
  res.send("Home");
});
