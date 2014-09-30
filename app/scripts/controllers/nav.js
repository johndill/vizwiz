'use strict';

angular.module('vizwizApp')
  .controller('NavCtrl', ['$scope', 'simpleLogin', '$rootScope', '$location', function ($scope, simpleLogin, $rootScope, $location) {  
    $scope.logout = function () {
      simpleLogin.$logout();
      $rootScope.user = false;
      $rootScope.settings = false;
      $location.path('login');
    };
  }
]);