angular
	.module('toDoList.component.navbar')
	.directive('navbar', Navbar);

function Navbar() {
	return {
		restrict: 'E',
		scope: {
			NavbarData: "="
		},
		templateUrl: '/toDoList/features/components/navbar/navbar.html',
		controller: NavbarCtrl,
		controllerAs: 'NavbarVM',
		bindToController: true
	}
}

function NavbarCtrl() {

}