'use strict';

/**
 * @ngdoc service
 * @name lineApp.order
 * @description
 * # order
 * Factory in the lineApp.
 */
angular.module('lineApp')
  .factory('order', function ($resource, zidong, $q, $http) {
    
    //查询列表
    var queryapi = zidong + "order/list";
    
    //订单统计
    var statisticsapi = zidong + "order/statistics";
    

    // Public API here
    return {
      query : function(){
          return $resource(queryapi, {}, {});
      },
      statistics : function(){
          return $resource(statisticsapi, {}, {});
      }
    };
  });
