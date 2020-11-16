'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('Has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('Can clear planes for landing', function(){

  });
});