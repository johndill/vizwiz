/*global $:false */

'use strict';

angular.module('vizwizApp')
  .directive('handsontable', function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        var data = scope.data;
        var tableHeight = $(window).height() - 215 - 135 * scope.myData.open;
        
        element.height(tableHeight);
        $(element).handsontable({
          data: data,
          colHeaders: true,
          rowHeaders: true,
          minSpareRows: 1,
          contextMenu: true
        });
        
        scope.$watch('myData.open', function(newVal) {
          tableHeight = $(window).height() - 215 - 135 * newVal;
          element.height(tableHeight);
          $(element).handsontable('render');
        });
        
        $(window).on('resize', function() {
          tableHeight = $(window).height() - 215 - 135 * scope.myData.open;
          element.height(tableHeight);
          $(element).handsontable('render');
        });
      }
    };
  });
