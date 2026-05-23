const http = require("http");
const queryString = require("querystring");

const server = http.createServer((req, res) => {

    const formatURL = req.url.slice(2);
    const data = queryString.parse(formatURL);

    if (data.email === "admin@gmail.com") {

        if (data.password === "1234") {

            res.statusCode = 200;
            res.end("Login Successful");

        } else {

            res.statusCode = 401;
            res.end("Invalid Password");

        }

    } else {

        res.statusCode = 404;
        res.end("User Not Found");

    }

});

server.listen(8080, () => {

    console.log("Server Is Running On 8080 Port")

});