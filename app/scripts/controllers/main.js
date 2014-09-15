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
  	$scope.viz = [
  		{ title: 'viz-1' },
  		{ title: 'viz-2' },
  		{ title: 'viz-3' },
  		{ title: 'viz-4' },
  		{ title: 'viz-5' },
  		{ title: 'viz-6' },
  		{ title: 'viz-7' },
  		{ title: 'viz-8' },
  		{ title: 'viz-9' },
  		{ title: 'viz-10' },
  		{ title: 'viz-11' },
  		{ title: 'viz-12' },
  		{ title: 'viz-13' },
  		{ title: 'viz-14' },
  		{ title: 'viz-15' },
  		{ title: 'viz-16' },
  		{ title: 'viz-17' },
  		{ title: 'viz-18' },
  		{ title: 'viz-19' },
  		{ title: 'viz-20' }
		];
    $scope.datasets = [
      { title: 'data-1', description: 'this is a sample description' },
      { title: 'data-2', description: 'this is a sample description' },
      { title: 'data-3', description: 'this is a sample description' },
      { title: 'data-4', description: 'this is a sample description' },
      { title: 'data-5', description: 'this is a sample description' },
      { title: 'data-6', description: 'this is a sample description' },
      { title: 'data-7', description: 'this is a sample description' },
      { title: 'data-8', description: 'this is a sample description' },
      { title: 'data-9', description: 'this is a sample description' },
      { title: 'data-10', description: 'this is a sample description' },
      { title: 'data-11', description: 'this is a sample description' },
      { title: 'data-12', description: 'this is a sample description' },
      { title: 'data-13', description: 'this is a sample description' },
      { title: 'data-14', description: 'this is a sample description' },
      { title: 'data-15', description: 'this is a sample description' },
      { title: 'data-16', description: 'this is a sample description' },
      { title: 'data-17', description: 'this is a sample description' },
      { title: 'data-18', description: 'this is a sample description' },
      { title: 'data-19', description: 'this is a sample description' },
      { title: 'data-20', description: 'this is a sample description' }
    ];
  });
