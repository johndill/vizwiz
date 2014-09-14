'use strict';

angular.module('vizwizApp')
  .controller('NavCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  	$scope.logout = function () {
  		$rootScope.loggedIn = false;
  	};
  	
  	$scope.login = function () {
  		$rootScope.loggedIn = true;
  	};
  }]);