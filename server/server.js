var express = require('express');
var app = express();
var port = 3000;

app.listen(port, function () {
    console.log("Node app is running at localhost:" + port);
});