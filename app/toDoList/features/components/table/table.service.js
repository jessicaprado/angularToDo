angular
	.module('toDoList.component.table')
	.service('table', TableService);

function TableService() {
	var items = [
		{
			toDoItem: 'eat salad',
			dueDate: 'buy puppy',
		}
	]

	function addItem(itemData) {
		items.push(itemData)
	}
	return {
		items: items,
		addItem: addItem
	}
}
