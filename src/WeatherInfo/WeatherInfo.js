import React from "react";
import ScaleButtons from "./ScaleButtons";
import Time from "./Time";
import Date from "./Date";
import WeatherIcon from "../WeatherIcon";
import Temperature from "./Temperature";
import WeatherExtraInfo from "./WeatherExtraInfo";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="d-flex justify-content-between align-items-center">
        <h1>
          {props.data.name}, {props.data.country}
        </h1>
        <ScaleButtons scaleChange={props.scaleChange} />
      </div>
      <ul>
        <li>
          <Time
            dateTime={props.data.datetime.localDatetime}
          />
        </li>
        <li>
          <Date dateTime={props.data.datetime.localDatetime} />
        </li>
        <li id="weather-description">{props.data.description}</li>
      </ul>
      <div className="row WeatherInfo-main">
        <div className="col-7">
          <WeatherIcon code={props.data.icon} size={80} />
          <Temperature temp={props.data.temp} scale={props.scale} />
        </div>
        <div className="col-5">
          <WeatherExtraInfo data={props.data} />
        </div>
      </div>
    </div>
  );
}
