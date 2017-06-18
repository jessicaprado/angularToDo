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
		var update = {
			_id: vm.itemData._id,
			completed: vm.itemData.completed
		};
		console.log(update);
		table.updateItem(update);
	};

	vm.delete = function(){
		var id = vm.itemData._id;
		table.deleteItem(id);
	};
	
}
