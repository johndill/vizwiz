'use strict';

/*global Firebase */

angular.module('vizwizApp')
  .factory('UserData', ['$firebase', 'firebaseUrl', 'simpleLogin',
  	function($firebase, firebaseUrl, simpleLogin) {
      return function() {
        var ref = new Firebase(firebaseUrl + '/users/' + simpleLogin.user.uid);
        return $firebase(ref).$asObject();
      };
    }
  ]);