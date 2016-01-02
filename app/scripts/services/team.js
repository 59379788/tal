'use strict';

/**
 * @ngdoc service
 * @name lineApp.team
 * @description
 * # team
 * Factory in the lineApp.
 */
angular.module('lineApp')
  .factory('team', function ($resource, zidong, shoudong) {
    
    
    //发团
    var createteamapi = shoudong + "groupService/create";
    //查询团列表
    var teamlistapi = zidong + "group/list";
    //上架
    var shangjiaapi = zidong + "group/start";
    //下架
    var xiajiaapi = zidong + "group/cancel";
    //删除
    var delapi = zidong + "group/del";
    //封团
    var finishapi = zidong + "group/finish";
    //编辑
    var editapi = zidong + "group/edit";
    
    //查询团信息
    var infoapi = zidong + "group/info";
    
    
    var state_array = ["等待开团","开团","封团","取消"];
    

    // Public API here
    return {
      model : {
          
          daysarr : [],
          person_limit : "30",
          
          platform_adult : "0",     //平台成人价格
          stb_adult : "0",          //同业成人价格
          subsidy_adult : "0",      //补贴成人价格
          discount_adult : "0",     //让利成人价格
          platform_child : "0",     //平台儿童价格
          stb_child : "0",          //同业儿童价格
          subsidy_child : "0",      //补贴儿童价格
          discount_child : "0",     //让利儿童价格
          
          start_advance : "0",  //报名开始前几个小时
          end_advance : "0",    //报名截止提前X个小时
          operator : "dlq"
          
      },
      stateArray : state_array,
      createteam : function(){
          return $resource(createteamapi, {}, {});
      },
      list : function(){
          return $resource(teamlistapi, {}, {});
      },
      shangjia : function(){
          return $resource(shangjiaapi, {}, {});
      },
      xiajia : function(){
          return $resource(xiajiaapi, {}, {});
      },
      del : function(){
          return $resource(delapi, {}, {});
      },
      finish : function(){
          return $resource(finishapi, {}, {});
      },
      edit : function(){
          return $resource(editapi, {}, {});
      },
      info : function(){
          return $resource(infoapi, {}, {});
      }
    };
  });
