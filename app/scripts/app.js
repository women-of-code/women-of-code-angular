'use strict';

/**
 * @ngdoc overview
 * @name elliecodesApp
 * @description
 * # elliecodesApp
 *
 * Main module of the application.
 */
var app = angular
  .module('womenOfCodeApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  //
  var i = 0;
  var languages =['ruby', 'javascript'];
  var prepositions =['for', 'with'];

  $urlRouterProvider.otherwise('/');
  //
  $stateProvider
       .state('home', {
        url: "/",
        templateUrl: "views/home.html",
        controller: 'MainCtrl'
      })
       .state('about', {
        url: "/about",
        templateUrl: "views/about.html",
        controller: 'AboutCtrl'
      })
        .state('dev', {
        url: "/dev",
        templateUrl: "views/dev.html",
        controller: 'DevCtrl'
      })

});
