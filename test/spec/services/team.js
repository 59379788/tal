'use strict';

describe('Service: team', function () {

  // load the service's module
  beforeEach(module('lineApp'));

  // instantiate service
  var team;
  beforeEach(inject(function (_team_) {
    team = _team_;
  }));

  it('should do something', function () {
    expect(!!team).toBe(true);
  });

});
