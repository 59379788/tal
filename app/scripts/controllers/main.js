'use strict';

/**
 * @ngdoc function
 * @name lineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lineApp
 */
angular.module('lineApp')
  .controller('MainCtrl', function (usermodel, $scope) {
    
    usermodel().then(function(res){
        
        $scope.user = res;
        
    }); 

  });
