angular
	.module('toDoList.component.table')
	.service('table', TableService);

function TableService($http) {
	var items = [];

	function addItem(itemData) {
		items.push(itemData)

		$http({
			method: 'POST',
			url: 'http://localhost:3000/api/table',
			data: itemData
		}).then(function(response){
	
		})

	}
	return {
		items: items,
		addItem: addItem
	}
}
