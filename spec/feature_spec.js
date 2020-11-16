'use strict';

describe('Feature test', function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it('Can land a plane', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});