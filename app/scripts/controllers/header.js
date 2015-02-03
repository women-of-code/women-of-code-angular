'use strict';

/**
 * @ngdoc function
 * @name elliecodesApp.controller:ConsoleCtrl
 * @description
 * # ConsoleCtrl
 * Controller of the elliecodesApp
 */
angular.module('womenOfCodeApp')
  .controller('HeaderCtrl', function ($scope) {
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
    // Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main-nav').hasClass('open-nav')) {
        $('.main-nav').removeClass('open-nav');
        $('.masthead').removeClass('revealed');
        //$('.mobile-toggle span').removeClass('white-color');
                    $('.sub-nav-holder').fadeOut('fast');
                                $('.menu-panel').stop().animate({
                                                    right: "3000px"
                                                    }, 2000, function() {
                                                    // Animation complete.
                                                    });




    } else {
        //$('.mobile-toggle span').addClass('white-color');
        $('.main-nav').addClass('open-nav');
        $('.masthead').addClass('revealed');
       $('.menu-panel').stop().animate({
                                right: "50%"
                                }, 1000, function() {
                                // Animation complete.
                                });
    }
});


$('.masthead, .mastwrap').click(function(){
        $('.main-nav').removeClass('open-nav');
        $('.masthead').removeClass('revealed');
        //$('.mobile-toggle span').removeClass('white-color');
            
        $('.sub-nav-holder').fadeOut('fast');
        $('.menu-panel').stop().animate({
            right: "3000px"
            }, 2000, function() {
            // Animation complete.
        });


})

    //Navigation Sub Menu Triggering on hover
    $('.trigger-sub-nav a').mouseenter(function(){
        $('.sub-nav').hide();
        $('.trigger-sub-nav a').removeClass('current-main-nav');
        $(this).addClass('current-main-nav');
        $('.sub-nav-holder').show();
        var subnavIndex = $(this).attr('data-sub-nav-target');
        $('.sub-nav-'+subnavIndex).show();
    })

    $('.sub-nav a').click(function(){
        $('.main-nav').removeClass('open-nav');
        $('.masthead').removeClass('revealed');
        //$('.mobile-toggle span').removeClass('white-color');
            
        $('.sub-nav-holder').fadeOut('fast');
        $('.menu-panel').stop().animate({
            right: "3000px"
            }, 2000, function() {
            // Animation complete.
        });
    })

    $("ul .black").click(function(){
       $(".slimmenu").hide();

    });

    //Navigation Sub Menu Triggering on click
    $('.trigger-sub-nav a').click(function(){
        $('.sub-nav').hide();
        $('.trigger-sub-nav a').removeClass('current-main-nav');
        $(this).addClass('current-main-nav');
        $('.sub-nav-holder').show();
        var subnavIndex = $(this).attr('data-sub-nav-target');
        $('.sub-nav-'+subnavIndex).show();
    });


  };
  });
