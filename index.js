var http = require("http");
var path= require("path");
var express= require("express");
var app = express();

var port = process.env.PORT || 8000;
var public = __dirname + "/public/";

app.get("/", function (req, res) {
    res.sendFile(path.join(public + "index.html"));
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port);

console.log("Server running on port " + port);