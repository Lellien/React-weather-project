import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function showForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "0392c3c6a728319e4bcd5bed20b65b72";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showForecast);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map((forecastDay, index) => {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay
                    forecast={forecastDay}
                    scale={props.scale}
                    mode={props.mode}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return "Loading forecast";
  }
}
