'use strict';

/**
 * @ngdoc function
 * @name elliecodesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elliecodesApp
 */
angular.module('womenOfCodeApp')
  .controller('EducationCtrl', function ($scope, $http, $rootScope) {

    $scope.leap = function(){
        $rootScope.subAboutPage = "Leap Program";
    };
    $scope.classes = function(){
        $rootScope.subAboutPage = "Classes";
    };
    $scope.openCarriculum = function(){
        $rootScope.subAboutPage = "Open Carriculum";
    };

    $scope.init = function () {

     
    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();


     //Adjusting Intro Components Spacing based on detected screen resolution
     $('.fullheight').css('height',vH);
     $('.halfheight').css('height',vH/2);
     $('.fullwidth').css('width',vW);
     $('.halfwidth').css('width',vW/2);
  
    $('.page-fold.subtle').next().css('margin-top',vH);


  };
    
  });
