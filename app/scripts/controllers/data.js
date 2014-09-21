'use strict';

angular.module('vizwizApp')
  .controller('DataCtrl', function ($scope) {
    $scope.data = [
      ['', 'Maserati', 'Mazda', 'Mercedes', 'Mini', 'Mitsubishi'],
      ['2009', 0, 2941, 4303, 354, 5814],
      ['2010', 5, 2905, 2867, 412, 5284],
      ['2011', 4, 2517, 4822, 552, 6127],
      ['2012', 2, 2422, 5399, 776, 4151]
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