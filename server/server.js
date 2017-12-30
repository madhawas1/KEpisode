const express = require('express');
const opn = require('opn');

const app = express();
const port = 3000;

app.use(express.static('server/public'));

app.listen(port, function () {
    console.log("Node app is running at localhost:" + port);
});

// Open Dashboard
opn('http://localhost:' + port);