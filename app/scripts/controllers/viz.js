'use strict';

angular.module('vizwizApp')
  .controller('VizCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.activeVizId = '0';
    $scope.vizListOpen = true;
    
    // build dataset for chart whenever data is changed
    $scope.$watch('userData', function(newData) {
      if (newData) {
        var dataset = newData.datasets[$rootScope.activeDataId],
            colHeaders = dataset.columnHeadersInFirstRow,
            vizData = [],
            numCols = $rootScope.activeData[0].length,
            colName;
        
        for (var i = 0; i < $rootScope.activeData.length - 1; i++) {
          // skip first row if col headers in first row
          if (colHeaders && i === 0) { i++; }
          
          // add empty object to vizData array
          vizData.push({});
          
          // add data for each row to vizData
          for (var j = 0; j < numCols; j++) {
            if (colHeaders) {
              colName = $rootScope.activeData[0][j];
            } else {
              colName = String.fromCharCode(65 + j);
            }
            
            vizData[i - 1][colName] = parseFloat($rootScope.activeData[i][j]);
          }
        }
        
        $scope.vizData = vizData;
        $rootScope.$broadcast('vw:chart-data-updated');
      }
    });
  }]);