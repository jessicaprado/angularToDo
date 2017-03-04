angular
	.module('toDoList', [
		//global dependencies
		'ui.router',

		//feeatures
		'toDoList.list',
		'toDoList.create',
		'toDoList.completed',
		
		])
	.config(appConfig);

function appConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}