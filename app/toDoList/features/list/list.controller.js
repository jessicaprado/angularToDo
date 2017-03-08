angular
	.module('toDoList.list')
	.controller('ListCtrl', ListCtrl);

function ListCtrl(table) {
	var vm = this;

	vm.today = new Date();

	vm.items = [];

	table.getItem(vm.items);
	
	vm.update = function(id) {
		table.updateItem(id, true)
	}
}