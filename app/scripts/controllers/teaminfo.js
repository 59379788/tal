'use strict';

/**
 * @ngdoc function
 * @name lineApp.controller:TeaminfoCtrl
 * @description
 * # TeaminfoCtrl
 * Controller of the lineApp
 */
angular.module('lineApp')
  .controller('TeaminfoCtrl', function ($scope, grouporder, $routeParams) {

	var groupCode =  $routeParams.teamid;

	grouporder.get({group_code : groupCode}, function(data){

			console.log(data);

		if(data.errcode !== 0) return;


	

		$scope.orders = data.data;


	});

  });
