import React, { useState } from "react";
import axios from "axios";
import "./city-day.svg";
import { formatDate, formatTime } from "./formatCityFunctions/dateTime";
import { calculateVisibilityIndex } from "./formatCityFunctions/visibility";
import { calculateWindDirection } from "./formatCityFunctions/windDirection";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    let localDatetime = new Date(
      response.data.dt * 1000 + response.data.timezone * 1000
    );
    let localDate = formatDate(localDatetime);
    let localTime = formatTime(localDatetime);
    let visibilityIndex = calculateVisibilityIndex(response.data.visibility);
    let windDirection = calculateWindDirection(response.data.wind.deg);
    setWeather({
      name: response.data.name,
      country: response.data.sys.country,
      datetime: { date: localDate, time: localTime },
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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "0392c3c6a728319e4bcd5bed20b65b72";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="Enter a city"
        onChange={updateCity}
      />
      <span className="search-button">
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </span>
    </form>
  );

  if (loaded) {
    return (
      <div className="Search">
        <div className="d-flex align-items-center">
          <img
            className="img-fluid"
            id="city-buildings"
            src="./city-day.svg"
            alt="city buildings"
          />
          {form}
          <span className="location-button-container">
            <button id="location-button">
              <i className="fas fa-location-arrow" id="location-arrow-icon"></i>
            </button>
          </span>
        </div>
        <h1>
          {weather.name}, {weather.country}
        </h1>
        <ul>
          <li>
            Local time: <span id="time">{weather.datetime.time}</span>
          </li>
          <li id="date">{weather.datetime.date}</li>
          <li id="weather-description">{weather.description}</li>
        </ul>
        <div className="row weather-main">
          <div className="col-7">
            <img
              className="img-fluid"
              src={weather.icon}
              alt={weather.description}
              id="icon"
            />
            <strong className="temp">{weather.temp}</strong>
            <div
              className="btn-group btn-group-sm"
              role="group"
              aria-label="Pair of radio toggle buttons"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="celsius-button"
                autoComplete="off"
                defaultChecked
              />
              <label className="btn unit-btn" htmlFor="celsius-button">
                °C
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="fahrenheit-button"
                autoComplete="off"
              />
              <label className="btn unit-btn" htmlFor="fahrenheit-button">
                °F
              </label>
            </div>
          </div>
          <div className="col-5">
            <ul className="extra-info">
              <li>
                Humidity: <span id="humidity">{weather.humidity}%</span>
              </li>
              <li>
                Wind: <span id="wind-speed">{weather.wind.speed} mph</span>,
                <span id="wind-direction"> {weather.wind.direction}</span>
              </li>
              <li>
                Visibility:{" "}
                <span id="visibility">
                  {weather.visibility.km}km, {weather.visibility.index}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <section className="weather-forecast" id="forecast"></section>
      </div>
    );
  } else {
    return (
      <div className="Search">
        <div className="d-flex align-items-center">
          <img
            className="img-fluid"
            id="city-buildings"
            src="./city-day.svg"
            alt="city buildings"
          />
          {form}
          <span className="location-button-container">
            <button id="location-button">
              <i className="fas fa-location-arrow" id="location-arrow-icon"></i>
            </button>
          </span>
        </div>
        <section className="weather-forecast" id="forecast"></section>
      </div>
    );
  }
}
