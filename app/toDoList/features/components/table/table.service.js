angular
	.module('toDoList.component.table')
	.service('table', TableService);

function TableService($http) {
	var items = [];

	function getTable() {
		$http({
			method: 'GET',
			url: 'http://localhost:3000/api/table'
		}).then(function(response){
			response.data.forEach(function(item){
				items.push(item);
			})
			
		})
	}

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
		addItem: addItem,
		getTable: getTable
	}
}
