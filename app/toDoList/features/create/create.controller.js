angular
	.module('toDoList.create')
	.controller('CreateCtrl', CreateCtrl);

function CreateCtrl($scope, item) {
	var vm = this;

	resetView();
		

	function resetView() {
		vm.item = {
			toDoItem : '',
			dueDate : ''
		}
	}

	vm.addItem = function() {

		item.addItem(vm.item);
		resetView();
	}

	

}