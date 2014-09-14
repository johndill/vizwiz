'use strict';

/**
 * @ngdoc overview
 * @name vizwizApp
 * @description
 * # vizwizApp
 *
 * Main module of the application.
 */
angular
  .module('vizwizApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login',{
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup',{
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function(e, next) {
      if (!$rootScope.loggedIn && next.$$route.originalPath !== '/signup') { 
        $location.path('login');
      }
    });
  }]);
