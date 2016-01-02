'use strict';

describe('Controller: EditlineCtrl', function () {

  // load the controller's module
  beforeEach(module('lineApp'));

  var EditlineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditlineCtrl = $controller('EditlineCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditlineCtrl.awesomeThings.length).toBe(3);
  });
});
