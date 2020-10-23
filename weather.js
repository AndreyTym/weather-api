fetch(
  "http://api.openweathermap.org/data/2.5/weather?id=703448&appid=13ee7c50a2243d966a4c532c73ce1681"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".city-name").textContent = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp - 273) + "&deg";
    document.querySelector(".clouds").textContent =
      data.weather[0]["description"];
    document.querySelector(
      ".weather-icon"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
    document.querySelector(
      ".wind"
    ).textContent = ` Wind ${data.wind.speed} m/s`;
  })
  .catch(function () {});
