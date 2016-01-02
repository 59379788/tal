'use strict';

/**
 * @ngdoc service
 * @name lineApp.insurance
 * @description
 * # insurance
 * Factory in the lineApp.
 */
angular.module('lineApp')
  .factory('insurance', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
