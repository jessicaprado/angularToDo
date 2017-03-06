var mongoose = require('mongoose');
mongoose.Promise = Promise;

var Schema = mongoose.Schema;

var TodoItems = new Schema ({
	text: {
		type: String
	},
	date: {
		type: Date
	},
	completed: {
		type: Boolean
	}
})

var Todo = mongoose.model('Todo', TodoItems);

module.exports = Todo;