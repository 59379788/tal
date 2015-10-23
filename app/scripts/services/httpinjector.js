'use strict';

/**
 * @ngdoc service
 * @name lineApp.httpInjector
 * @description
 * # httpInjector
 * Factory in the lineApp.
 */
angular.module('lineApp')
  .factory('httpInjector', function ($location) {
    var responseInterceptor = {
        response: function(response) {
            //console.log(response)
            if(response.data.errcode === 1001)
            {
                window.location = "/manager/login";
            }
            return response;
        }
    };

    return responseInterceptor;
});
