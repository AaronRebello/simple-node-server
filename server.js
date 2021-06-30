var express = require("express");
var fs = require("fs")

var app = express();

app.use(express.json())

var decode = "aGVsbG8gd2VsY29tZSB0byBub2RlanM=";

app.post('/', (req, res) => {
    console.log("server called");
    fs.writeFile('abc.txt', decode, { encoding: 'base64' }, (err) => { console.log("files created"); });
})

app.listen(3100);