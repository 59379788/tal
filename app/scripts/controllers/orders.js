'use strict';

/**
 * @ngdoc function
 * @name lineApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the lineApp
 */
angular.module('lineApp')
  .controller('OrdersCtrl', function ($scope, orders) {
    
    console.log(orders);
    
    $scope.searchform = {};
    
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;             //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 7         //每页显示几条
    
    $scope.load = function(){
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        angular.extend(para, $scope.searchform);
        
        console.log(para);
        
        return;
        
        orders.get(para, function(res){
           if(res.errcode === 0)
           {
                $scope.orders = res.data.results;
                $scope.bigTotalItems = res.data.totalRecord;
           }
        });
        
    };
    $scope.load();
    

    
    
  });
