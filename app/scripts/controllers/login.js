'use strict';

angular.module('vizwizApp')
  .controller('LoginCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
  	$scope.login = function () {
  		$rootScope.loggedIn = true;
  		$location.path('/');
  	};
  }]);
