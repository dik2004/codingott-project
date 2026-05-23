const http = require("http");
const server = http.createServer((req, res) => {

    res.end("Server Is Running");

});

server.listen(8080, () => {

    console.log("Server Is Running On 8080 Port")

});