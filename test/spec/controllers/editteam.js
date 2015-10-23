'use strict';

describe('Controller: EditteamCtrl', function () {

  // load the controller's module
  beforeEach(module('lineApp'));

  var EditteamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditteamCtrl = $controller('EditteamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditteamCtrl.awesomeThings.length).toBe(3);
  });
});
