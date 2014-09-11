'use strict';

/**
 * @ngdoc function
 * @name vizwizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vizwizApp
 */
angular.module('vizwizApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
