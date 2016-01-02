'use strict';

/**
 * @ngdoc service
 * @name lineApp.visa
 * @description
 * # visa
 * Factory in the lineApp.
 */
angular.module('lineApp')
  .factory('visa', function (zidongb, $resource) {
    
    var list = zidongb + "visa/talist";

    var create = zidongb + "visa/add";

    var detail = zidongb + "";

    var modify = zidongb + "";

    //启用签证
    var start = zidongb + "visa/start";

    //停用签证
    var stop = zidongb + "visa/stop";



    // Public API here
    return {
      model : function(){

        return {

          country_id : "",
          title : "",
          platformprice : "",
          labels : "",
          special : "",
          img : ""

        }

      },
      //签证列表
      list : function(){
          return $resource(list, {}, {});
      },
      //
      create : function(){
          return $resource(create, {}, {});
      },
      start : function(){
          return $resource(start, {}, {});
      },
      stop : function(){
          return $resource(stop, {}, {});
      }
    };
  });
