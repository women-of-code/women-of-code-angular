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
        templateUrl: "/views/home.html",
        controller: 'MainCtrl'
      })
       .state('about', {
        url: "/about/",
        abstract: true,
        templateUrl: "/views/about/container.html",
        controller: 'AboutCtrl'
      })
      .state('about.team', {
        url: "team",
        templateUrl: "/views/about/team.html",
        controller: 'AboutCtrl'
      })
      .state('about.mission', {
        url: "mission",
        templateUrl: "/views/about/mission.html",
        controller: 'AboutCtrl'
      })
        .state('join', {
        url: "/join",
        templateUrl: "/views/join.html",
        controller: 'JoinCtrl'
      })

});
