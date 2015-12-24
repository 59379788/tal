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
	var linename = $routeParams.linename;

	$scope.linename = linename;

	grouporder.get({group_code : groupCode}, function(data){

		console.log(data);

		if(data.errcode !== 0) return;

		for(var i = 0; i < data.data.length; i++)
		{
			data.data[i].pers = angular.fromJson(data.data[i].tourist);
		}

		$scope.orders = data.data;

	});

  });
