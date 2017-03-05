angular
	.module('toDoList.component.item')
	.service('item', ItemService);

function ItemService() {
	var items = [];


	function addItem(itemData) {
		items.push(itemData);
		console.log('complete')
	}

}