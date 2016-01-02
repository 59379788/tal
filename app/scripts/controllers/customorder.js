'use strict';

/**
 * @ngdoc function
 * @name lineApp.controller:CustomorderCtrl
 * @description
 * # AboutCtrl
 * Controller of the lineApp
 */
angular.module('lineApp')
  .controller('CustomorderCtrl', function ($scope, list) {

  	$scope.statearr = ["未处理", "已处理"];
    
  	$scope.today = function() {
        $scope.dt1 = $scope.dt2 = new Date();
    };
    $scope.today();
    
    $scope.open1 = function($event) {
        $scope.status1.opened = true;
    }; 

    $scope.status1 = {
        opened: false
    };

    $scope.open2 = function($event) {
        $scope.status2.opened = true;
    }; 

    $scope.status2 = {
        opened: false
    };


    /* 分页
     * ========================================= */
    $scope.maxSize = 5;             //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 7         //每页显示几条
    
    $scope.load = function () {
        
        var para = {
        //    ta:1, 
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
            start_time : getDate($scope.dt1) + " 00:00:00",
            end_time : getDate($scope.dt2) + " 23:59:59",
            state : $scope.state
        };

        
       // console.log(para);
        
        list.get(para, function(res){

        	console.log(res);

           if(res.errcode == 0)
           {
                $scope.orders = res.data.results;
                $scope.bigTotalItems = res.data.totalRecord;
           }
           else
           {
           		alert("数据获取失败");
           }
            
        });

    };
    $scope.load();
    
    function getDate(d){
        return d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
    }

  });
