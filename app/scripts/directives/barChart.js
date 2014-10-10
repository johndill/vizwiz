'use strict';

angular.module('vizwizApp')
  .directive('barChart', ['d3Service', '$window', '$timeout', function(d3Service, $window, $timeout) {
    return {
      restrict: 'EA',
      link: function(scope, element, attrs) {
        d3Service.d3().then(function(d3) {
          var margin = parseInt(attrs.margin) || 0,
              barHeight = parseInt(attrs.barHeight) || 20,
              barPadding = parseInt(attrs.barPadding) || 5;
          
          d3.select(element[0])
            .append('span')
            .text('Show ');
          
          var seriesDropdown = d3.select(element[0])
            .append('select')
            .attr('name', 'series-list');
          seriesDropdown.on('change', function() {
            scope.render(scope.vizData);
          });
          
          d3.select(element[0])
            .append('span')
            .text(' by ');
          
          var categoryDropdown = d3.select(element[0])
            .append('select')
            .attr('name', 'category-list');
          categoryDropdown.on('change', function() {
            scope.render(scope.vizData);
          });
          
          d3.select(element[0])
            .append('div')
            .style({'height': '10px'});
          
          var svg = d3.select(element[0])
            .append('svg')
            .style('width', '100%');
          
          var renderTimeout;
          
          // browser on resize event
          window.onresize = function () {
            scope.$apply();
          };
          
          // watch for resize event
          scope.$watch(function() {
            return angular.element($window)[0].innerWidth;
          }, function () {
            scope.render(scope.vizData);
          });
          
          // render when data changes
          scope.$on('vw:chart-data-updated', function() {
            scope.render(scope.vizData);
          });
          
          scope.render = function (data) {
            
            // remove all previous items before render
            svg.selectAll('*').remove();
            
            // if we don't pass any data, return out of the element
            if (!data) { return; }
            
            if (renderTimeout) { clearTimeout(renderTimeout); }
                                
            renderTimeout = $timeout(function () {
              // setup variables
              var width = d3.select(element[0])[0][0].offsetWidth - margin,
                  // calculate height
                  height = data.length * (barHeight + barPadding),
                  // use the category20() scale function for multicolor support
                  color = d3.scale.category20(),
                  // xScale
                  xScale = d3.scale.linear()
                    .domain([0, d3.max(data, function(d) {
                      return d[seriesDropdown[0][0].value];
                    })])
                    .range([0, width]);
              
              // update series dropdown
              seriesDropdown.selectAll('option')
                .data(Object.getOwnPropertyNames(data[0]))
                .enter()
                .append('option')
                .text(function (d) { return d; })
                .attr('value', function(d) { return d; });
              
              // update category dropdown
              categoryDropdown.selectAll('option')
                .data(Object.getOwnPropertyNames(data[0]))
                .enter()
                .append('option')
                .text(function (d) { return d; })
                .attr('value', function(d) { return d; });

              // set the height based on calcs above
              svg.attr('height', height);

              // create rectangles for the bar chart
              svg.selectAll('rect')
                .data(data).enter()
                  .append('rect')
                  .attr('height', barHeight)
                  .attr('width', 140)
                  .attr('x', Math.round(margin/2))
                  .attr('y', function (d, i) {
                    return i * (barHeight + barPadding);
                  })
                  .attr('fill', function(d) {
                    return color(d[seriesDropdown[0][0].value]); 
                  })
                  .transition()
                    .duration(1000)
                    .attr('width', function(d) {
                      return xScale(d[seriesDropdown[0][0].value]);
                    });
              svg.selectAll('text')
                .data(data)
                .enter()
                  .append('text')
                  .attr('fill', '#000')
                  .attr('y', function(d, i) {
                    return i * (barHeight + barPadding) + 15;
                  })
                  .attr('x', 145)
                  .transition()
                    .duration(1000)
                    .attr('x', function(d) {
                      return xScale(d[seriesDropdown[0][0].value]) + 5;
                    })
                .text(function(d) {
                  return d[categoryDropdown[0][0].value] + ': ' + d[seriesDropdown[0][0].value];
                });
            }, 200);
          };
        });
      }
    };
  }]);