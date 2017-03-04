angular
	.module('toDoList' [
		//global dependencies
		'ui.router',

		//feeatures
		'toDoList.completed',
		'toDoList.create',
		'toDoList.list',
		])
	.config(appConfig);

function appConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}