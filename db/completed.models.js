var mongoose = require('mongoose');
mongoose.Promise = Promise;

var Schema = mongoose.Schema;

var CompletedItems = new Schema ({
	text: {
		type: String
	},
	date: {
		type: Date
	}
})

var Completed = mongoose.model('Completed', CompletedItems);

module.exports = Completed;