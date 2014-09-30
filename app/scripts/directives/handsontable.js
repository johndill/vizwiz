/*global $:false */

'use strict';

angular.module('vizwizApp')
  .directive('handsontable', function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        var data = scope.data;
        var tableHeight = $(window).height() - 215 - 135 * scope.dataListOpen;
        
        element.height(tableHeight);
        $(element).handsontable({
          data: data,
          colHeaders: true,
          rowHeaders: true,
          minSpareRows: 1,
          contextMenu: true,
          afterChange: function (change, source) {
            if (source === 'loadData') {
              return; //don't save this change
            } else {
              // save each row that was changed
              for (var i = 0; i < change.length; i++) {
                console.log(change[i][0]);
                scope.data.$save(change[i][0]);
              }
            }
          }
        });
        
        scope.$watch('myData.open', function(newVal) {
          tableHeight = $(window).height() - 215 - 135 * newVal;
          element.height(tableHeight);
          $(element).handsontable('render');
        });
        
        scope.$on('vw:data-loaded', function() {
          $(element).handsontable({ data: scope.data });
        });
        
        $(window).on('resize', function() {
          tableHeight = $(window).height() - 215 - 135 * scope.dataListOpen;
          element.height(tableHeight);
          $(element).handsontable('render');
        });
      }
    };
  });
