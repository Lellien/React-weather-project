import React from "react";
import ScaleButtons from "./ScaleButtons";
import Time from "./Time";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="d-flex justify-content-between">
        <h1>
          {props.data.name}, {props.data.country}
        </h1>
        <ScaleButtons scaleChange={props.scaleChange} />
      </div>
      <ul>
        <li>
          <Time dateTime={props.data.datetime.localDatetime} />
        </li>
        <li>
          <Date dateTime={props.data.datetime.localDatetime} />
        </li>
        <li id="weather-description">{props.data.description}</li>
      </ul>
      <div className="row weather-main">
        <div className="col-7">
          <WeatherIcon code={props.data.icon} />
          <Temperature temp={props.data.temp} scale={props.scale} />
        </div>
        <div className="col-5">
          <ul className="extra-info">
            <li>
              Humidity: <span id="humidity">{props.data.humidity}%</span>
            </li>
            <li>
              Wind: <span id="wind-speed">{props.data.wind.speed} mph</span>,
              <span id="wind-direction"> {props.data.wind.direction}</span>
            </li>
            <li>
              Visibility:{" "}
              <span id="visibility">
                {props.data.visibility.km}km, {props.data.visibility.index}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
