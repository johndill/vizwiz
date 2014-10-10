'use strict';

/*global Firebase */

angular.module('vizwizApp')
  .controller('SignupCtrl', ['$scope', 'simpleLogin', '$location', 'firebaseUrl', '$rootScope', function ($scope, simpleLogin, $location, firebaseUrl, $rootScope) {
    $scope.loginError = false;
    $scope.rememberMe = false;
    $rootScope.ref = new Firebase(firebaseUrl);
    
    // sign up
    $scope.signup = function() {
      // check that passwords match
      if ($scope.password !== $scope.verifyPassword) {
        $scope.loginError = 'Passwords do not match, try again.';
        return false;
      } else {
        $scope.loginError = false;
      }
      
      // create account
      simpleLogin.$createUser($scope.email, $scope.password)
        .then(function(user) {
          console.log(user);
          console.log('signup');
          $rootScope.ref.child('users').child(user.uid).set({
            settings: {
              displayName: $scope.displayName
            },
            datasets: [
              {
                name: 'Demo',
                description: 'Car Sales',
                data: [
                  ['', 'Maserati', 'Mazda', 'Mercedes', 'Mini', 'Mitsubishi'],
                  ['2009', 0, 2941, 4303, 354, 5814],
                  ['2010', 5, 2905, 2867, 412, 5284],
                  ['2011', 4, 2517, 4822, 552, 6127],
                  ['2012', 2, 2422, 5399, 776, 4151]
                ]
              }
            ]
          });
          
          // login
          simpleLogin.$login('password', {
            email: $scope.email,
            password: $scope.password
          }).then(function(user) {
            console.log(user);
            console.log('login');
            $scope.loginError = false;
            $rootScope.user = user;
            $rootScope.ref.child('users').child(user.uid).child('settings')
              .on('value', function (snapshot) {
                $rootScope.settings = snapshot.val();
                console.log(snapshot.val());
              }, function (err) {
                console.log('Error retrieving settings: ' + err.code + ' - ' + err.message);
                $rootScope.settings = { displayName: $scope.displayName };
              });
            $rootScope.$broadcast('vw-login');
            $location.path('/');
          }, function(error) {
            $scope.loginError = error.message.replace('FirebaseSimpleLogin: ','');
            console.log(error);
          });
      }, function(error) {
        $scope.loginError = error.message.replace('FirebaseSimpleLogin: ','');
      });
    };    
  }
]);
