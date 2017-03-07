var mongoose = require('mongoose');
var db = require('./../db/connection.js'); 
var ToDo = require('./../db/todo.models.js'); 

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
	 app.post('/api/table', function(req, res) {
	 	var newItem = new ToDo ({
	 		text: req.body.toDoItem,
	 		date: req.body.dueDate,
	 		completed: false
	 	})

	 	newItem.save(function(err, doc){
	 		if (err) throw err
	 	})
	 })
}