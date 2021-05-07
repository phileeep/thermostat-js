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
      thermostat.temperature = 10
      expect(() => { thermostat.tempDown(); }).toThrowError('Cannot lower the temperature below 10 degrees');
    });
    it("Can return it's current temperature", () => {
      thermostat.temperature = 25
      expect(thermostat.getCurrentTemperature()).toEqual(25)
    });
  });
  
  describe('Power saving mode', () => {
    it('Has a max temperature of 25 degrees when on', () =>{
      thermostat.powerSavingModeOn();
      expect(thermostat.maxTemperature).toEqual(25);
    });
    it('It returns its max temperature of 25 degrees when turned off', () =>{
      thermostat.powerSavingModeOn();
      thermostat.powerSavingModeOff();
      expect(thermostat.maxTemperature).toEqual(32);
    });
    it('Has power saving mode turned on by default', () => {
      expect(thermostat.maxTemperature).toEqual(thermostat.TEMP_PSM_ON);
    });
  });

  describe('Reset', () => {
    it('Can reset the temperature back to 20 degrees', () => {
      thermostat.tempUp();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('current usage', () => {
    it('Can display low usage for lower temparatures', () => {
      thermostat.temperature = 10;
      expect(thermostat.currentUsage()).toEqual('low-usage');
    });
    it('Can display medium usage for a medium temperature', () => {
      thermostat.temperature = 24
      expect(thermostat.currentUsage()).toEqual('medium-usage');
    });
    it('Can display high usage for a high temperature', () => {
      thermostat.temperature = 32
      expect(thermostat.currentUsage()).toEqual('high-usage');
    });
  });
});