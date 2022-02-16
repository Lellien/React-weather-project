import React, { useState } from "react";
import axios from "axios";
import UrbanImage from "./UrbanImage/UrbanImage";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [scale, setScale] = useState("metric");

  function changeScale(unit) {
    setScale(unit);
  }

  function showWeather(response) {
    let localDatetime = new Date(
      response.data.dt * 1000 + response.data.timezone * 1000
    );
    setWeatherData({
      loaded: true,
      name: response.data.name,
      country: response.data.sys.country,
      datetime: { localDatetime },
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind,
      visibility: response.data.visibility,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function search() {
    let apiKey = "870ab1b91a708644ba5aea1e514c8cf0";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
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
            <button title="Your location" id="location-button">
              <i className="fas fa-location-arrow" id="location-arrow-icon"></i>
            </button>
          </span>
        </div>
        <WeatherInfo
          data={weatherData}
          scale={scale}
          scaleChange={changeScale}
        />
        <WeatherForecast
          coordinates={weatherData.coordinates}
          scale={scale}
        />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
