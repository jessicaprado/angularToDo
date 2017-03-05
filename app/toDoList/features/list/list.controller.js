angular
	.module('toDoList.list')
	.controller('ListCtrl', ListCtrl);

function ListCtrl($scope) {
	var vm = this;

	vm.navbarButtons = [
		'create', 'list', 'completed'
	]
}