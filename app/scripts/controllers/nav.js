'use strict';

angular.module('vizwizApp')
  .controller('NavCtrl', function ($scope) {
  	$scope.loggedIn = true;
  	$scope.logout = function () {
  		$scope.loggedIn = false;
  	};
  	$scope.login = function () {
  		$scope.loggedIn = true;
  	};
  });
