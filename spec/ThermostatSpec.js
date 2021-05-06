'use strict';

describe('Thermostat', function() {

  let thermostat;
  let defaultTemperature = 20;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Thermostat functions', () => {
    it ('Should have a default temperature', () => {
      expect(thermostat.temperature).toEqual(20);
    });
    it ('Can increase the temperature', () => {
      expect(thermostat.tempUp()).toEqual(defaultTemperature + 10);
    });
    it ('Can decrease the temperature', () =>{
      expect(thermostat.tempDown()).toEqual(defaultTemperature - 10);
    });
    it ('Cannot lower the temperature lower than 10 degrees', () => {
      thermostat = new Thermostat(10)
      expect(() => { thermostat.tempDown(); }).toThrowError('Cannot lower the temperature below 10 degrees');
    });
  });
});