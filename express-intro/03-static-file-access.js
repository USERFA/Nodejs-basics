const express = require("express");
const app = express();
const path = require("path");

//setup static and middleware  (will give access to the styles, logo, logic and everything instead of creating a path for each one)
app.use(express.static("./navbar-app"));

//send file
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
//adding to stati assets
//SSR vs API?
// });

app.all("*", (req, res) => {
  res.status(404).send("Resource Not Found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});