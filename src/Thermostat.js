class Thermostat {

  constructor(){
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MINIMUM_TEMPERATURE = 10;
    this.TEMP_PSM_ON = 25;
    this.TEMP_PSM_OFF = 32;
    this.maxTemperature = this.TEMP_PSM_ON;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
  }  

  getCurrentTemperature(){
    return this.temperature;
  }

  tempUp() {
    return this.temperature += 1;
  }

  tempDown() {
    if (this.temperature <= this.MINIMUM_TEMPERATURE) {
      throw new Error ('Cannot lower the temperature below 10 degrees');
    }
    return this.temperature -= 1;
  }

  powerSavingModeOn(){
    this.maxTemperature = this.TEMP_PSM_ON;
  };

  powerSavingModeOff(){
    this.maxTemperature = this.TEMP_PSM_OFF;
  };

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  currentUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
      return 'low-usage';
    } else if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
};