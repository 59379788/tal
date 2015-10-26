'use strict';

/**
 * @ngdoc service
 * @name lineApp.common
 * @description
 * # common
 * Factory in the lineApp.
 */
angular.module('lineApp')
  .factory('common', function ($resource, zidong, $q, $http) {
    
    //区域
    var areaapi = zidong + "area/list";
    
    //保险
    //var insuranceapi = zidong + "insurance/talist";
    
    //添加一个保险
    var createinsuranceapi = zidong + "insurance/add";
    
    //获取保险列表
    var queryinsuranceapi = zidong + "insurance/talist";
    
    //获取可用保险列表
    var queryopeninsuranceapi = zidong + "insurance/taopenlist";
    
    var startinsuranceapi = zidong + "insurance/onshelf";
    
    var stopinsuranceapi = zidong + "insurance/offshelf";
    

    // Public API here
    return {
      getArea : function () {
        return $resource(areaapi, {}, {});
      },
      insmodel : {
          
          title : "",
          platformprice : 0,
          stbprice : 0,
          description : ""
          
      },
      getOpenInsurance : function (obj) {
        var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
          $http({method: 'GET', params: obj, url: queryopeninsuranceapi}).  
          success(function(data, status, headers, config) {  
            deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
          }).  
          error(function(data, status, headers, config) {  
            deferred.reject(data);   // 声明执行失败，即服务器返回错误  
          });  
          return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
      },
      createInsurance : function(obj){
          var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
          $http({method: 'POST', data: obj, url: createinsuranceapi}).
          success(function(data, status, headers, config) {  
            deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
          }).  
          error(function(data, status, headers, config) {  
            deferred.reject(data);   // 声明执行失败，即服务器返回错误  
          });  
          return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
        //return $resource(createinsuranceapi, {}, {});
      },
      queryInsurance : function(obj){
          var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
          $http({method: 'GET', params: obj, url: queryinsuranceapi}).  
          success(function(data, status, headers, config) {  
            deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
          }).  
          error(function(data, status, headers, config) {  
            deferred.reject(data);   // 声明执行失败，即服务器返回错误  
          });  
          return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
        //return $resource(queryinsuranceapi, {}, {});
      },
      startInsurance : function(obj){
          var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
          $http({method: 'GET', params: obj, url: startinsuranceapi}).  
          success(function(data, status, headers, config) {  
            deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
          }).  
          error(function(data, status, headers, config) {  
            deferred.reject(data);   // 声明执行失败，即服务器返回错误  
          });  
          return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
      },
      stopInsurance : function(obj){
          var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
          $http({method: 'GET', params: obj, url: stopinsuranceapi}).  
          success(function(data, status, headers, config) {  
            deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
          }).  
          error(function(data, status, headers, config) {  
            deferred.reject(data);   // 声明执行失败，即服务器返回错误  
          });  
          return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
      },
      examine : [
          {name : "全部", code : 9999},
          {name : "未提交", code : 0},
          {name : "审核通过", code : 1},
          {name : "未通过", code : 2},
          {name : "待审核", code : 3}
      ],
      state : [
          {name : "全部", code : 9999},
          {name : "未上线", code : 0},
          {name : "使用", code : 1},
          {name : "停用", code : 2}
      ],
      publishType : [
          {name : "全部", code : 9999},
          {name : "非补贴", code : 0},
          {name : "补贴游", code : 1},
          {name : "公益游", code : 2}
      ],
      orderstate : [
          {name : "全部", code : 0},
          {name : "投诉中", code : 1},
          {name : "申请退款", code : 2},
          {name : "退款中", code : 3},
          {name : "退款完成", code : 4}
      ]
    };
  });
