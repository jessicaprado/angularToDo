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

function ItemCtrl() {
	var vm = this;

	vm.items = [
		{
			uncompleted: ['wash car', 'eat salad'],
		},
		{
			completed: ['buy puppy', 'cry']
		}
	]
}
