'use strict';

/**
 * @ngdoc function
 * @name elliecodesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elliecodesApp
 */
angular.module('womenOfCodeApp')
  .controller('AboutCtrl', function ($scope, $http) {
    $scope.name = "Akiko";
    $( ".thanks" ).hide();
    $scope.submitContact = function() {
      $http.post('https://women-of-code.herokuapp.com/entries', {
        first_name: $scope.first_name,
        last_name: $scope.last_name,
        email: $scope.email,
        message: $scope.message

      }); 
    };
    $scope.onSend = function(){
      $( ".sendMessage" ).hide();
      $( ".thanks" ).show();
    };

    $scope.showModal = function(id) {
        $('#portfolioModal'+id).modal('show');
    };
  });
