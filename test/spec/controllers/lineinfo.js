'use strict';

describe('Controller: LineinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('lineApp'));

  var LineinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LineinfoCtrl = $controller('LineinfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LineinfoCtrl.awesomeThings.length).toBe(3);
  });
});
