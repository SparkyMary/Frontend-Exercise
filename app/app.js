'use strict';

// Define the `` module
var dropDownApp = angular.module('dropDownApp', ['ngRoute', 'home']);


dropDownApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  
  //$locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
