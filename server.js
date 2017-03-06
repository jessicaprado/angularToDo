var express = require('express');
var app = express();
var bodyParser = require('body-parser')
PORT = process.env.PORT || 3000;

var db = require('./db/connection.js');
var Todo = require('./db/todo.models.js');

require("./api/get-items.js")(app);
require("./api/post-items.js")(app);

app.use(express.static(__dirname + '/app'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.listen(PORT, function() {
	console.log ("I am listening on PORT " + PORT);
})