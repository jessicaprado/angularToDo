angular
	.module('toDoList.list')
	.config(listConfig);

function listConfig($stateProvider) {
	$stateProvider.state({
		name: 'list',
		url: '/list',
		templateUrl: '/toDoList/features/list/list.html',
		controller: 'ListCtrl',
		controllerAs: 'ListVM'
	})
}