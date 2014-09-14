'use strict';

angular.module('vizwizApp')
  .controller('NavCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
  	$scope.logout = function () {
  		$rootScope.loggedIn = false;
  	};
  	
  	$scope.login = function () {
  		$rootScope.loggedIn = true;
  	};
  	$scope.showSignup = $location.path() === '/login';
  	$scope.showLogin = $location.path() === '/signup';
  }]);