angular
	.module('toDoList.create')
	.controller('CreateCtrl', CreateCtrl);

function CreateCtrl($scope) {
	var vm = this;

	vm.toDoItem = '';
	vm.dueDate = ''

}