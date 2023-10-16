import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  const [weatherData, setWeatherDate] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultcity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherDate({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      describtion: response.data.Weather[0].describtion,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    const apiKey = "d1a86552de255334f6117b348c4519bd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${tcity}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function habdleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="weather"></div>
        <form onSubmit={handleSubmit}>
          <WeatherInfo data={weatherData} />
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={habdleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" vlaue="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        ;
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
