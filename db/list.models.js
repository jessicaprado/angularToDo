var mongoose = require('mongoose');
mongoose.Promise = Promise;

var Schema = mongoose.Schema;

var ListItems = new Schema ({
	text: {
		type: String
	},
	date: {
		type: Date
	}
})

var List = mongoose.model('List', ListItems);

module.exports = List;