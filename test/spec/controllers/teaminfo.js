'use strict';

describe('Controller: TeaminfoCtrl', function () {

  // load the controller's module
  beforeEach(module('lineApp'));

  var TeaminfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeaminfoCtrl = $controller('TeaminfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeaminfoCtrl.awesomeThings.length).toBe(3);
  });
});
