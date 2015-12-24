'use strict';

/**
 * @ngdoc function
 * @name lineApp.controller:OrderinfoCtrl
 * @description
 * # OrderinfoCtrl
 * Controller of the lineApp
 */
angular.module('lineApp')
  .controller('OrderinfoCtrl', function ($scope, info, $routeParams) {

  	var code =  $routeParams.orderid;

  	console.log(code);

  	info.get({code : code}, function(data){

  		console.log(data);

  		if(data.errcode !== 0) return;

  		$scope.order = data.data;

  	});
   
  });
