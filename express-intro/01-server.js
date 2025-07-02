console.log("Express Tutorial");

const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

console.log({ homePage });

const server = http.createServer((req, res) => {
  //we pss the content of the file,  not the file itself..
  //write headers
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (req.url == "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (req.url == "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg" });
    res.write(homeImage);
    res.end();
  } else if (req.url == "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>404 Page Not Found</h1>");
    res.end();
  }
  console.log("user hit the server");
  console.log(req.method, req.url);

  //write body
//   res.write("<h1>Hello World</h1>");
//   res.end();
});

server.listen(5000);