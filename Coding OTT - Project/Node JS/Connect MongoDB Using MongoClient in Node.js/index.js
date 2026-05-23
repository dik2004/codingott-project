const http = require("http");
const { MongoClient } = require("mongodb");
const connection = MongoClient.connect("mongodb://localhost:27017");

connection.then(() => {

    console.log("DB Connected Succesfully");
    
});

connection.catch((err) => {
    
    console.log("DB Is Not Connected");
    console.log(err.message);
    process.exit(0);

});


const server = http.createServer((req, res) => {

    res.end("Mongo DB - NodeJS Server Is Running On Port 8080");

});

server.listen(8080);