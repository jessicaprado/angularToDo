var table = require('./table.js')

module.exports = function(app) {
	app.post('/api/table', function(req, res) {
		table.items.push(req.body)
		res.send(table.items)
	})
}