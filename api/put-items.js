var mongoose = require('mongoose');
var db = require('./../db/connection.js'); 
var ToDo = require('./../db/todo.models.js'); 

// Require bluebird as promise 
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
app.put('/api/table', function(req, res){
        ToDo.findByIdAndUpdate(req.body._id, {completed: req.body.completed}, function(err, post){
            if(err) return next(err);
            console.log(post);
            res.sendStatus(200);
        });
    });
}