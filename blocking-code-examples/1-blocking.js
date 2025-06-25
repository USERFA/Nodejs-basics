// /blocking code
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