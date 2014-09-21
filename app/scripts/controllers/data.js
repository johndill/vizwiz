'use strict';

angular.module('vizwizApp')
  .controller('DataCtrl', function ($scope) {
    $scope.data = [
      {name: 'b', age:10},
      {name: 'b', age:11},
      {name: 'c', age:12}
    ];
  
    $scope.myData = {
      open: true,
      datasets: [
        { 
          title: 'dataset-1', 
          description: 'this is description 1', 
          data: ''
        },
        { 
          title: 'dataset-2', 
          description: 'this is description 2', 
          data: ''
        },
        { 
          title: 'dataset-3', 
          description: 'this is description 3', 
          data: ''
        },
        { 
          title: 'dataset-4', 
          description: 'this is description 4', 
          data: ''
        },
        { 
          title: 'dataset-5', 
          description: 'this is description 5', 
          data: ''
        },
      ],
    };
  });