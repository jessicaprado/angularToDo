var mongoose = require('mongoose');
mongoose.Promise = Promise;

var Schema = mongoose.Schema;

var UncompletedItems = new Schema ({
	text: {
		type: String
	},
	date: {
		type: Date
	}
})

var Uncompleted = mongoose.model('Uncompleted', UncompletedItems);

module.exports = Uncompleted;