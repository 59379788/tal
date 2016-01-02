'use strict';

describe('Service: insurance', function () {

  // load the service's module
  beforeEach(module('lineApp'));

  // instantiate service
  var insurance;
  beforeEach(inject(function (_insurance_) {
    insurance = _insurance_;
  }));

  it('should do something', function () {
    expect(!!insurance).toBe(true);
  });

});
