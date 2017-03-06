angular
	.module('toDoList.create')
	.controller('CreateCtrl', CreateCtrl);

function CreateCtrl($scope, table) {
	var vm = this;

	resetView()

	function resetView() {
		vm.items = [
			{
				toDoItem: '',
				dueDate: '',
			}
		]
	}

	vm.addItem = function() {
		table.addItem(vm.items);
		console.log(vm.items)
		resetView()
	}
}