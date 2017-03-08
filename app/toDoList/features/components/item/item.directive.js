angular
	.module('toDoList.component.item')
	.directive('item', Item);

function Item() {
	return {
		restrict: 'E',
		scope: {
			itemData: "="
		},
		templateUrl: '/toDoList/features/components/item/item.html',
		controller: ItemCtrl,
		controllerAs: 'ItemVM',
		bindToController: true
	}
}

function ItemCtrl($scope, table) {
	var vm = this;

	toDoItems = {};

	vm.updateItem = function(){
		table.updateItem(vm.toDoItems);
	}

	$scope.$watch(function(newValue, OldValue){
		if(newValue) {
			vm.toDoItems = newValue;
			$scope.toDoItems = vm.toDoItems;
		}
	})
	
}
