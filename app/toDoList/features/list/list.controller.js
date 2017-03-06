angular
	.module('toDoList.list')
	.controller('ListCtrl', ListCtrl);

function ListCtrl(table) {
	var vm = this;

	vm.items = table.items;
}