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

  document.getElementById("psmOnButton").addEventListener("click", () => {
    thermostat.powerSavingModeOn();
    document.getElementById("psm_status").innerHTML="<span class='psm_on'> on</span>";
  });

  document.getElementById("psmOffButton").addEventListener("click", () => {
    thermostat.powerSavingModeOff();
    document.getElementById("psm_status").innerHTML="<span class='psm_off'> off</span>";
  });

  document.getElementById("getCity").addEventListener("click", () => {
    const citySearch = document.getElementById("getCityText").value;
    document.getElementById("getCityText").value = '';

    async function getCityWeather(){
      await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&appid=7128292c1f8f799b763f5b63ce9c1b27`)
        .then(response => {
          return response.json()})
        .then((data) => {
          document.getElementById("cityTemp").innerHTML = `${data.main.temp} degrees in ${citySearch}`;
        })
    };
    getCityWeather();
  });


  async function getPostData() {
    await fetch ('https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=7128292c1f8f799b763f5b63ce9c1b27')
      .then(response => {
        return response.json()})
      .then((data) => {
        document.getElementById("cityTemp").innerHTML = `${data.main.temp} degrees in London`;
      })
    };

getPostData();

});

