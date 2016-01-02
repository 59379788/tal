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
  		
  		if(data.errcode !== 0) return;

  		var order = data.data;

  		if(order.pay_state == 1)
  		{
  			order.pay_state = "已支付";
  		}
  		else if(order.pay_state == 0)
  		{
  			order.pay_state = "未支付";
  		}
  		else
  		{
  			order.pay_state = "";
  		}

  		//联系人保险
  		order.contract_insurance = order.contract_insurance === 1 ? "有":"无";

  		console.log(order);	


  		if(order.tourist !== undefined) 
  		{
  			order.pers = angular.fromJson(order.tourist);

	  		//其他人保险
	  		for(var i = 0; i < order.pers.length; i++)
	  		{
	  			order.pers[i].insurance = order.pers[i].insurance === false ? "无" : "有";
	  		}	
  		}

  	
  		$scope.order = order;

  	});
   
  });
