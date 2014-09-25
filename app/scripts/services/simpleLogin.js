'use strict';

/*global Firebase */

angular.module('vizwizApp')
  .factory('simpleLogin', ['$firebaseSimpleLogin', 'firebaseUrl',
  	function($firebaseSimpleLogin, firebaseUrl) {
      var ref = new Firebase(firebaseUrl);
  		return $firebaseSimpleLogin(ref);
  	}
  ]);