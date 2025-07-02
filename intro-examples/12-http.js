//starting a server

const hhtp = require("http");
const server = hhtp.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `);

  res.write("Hello world");
  res.end(); //end request
});

server.listen(5000);
