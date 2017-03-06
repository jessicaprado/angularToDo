var table = require('./table.js')

module.exports = function(app) {
	app.get('/api/table', function(req, res) {
		res.send(table.items)
	})
}