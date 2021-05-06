'use strict';

describe('Thermostat', function() {

  let thermostat;
  let defaultTemperature = 20;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Thermostat basic function', () => {
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
  describe('Power saving mode', () => {
    it('Has a max temperature of 25 degrees when on', () =>{
      thermostat.powerSavingMode(true);
      expect(thermostat.maxTemperature).toEqual(25);
    });
    it('It returns its max temperature of 25 degrees when turned off', () =>{
      thermostat.powerSavingMode(true);
      thermostat.powerSavingMode(false);
      expect(thermostat.maxTemperature).toEqual(32);
    });
    it('Has power saving mode turned on by default', () => {
      thermostat.powerSavingMode();
      expect(thermostat.maxTemperature).toEqual(25);
    });
  });
});