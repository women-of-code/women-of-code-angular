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
      }
      .state('about.contact', {
        url: "contact",
        templateUrl: "/views/about/contact.html",
        controller: 'AboutCtrl'
      })
      .state('work', {
        url: "/work/",
        abstract: true,
        templateUrl: "/views/work/container.html",
        controller: 'WorkCtrl'
      })
      .state('work.services', {
        url: "services",
        templateUrl: "/views/work/services.html",
        controller: 'WorkCtrl'
      })
      .state('work.portfolio', {
        url: "portfolio",
        templateUrl: "/views/work/portfolio.html",
        controller: 'WorkCtrl'
      })
      .state('work.process', {
        url: "process",
        templateUrl: "/views/work/process.html",
        controller: 'WorkCtrl'
      })
       .state('education', {
        url: "/education/",
        abstract: true,
        templateUrl: "/views/education/container.html",
        controller: 'EducationCtrl'
      })
      .state('education.leap', {
        url: "leap",
        templateUrl: "/views/education/leap.html",
        controller: 'EducationCtrl'
      })
      .state('education.classes', {
        url: "classes",
        templateUrl: "/views/education/classes.html",
        controller: 'EducationCtrl'
      })
        .state('education.opencarriculum', {
        url: "opencarriculum",
        templateUrl: "/views/education/opencarriculum.html",
        controller: 'EducationCtrl'
      })
       .state('community', {
        url: "/community/",
        abstract: true,
        templateUrl: "/views/community/container.html",
        controller: 'CommunityCtrl'
      })
      .state('community.events', {
        url: "events",
        templateUrl: "/views/community/events.html",
        controller: 'CommunityCtrl'
      })
      .state('community.membership', {
        url: "membership",
        templateUrl: "/views/community/membership.html",
        controller: 'CommunityCtrl'
      })
      .state('dev', {
        url: "/dev",
        templateUrl: "/views/dev.html",
        controller: 'DevCtrl'
      })

});
