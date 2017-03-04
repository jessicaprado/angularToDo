angular
	.module('toDoList', [
		//global dependencies
		'ui.router',

		//feeatures
		'toDoList.list',
		'toDoList.create',
		
		])
	.config(appConfig);

function appConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}