'use strict';

/**
 * @ngdoc function
 * @name lineApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the lineApp
 */
angular.module('lineApp')
  .controller('OrdersCtrl', function ($scope, orders, orderstate) {
    
    $scope.searchform = {};
    console.log(orderstate);
    $scope.statearray = orderstate;
    $scope.state = 0;
    
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;             //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 5;         //每页显示几条
    
    $scope.load = function(){
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        angular.extend(para, $scope.searchform);
        
        var state = $scope.state;
        
        switch(state)
        {
            case 1 :
                para.complain_state = 1;
                break;
            case 2 ://申请退款
                para.refund_state = 1;
                break;
            case 3 ://退款中
                para.refund_state = 2;
                break;
            case 4 ://退款完成
                para.refund_state = 4;
                break;
            default :
                break;
        }
        
        console.log(para);
        
        orders.get(para, function(res){
            console.log(res);
            if(res.errcode === 0)
            {
                $scope.orders = res.data.results;
                $scope.bigTotalItems = res.data.totalRecord;
            }
        });
        
    };
    $scope.load();
    

  });
