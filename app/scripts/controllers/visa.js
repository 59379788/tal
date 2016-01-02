'use strict';

/**
 * @ngdoc function
 * @name lineApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the lineApp
 */
angular.module('lineApp')
  .controller('VisaCtrl', function ($scope, $location, list, country, visastate, start, stop ) {

    $scope.searchform = {};

    // 状态
    $scope.visastate = visastate;

    $scope.statearr = ["停用","正在使用"];

    /* 地区下拉列
     * ========================================= */
    country.get({pageSize : 200}, function(res){
        if(res.errcode === 0)
        {
            console.log(res.data.results);
            $scope.countryarray = res.data.results; 
            ////$scope.searchform.country = "";
        }
    });
    
    
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;             //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 7;         //每页显示几条
    
    $scope.load = function () {
        
        var para = {
        //    ta:1, 
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
       
        var keyword = $scope.searchform.keyword;
        var state = $scope.searchform.state;
        var country = $scope.searchform.country;

        if(country !== undefined) para.country_id = country;
        if(keyword !== undefined) para.title = keyword;
        if(state !== undefined) para.state = state;
        
        console.log(para);
        
        list.save(para, function(res){

            console.log(res);

           if(res.errcode == 0)
           {
                $scope.visas = res.data.results;
                //$scope.typearray = typearray;
                //console.log(res.data.results);
                //$scope.ps = res.data.results;
                $scope.bigTotalItems = res.data.totalRecord;

           }
            
        });

    };
    $scope.load();


    $scope.delete = function(linecode){   

        // if (confirm("确认要删除线路 ["+linecode+"] ？ ")) {
        //     deleteline.get({code : linecode}, function(res){
        //         if(res.errcode === 0){
        //             $scope.load();
        //         }
        //         else{
        //             alert("删除失败");
        //         }
        //     });
        // }

    };
    
    
    $scope.start = function(code){
        
        if (confirm("启用该签证后将不能编辑，确定要启用吗 ？ ")) {
            start.get({id:code}, function(res){
                if(res.errcode === 0){
                    $scope.load();
                }
                else{
                    alert("启用失败");
                }
            });
        }
    };
    
    $scope.stop = function(code){
        
        if (confirm("停用该签证后将不能报名，确定要停用吗 ？ ")) {
            stop.get({id:code}, function(res){
                if(res.errcode === 0){
                    $scope.load();
                }
                else{
                    alert("停用失败");
                }
            });
        }
    };
    

      
      
    $scope.create = function(){

        $location.path("/createvisa");
    }

   
  });
