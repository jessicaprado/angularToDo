var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_tp2z37p9:lhjer1frsees6j6ea2amjfboab@ds123370.mlab.com:23370/heroku_tp2z37p9');
var db = mongoose.connection;

db.on('error', function(error){
	console.log(error)
});

db.once('open', function(){
	console.log("DB connected")
});

module.exports = db;