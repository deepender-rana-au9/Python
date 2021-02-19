let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

searchCity = () => {
  let input = document.getElementById("inputValue").value;
  getWeatherData(input)
    .then((response) => {
      showWeatherData(response);
    })
    .catch((error) => {
      return error;
    });
};

getWeatherData = (city) => {
  const url = "https://api.openweathermap.org/data/2.5/weather";
  const fullURL = `${url}?q=${city}&appid=${API_KEY}&units=imperial`;
  const output = fetch(fullURL);
  return output
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
};

showWeatherData = (data) => {
  console.log(data);

  document.getElementById("cityName").innerText = data.name;
  document.getElementById(
    "weatherType"
  ).innerText = data.weather[0].description.toUpperCase();
  document.getElementById("temp").innerText = data.main.temp;
  document.getElementById("minTemp").innerText = data.main.temp_min;
  document.getElementById("maxTemp").innerText = data.main.temp_max;
};
