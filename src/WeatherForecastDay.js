import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let scale = props.scale;
  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function highTemp() {
    let hiTemp = 0;
    if (scale === "metric") {
      hiTemp = Math.round(props.forecast.temp.max);
    } else {
      hiTemp = Math.round(props.forecast.temp.max * 1.8 + 32);
    }
    return `${hiTemp}°`;
  }

  function lowTemp() {
    let loTemp = 0;
    if (scale === "metric") {
      loTemp = Math.round(props.forecast.temp.min);
    } else {
      loTemp = Math.round(props.forecast.temp.min * 1.8 + 32);
    }
    return `${loTemp}°`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecastDay-day">{day()}</div>
      <WeatherIcon
        code={props.forecast.weather[0].icon}
        size={45}
        mode={props.mode}
      />
      <div className="WeatherForecastDay-temps">
        <span className="WeatherForecastDay-temp-hi">{highTemp()}</span>{" "}
        <span className="WeatherForecastDay-temp-lo">{lowTemp()}</span>
      </div>
    </div>
  );
}
