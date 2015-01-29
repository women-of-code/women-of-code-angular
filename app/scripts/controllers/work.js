'use strict';

/**
 * @ngdoc function
 * @name elliecodesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elliecodesApp
 */
angular.module('womenOfCodeApp')
  .controller('WorkCtrl', function ($scope, $http, $rootScope) {

    $scope.services = function(){
        $rootScope.subAboutPage = "Services";
    };
     $scope.portfolio = function(){
        $rootScope.subAboutPage = "Portfolio";
    };
     $scope.process = function(){
        $rootScope.subAboutPage = "Process";
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

    //Mobile Menu (multi level)
    $('ul.slimmenu').slimmenu({
        resizeWidth: '1200',
        collapserTitle: 'menu',
        easingEffect:'easeInOutQuint',
        animSpeed:'medium',
    });


  };
    
  });
