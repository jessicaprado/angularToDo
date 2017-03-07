var mongoose = require('mongoose');
var db = require('./../db/connection.js'); 
var ToDo = require('./../db/todo.models.js'); 

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
	app.get('/api/table', function(req, res){
		Todo.find({}, function(err, data){
			if (err) throw err;
			res.json(data);
			})
		})
	}