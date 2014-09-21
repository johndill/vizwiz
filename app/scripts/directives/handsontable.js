/*global $:false */

'use strict';

angular.module('vizwizApp')
  .directive('handsontable', function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        var data = scope.data;
        $(element).handsontable({
          data: data,
          colHeaders: ['Name', 'Age'],
          rowHeaders: true
        });
      }
    };
  });
