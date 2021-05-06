class Thermostat {

  constructor(temperature = 20){
    this.temperature = temperature;
    this.maxTemperature = 32
  }  

  tempUp() {
    return this.temperature += 10;
  }

  tempDown() {
    if (this.temperature <= 10) {
      throw new Error ('Cannot lower the temperature below 10 degrees');
    }
    return this.temperature -= 10;
  }

  powerSavingMode(value = true){
    if (value == true){
      this.maxTemperature = 25
    } else {
      this.maxTemperature = 32
    }
  };
}