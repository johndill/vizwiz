'use strict';

angular.module('vizwizApp')
  .controller('NavCtrl', ['$scope', 'simpleLogin', '$rootScope', '$location', function ($scope, simpleLogin, $rootScope, $location) {
    $scope.user = simpleLogin.user;
    $scope.displayName = $rootScope.displayName;
    
    $scope.logout = function () {
      simpleLogin.$logout();
      $scope.user = false;
      $scope.displayName = 'user';
      $location.path('login');
    };
  }
]);