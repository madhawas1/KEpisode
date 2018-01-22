/*
* Set up Application
* */
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
// load the database config
const database = require('./config/database');
// log requests to the console (express4)
const morgan = require('morgan');
// pull information from HTML POST (express4)
const bodyParser = require('body-parser');
//const methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

/*
* Configure Application
* */
// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
// log every request to the console
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended': 'true'}));
// parse application/json
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
//app.use(methodOverride());

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);