'use strict';

/**
 * @ngdoc service
 * @name lineApp.order
 * @description
 * # order
 * Factory in the lineApp.
 */
angular.module('lineApp')
  .factory('order', function ($resource, zidong, $q, $http, zidongb) {
    
    //查询列表
    var queryapi = zidong + "order/talist";
    
    //订单统计
    var statisticsapi = zidong + "order/tasalelist";

    //团所有订单
    var grouporder = zidong + "order/groupOrderList";

    //订单信息
    var orderinfoapi = zidong + "order/orderDetail";

    //定制线路订单列表
    var customorderlist = zidongb + "bookline/talist";

    //定制线路订单详情
    var customorderdetail = zidongb + "bookline/tainfo";

    //修改定制线路订单状态
    var customorderupdate = zidongb + "bookline/updatestate";
    

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
      },
      colist : function(){
          return $resource(customorderlist, {}, {});
      },
      codetail : function(){
          return $resource(customorderdetail, {}, {});
      },
      coupdate : function(){
          return $resource(customorderupdate, {}, {});
      }
    };
  });
