'use strict';

describe('Controller: TeamlistCtrl', function () {

  // load the controller's module
  beforeEach(module('lineApp'));

  var TeamlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamlistCtrl = $controller('TeamlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeamlistCtrl.awesomeThings.length).toBe(3);
  });
});
