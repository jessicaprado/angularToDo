var mongoose = require('mongoose');
var db = require('./../db/connection.js');
var ToDo = require('./../db/todo.models.js');

// Require bluebird as promise
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function (app) {
    app.delete('/api/table/:_id', function (req, res) {
        console.log(req.params._id);
        ToDo.findByIdAndRemove(req.params._id, function (err, todo) {
            if(err) return (err);
            res.redirect('/#!');
        })

    })
}