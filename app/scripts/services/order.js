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
    
    var queryapi = zidong + "order/list";
    

    // Public API here
    return {
      query : function(){
          return $resource(queryapi, {}, {});
      }
    };
  });
