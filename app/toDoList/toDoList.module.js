angular
	.module('toDoList', [
		//global dependencies
		'ui.router',

		//feeatures
	
		'toDoList.create',
		
		])
	.config(appConfig);

function appConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}