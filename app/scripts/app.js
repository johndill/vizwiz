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
    'ngTouch',
    'ui.bootstrap',
    'ui.layout',
    'firebase'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(false);
  }])
  .run(['$rootScope', '$location', 'simpleLogin', function($rootScope, $location, simpleLogin) {
    $rootScope.$on('$routeChangeStart', function(e, next) {
      if (!simpleLogin.user && next.$$route.originalPath !== '/signup') {
        $location.path('login');
      }
    });
  }])
  .constant('firebaseUrl','https://vizwiz.firebaseio.com/');
