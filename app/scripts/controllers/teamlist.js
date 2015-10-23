'use strict';

/**
 * @ngdoc function
 * @name lineApp.controller:TeamlistCtrl
 * @description
 * # TeamlistCtrl
 * Controller of the lineApp
 */
angular.module('lineApp')
  .controller('TeamlistCtrl', function ($scope, list, $routeParams, shangjia, xiajia, del, finish, stateArray) {
    
    var lineid =  $routeParams.lineid;
    $scope.stateArray = stateArray;
    
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;             //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 10         //每页显示几条
    
    $scope.load = function () {
        
        list.get({line:lineid, pageNo:$scope.bigCurrentPage, pageSize:$scope.itemsPerPage}, function(res){
            
            //console.log(res);

           if(res.errcode == 0)
           {
                //console.log(res.data.results);
                $scope.teams = res.data.results;
                $scope.bigTotalItems = res.data.totalRecord;
           }
            
        });

    };
    $scope.load();
    
    
   
    
    $scope.shangjia = function(code){
        
        shangjia.get({code:code}, function(res){
            //console.log(res);
            if(res.errcode === 0){
                $scope.load();
            }else{
                alert("操作失败");
            }
        });
    };
    
    $scope.xiajia = function(code){
        
        xiajia.get({code:code}, function(res){
            //console.log(res);
            if(res.errcode === 0){
                $scope.load();
            }else{
                alert("操作失败");
            }
        });
    };
    
    $scope.delete = function(code){
        
        if (confirm("确认要删除团号为 ["+code+"] 的游团吗？ ")) {
            del.get({code:code}, function(res){
                //console.log(res);
                if(res.errcode === 0){
                    $scope.load();
                }else{
                    alert("删除失败");
                }
            });
        }
        
    };
    
    $scope.finish = function(code){
        
        finish.get({code:code}, function(res){
            //console.log(res);
            if(res.errcode === 0){
                $scope.load();
            }else{
                alert("操作失败");
            }
        });
    };
    
    
    
  });
