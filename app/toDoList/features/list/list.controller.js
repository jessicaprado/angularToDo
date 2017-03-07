angular
	.module('toDoList.list')
	.controller('ListCtrl', ListCtrl);

function ListCtrl($scope, table, $http, $filter) {
	var vm = this;

	// $scope.today = $filter('date')(new Date(), 'yyyy-MM-dd');
	// console.log($scope.today);

	vm.items = [];

	table.getItem(vm.items);

	vm.update = function(id) {
		table.updateItem(id, true)
	}
}