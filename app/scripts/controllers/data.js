'use strict';

/*global Firebase */

angular.module('vizwizApp')
  .controller('DataCtrl', ['$scope', '$rootScope', '$firebase', 'simpleLogin', 'firebaseUrl', function ($scope, $rootScope, $firebase, simpleLogin, firebaseUrl) {
    var userRef = new Firebase(firebaseUrl + '/users/' + simpleLogin.user.uid);
    var userObj = $firebase(userRef).$asObject();
    userObj.$loaded().then(function() {
      $rootScope.userData = userObj;
    });
    
    var loadData = function(index) {
      // load data from specified index
      var dataRef = $firebase(userRef.child('datasets').child(index).child('data'));
      var dataset = dataRef.$asArray();
      dataset.$loaded().then(function() {
        $rootScope.activeData = dataset;
        $scope.data = $rootScope.activeData;
        $rootScope.$broadcast('vw:data-loaded');
      });
    };
      
    // set default dataset
    $rootScope.activeDataId = '0';
    
    // load first dataset
    loadData($rootScope.activeDataId);
    
    $scope.displayName = $rootScope.displayName;
    $scope.dataListOpen = true;
    
    // 3 way binding for dataset titles and descriptions
    userObj.$bindTo($rootScope, 'userData');
  }]);