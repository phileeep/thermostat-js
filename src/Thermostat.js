class Thermostat {

  constructor(temperature = 20){
    this.temperature = temperature;
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
}