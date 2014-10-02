'use strict';



angular.module('vizwizApp')
  .factory('d3Service', ['$document', '$window', '$q', '$rootScope',
    function($document, $window, $q, $rootScope) {
      console.log('d3service');
      var d = $q.defer(),
          d3service = { d3: function() { return d.promise; } };
      function onScriptLoad() {
        // load client in the browser
        $rootScope.$apply(function() { d.resolve($window.d3); });
      }
      
      // create a script tag with d3 as the source
      // and call our onScriptLoad callback when it
      // has been loaded
      var scriptTag = $document[0].createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.async = true;
      scriptTag.src = 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.4.11/d3.min.js';
      scriptTag.onreadystatechange = function () {
        if (this.readyState === 'complete') { onScriptLoad(); }
      };
      scriptTag.onload = onScriptLoad;
      
      var s = $document[0].getElementsByTagName('body')[0];
      s.appendChild(scriptTag);
      
      return d3service;
    }
  ]);