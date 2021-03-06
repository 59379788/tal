'use strict';

describe('Controller: InsuranceCtrl', function () {

  // load the controller's module
  beforeEach(module('lineApp'));

  var InsuranceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InsuranceCtrl = $controller('InsuranceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InsuranceCtrl.awesomeThings.length).toBe(3);
  });
});
