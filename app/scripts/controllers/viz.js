'use strict';

angular.module('vizwizApp')
  .controller('VizCtrl', function ($scope) {
    $scope.myViz = {
      open: true,
      configs: [
        { 
          title: 'viz-1', 
          description: 'this is description 1', 
          config: ''
        },
        { 
          title: 'viz-2', 
          description: 'this is description 2', 
          config: ''
        },
        { 
          title: 'viz-3', 
          description: 'this is description 3', 
          config: ''
        },
        { 
          title: 'viz-4', 
          description: 'this is description 4', 
          config: ''
        },
        { 
          title: 'viz-5', 
          description: 'this is description 5', 
          config: ''
        },
      ],
    };
  });