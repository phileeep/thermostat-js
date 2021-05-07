class Thermostat {

  constructor(){
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MINIMUM_TEMPERATURE = 10;
    this.TEMP_PSM_ON = 25;
    this.TEMP_PSM_OFF = 32;
    this.maxTemperature = this.TEMP_PSM_ON;
  }  

  getCurrentTemperature(){
    return this.temperature;
  }

  tempUp() {
    return this.temperature += 10;
  }

  tempDown() {
    if (this.temperature <= this.MINIMUM_TEMPERATURE) {
      throw new Error ('Cannot lower the temperature below 10 degrees');
    }
    return this.temperature -= 10;
  }

  powerSavingModeOn(){
    this.maxTemperature = this.TEMP_PSM_ON;
  };

  powerSavingModeOff(){
    this.maxTemperature = this.TEMP_PSM_OFF;
  };

  reset() {
    this.temperature = 20;
  }

  currentUsage() {
    if (this.temperature < 18){
      return 'low-usage';
    } else if (this.temperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
};