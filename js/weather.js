const weather = document.querySelector("#weather .weatherImg");
const temperature = document.querySelector("#weather .weatherSpan1");
const city = document.querySelector("#weather .weatherSpan2");
const API_KEY = '3a7da413bdff9c64ad26c0be34150bcb';

function translation(cityName) {
  if (cityName === "Cheongju-si") {
    return "청주시"
  }
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.src = `./weather/${data.weather[0].main}.png`;
      console.log(data.weather[0].main);
      temperature.innerText = `${data.main.temp.toFixed(1)}°`;
      city.innerText = translation(data.name);
    });
}

function onGeoError() {
alert("Can't find you. No weather for you.");
}
  
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);