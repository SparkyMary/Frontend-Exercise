'use strict';

angular.module('home', ['ngRoute', 'ngDropdowns'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeController'
  });
}])

.controller('homeController', function($scope) {

	$scope.menuItems = [
		{title: 'Classes', link: '#', role: ['teacher', 'student']},
		{title: 'Lessons', link: '#', role: ['teacher']},
		{title: 'Libraries', link: '#', role: ['teacher']},
		{title: 'Assignments', link: '#', role: ['student']}
	];

	$scope.users = [
		{name: 'teacher@school.org', role: 'teacher'},
		{name: 'student@school.org', role: 'student'}
		]

	$scope.selectItems = [
		{title: 'Settings'},
		{title: 'Sign Out'}
	];

	$scope.currentUser = $scope.users[0];
	$scope.currentSelect = null;
	$scope.currentPage = $scope.menuItems[0];
	$scope.dropDownOpen = false;
	$scope.dropDownState = 'closed';

	$scope.filterFunction = function(element) {
	  return element.role.indexOf($scope.currentUser.role) > -1 ;
	}

	$scope.selectedItemChanged = function(selected) {

		if (selected.user) {
			$scope.currentUser = selected.user;
			$scope.options = $scope.selectOptions();
		}

		$scope.dropDownClicked();
	}

	$scope.selectOptions = function() {

		var arr = [];

		for (var i=0; i < $scope.users.length; i++) {
	
			if ($scope.users[i].name != $scope.currentUser.name) {
				arr.push({title: $scope.users[i].name, user: $scope.users[i]});
			}
		}

		arr = arr.concat($scope.selectItems);
		return arr;
	}

	$scope.dropDownClicked = function() {

		$scope.dropDownOpen = !$scope.dropDownOpen;
		$scope.dropDownState = $scope.dropDownOpen ? 'open' : 'closed'; 
	}

	$scope.options = $scope.selectOptions();
});