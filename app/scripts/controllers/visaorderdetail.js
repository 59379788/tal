'use strict';

/**
 * @ngdoc function
 * @name lineApp.controller:VisaorderdetailCtrl
 * @description
 * # VisaorderdetailCtrl
 * VisaorderdetailCtrl of the lineApp
 */
angular.module('lineApp')
  .controller('VisaorderdetailCtrl', function ($scope, info, $routeParams, update) {

  	var code =  $routeParams.orderid;

    console.log(code);

    $scope.statearr = ["未处理", "已处理"];

    $scope.load = function(){
    	info.get({id : code}, function(data){

        console.log(data);
    		
    		if(data.errcode !== 0) return;

    		var order = data.data;
    	
    		$scope.order = order;

    	});
    };
    $scope.load();

    $scope.heheda = function(code){

      update.get({id : code}, function(res){
          if(res.errcode === 0){
              $scope.load();
          }
          else{
              alert("更改状态失败");
          }
      });

    };
   
  });
