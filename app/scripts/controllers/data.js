'use strict';

/*global Firebase */

angular.module('vizwizApp')
  .controller('DataCtrl', ['$scope', '$rootScope', '$firebase', 'simpleLogin', 'firebaseUrl', function ($scope, $rootScope, $firebase, simpleLogin, firebaseUrl) {
    var ref = new Firebase(firebaseUrl + '/users/' + simpleLogin.user.uid);
    var activeDataset = '0';
    var userData = $firebase(ref).$asObject();
    
    var loadData = function(index) {
      // load data from specified index
      var dataRef = $firebase(ref.child('datasets').child(index).child('data'));
      var dataset = dataRef.$asArray();
      dataset.$loaded().then(function() {
        $scope.data = dataset;
        $rootScope.$broadcast('vw:data-loaded');
      });
    };
    
    // load first dataset
    loadData(activeDataset);
    
    $scope.displayName = $rootScope.displayName;
    $scope.dataListOpen = true;
    $scope.activeDataset = activeDataset;
    
    // 3 way binding for dataset titles and descriptions
    $scope.userData = userData;
    userData.$bindTo($scope, 'userData');
  
  }]);