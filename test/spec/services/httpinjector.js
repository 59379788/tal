'use strict';

describe('Service: httpInjector', function () {

  // load the service's module
  beforeEach(module('lineApp'));

  // instantiate service
  var httpInjector;
  beforeEach(inject(function (_httpInjector_) {
    httpInjector = _httpInjector_;
  }));

  it('should do something', function () {
    expect(!!httpInjector).toBe(true);
  });

});
