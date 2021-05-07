document.addEventListener("DOMContentLoaded", () => {

  const updateTemperature = () => {
    document.getElementById("current_temp").innerText = thermostat.temperature;
  }

  const thermostat = new Thermostat();
  updateTemperature();

  document.getElementById("tempUp").addEventListener("click", () => {
    thermostat.tempUp();
    updateTemperature();
  });

  document.getElementById("tempDown").addEventListener("click", () => {
    thermostat.tempDown();
    updateTemperature();
  });

  document.getElementById("resetTemp").addEventListener("click", () => {
    thermostat.reset();
    updateTemperature();
  });

  document.getElementById("psm_on_button").addEventListener("click", () => {
    thermostat.powerSavingModeOn();
    document.getElementById("psm_status").innerHTML="<span class='psm_on'> on</span>";
  });

  document.getElementById("psm_off_button").addEventListener("click", () => {
    thermostat.powerSavingModeOff();
    document.getElementById("psm_status").innerHTML="<span class='psm_off'> off</span>";
  });

});

