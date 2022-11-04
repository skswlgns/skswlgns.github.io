const API_KEY = "f2f2cbde67b941f2441010822efe16bf";
const city = document.querySelector(".city");
const weather = document.querySelector(".weather");

const getLocation = (location) => {
  const latitude = location.coords.latitude;
  const longitude = location.coords.longitude;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      city.innerText = json.name;
      const currentWeater = json.weather[0].main;
      const img = document.createElement("img");
      if (currentWeater === "Clear") {
        img.src = "http://openweathermap.org/img/wn/01d@2x.png";
        weather.appendChild(img);
      } else if (currentWeater === "Clouds") {
        img.src = "http://openweathermap.org/img/wn/03d@2x.png";
        weather.appendChild(img);
      } else if (currentWeater === "Rain") {
        img.src = "http://openweathermap.org/img/wn/09d@2x.png";
        weather.appendChild(img);
      } else if (currentWeater === "Thunderstorm") {
        img.src = "http://openweathermap.org/img/wn/11d@2x.png";
        weather.appendChild(img);
      } else if (currentWeater === "Drizzle") {
        img.src = "http://openweathermap.org/img/wn/50d@2x.png";
        weather.appendChild(img);
      } else if (currentWeater === "Snow") {
        img.src = "http://openweathermap.org/img/wn/13d@2x.png";
        weather.appendChild(img);
      } else if (currentWeater === "Atmosphere") {
        img.src = "http://openweathermap.org/img/wn/50d@2x.png";
        weather.appendChild(img);
      }
    });
};

const getError = (err) => {
  console.log(err);
};

navigator.geolocation.getCurrentPosition(getLocation, getError);
