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
    var queryapi = zidong + "order/talist";
    
    //订单统计
    var statisticsapi = zidong + "order/tasalelist";

    //团所有订单
    var grouporder = zidong + "order/groupOrderList";



    var orderinfoapi = zidong + "";
    

    // Public API here
    return {
      query : function(){
          return $resource(queryapi, {}, {});
      },
      statistics : function(){
          return $resource(statisticsapi, {}, {});
      },
      info : function(){
          return $resource(orderinfoapi, {}, {});
      },
      grouporder : function(){
          return $resource(grouporder, {}, {});
      }
    };
  });
