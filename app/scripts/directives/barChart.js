'use strict';

angular.module('vizwizApp')
  .directive('barChart', ['d3Service', '$window', '$timeout', function(d3Service, $window, $timeout) {
    return {
      restrict: 'EA',
      scope: {},
      link: function(scope, element, attrs) {
        d3Service.d3().then(function(d3) {
          var margin = parseInt(attrs.margin) || 20,
              barHeight = parseInt(attrs.barHeight) || 20,
              barPadding = parseInt(attrs.barPadding) || 5;
          
          var svg = d3.select(element[0])
            .append('svg')
            .style('width', '100%');
          
          var renderTimeout;
          
          // browser on resize event
          window.onresize = function () {
            scope.$apply();
          };
          
          // hard-coded data
          scope.data = [
            { name: 'Greg', score: 98 },
            { name: 'Ari', score: 96 },
            { name: 'Q', score: 75 },
            { name: 'Loser', score: 48 }
          ];
          
          // watch for resize event
          scope.$watch(function () {
            return angular.element($window)[0].innerWidth;
          }, function () {
            scope.render(scope.data);
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
                  height = scope.data.length * (barHeight + barPadding),
                  // use the category20() scale function for multicolor support
                  color = d3.scale.category20(),
                  // xScale
                  xScale = d3.scale.linear()
                    .domain([0, d3.max(data, function(d) {
                      return d.score;
                    })])
                    .range([0, width]);

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
                  .attr('fill', function(d) { return color(d.score); })
                  .transition()
                    .duration(1000)
                    .attr('width', function(d) {
                      return xScale(d.score);
                  });
              svg.selectAll('text')
                .data(data)
                .enter()
                  .append('text')
                  .attr('fill', '#fff')
                  .attr('y', function(d, i) {
                    return i * (barHeight + barPadding) + 15;
                })
                .attr('x', 15)
                .text(function(d) {
                  return d.name + ' (scored: ' + d.score + ')';
                });
            }, 200);
          };
        });
      }
    };
  }]);