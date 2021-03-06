class Airport {

  constructor(weather = new Weather()) {
    this._weather = weather;
    this._hangar = []
  }

  planes() {
    return this._hangar;
  }

  clearForLanding(plane) {
    if (this._weather.isStormy()) {
      throw new Error('cannot land during storm')
    }
    this._hangar.push(plane);
  }

  clearForTakeOff(plane) {
    if (this._weather.isStormy()) {
      throw new Error('cannot takeoff during storm')
    }
    this._hangar = [];
  }
  
}