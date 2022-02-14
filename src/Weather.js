import React, { useState } from "react";
import axios from "axios";
import UrbanImage from "./UrbanImage";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import {
  calculateVisibilityIndex,
  calculateWindDirection,
} from "./weatherFunctions";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [scale, setScale] = useState("metric");

  function toggleScale(unit) {
    setScale(unit);
  }

  function displayWeather(response) {
    let localDatetime = new Date(
      response.data.dt * 1000 + response.data.timezone * 1000
    );
    let visibilityIndex = calculateVisibilityIndex(response.data.visibility);
    let windDirection = calculateWindDirection(response.data.wind.deg);
    setWeatherData({
      loaded: true,
      name: response.data.name,
      country: response.data.sys.country,
      datetime: { localDatetime },
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: {
        direction: windDirection,
        speed: Math.round(response.data.wind.speed * 2.2369363),
      }, //convert to miles
      visibility: {
        km: Math.round(response.data.visibility / 1000),
        index: visibilityIndex,
      },
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = "0392c3c6a728319e4bcd5bed20b65b72";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="d-flex align-items-center">
          <UrbanImage dayNight={weatherData.datetime.time} />
          <Search update={updateCity} submit={handleSubmit} />
          <span className="location-button-container">
            <button id="location-button">
              <i className="fas fa-location-arrow" id="location-arrow-icon"></i>
            </button>
          </span>
        </div>
        <WeatherInfo
          data={weatherData}
          scale={scale}
          scaleChange={toggleScale}
        />
        <section className="weather-forecast" id="forecast"></section>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
