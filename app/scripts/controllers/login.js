'use strict';

/*global Firebase */

angular.module('vizwizApp')
  .controller('LoginCtrl', ['$scope', 'simpleLogin', '$location', 'firebaseUrl', '$rootScope', function ($scope, simpleLogin, $location, firebaseUrl, $rootScope) {
    
    $scope.loginError = false;
    $scope.rememberMe = false;
    $rootScope.ref = new Firebase(firebaseUrl);
    
    // sign in
    $scope.login = function() {
      simpleLogin.$login('password', {
        email: $scope.email,
        password: $scope.password
      })
      .then(
        function(user) {
          $scope.loginError = false;
          $rootScope.user = user;
          $rootScope.ref.child('users').child(user.uid).child('settings')
            .on('value', function (snapshot) {
              $rootScope.settings = snapshot.val();
            }, function (err) {
              console.log('Error retrieving settings: ' + err.code + ' - ' + err.message);
              $rootScope.settings = { displayName: 'User' };
              $rootScope.$broadcast('vw-login');
            });
          $location.path('/');
        },
        function(error) {
          $scope.loginError = error.message.replace('FirebaseSimpleLogin: ', '');
        });
    };
  }
]);