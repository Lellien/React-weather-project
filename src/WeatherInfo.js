import React from "react";
import Time from "./Time";
import Date from "./Date";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.name}, {props.data.country}
      </h1>
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
          <img
            className="img-fluid"
            src={props.data.icon}
            alt={props.data.description}
            id="icon"
          />
          <strong className="temp">{props.data.temp}</strong>
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
