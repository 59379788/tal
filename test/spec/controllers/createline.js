'use strict';

describe('Controller: CreatelineCtrl', function () {

  // load the controller's module
  beforeEach(module('lineApp'));

  var CreatelineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatelineCtrl = $controller('CreatelineCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreatelineCtrl.awesomeThings.length).toBe(3);
  });
});
