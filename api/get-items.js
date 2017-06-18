var mongoose = require('mongoose');
var db = require('./../db/connection.js'); 
var ToDo = require('./../db/todo.models.js'); 

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
	app.get('/api/table', function(req, res){
		console.log(req.body);
		ToDo.find({}, function(err, data){
			if (err) throw err;
			res.json(data);
			})
		});

	app.get('/api/table/:id', function (req, res) {
		var id = req.params.id;
        ToDo.findById(id, function(err, data){
            if (err) throw err;
            res.json(data);
        })
    });
}