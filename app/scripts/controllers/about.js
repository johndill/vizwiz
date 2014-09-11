'use strict';

/**
 * @ngdoc function
 * @name vizwizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vizwizApp
 */
angular.module('vizwizApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
