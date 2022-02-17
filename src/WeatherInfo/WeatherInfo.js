import React from "react";
import ScaleButtons from "./ScaleButtons";
import Time from "./Time";
import Date from "./Date";
import WeatherIcon from "../WeatherIcon";
import Temperature from "./Temperature";
import WeatherInfoExtra from "./WeatherInfoExtra";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="d-flex justify-content-between align-items-center">
        <h1>
          {props.data.name}, {props.data.country}
        </h1>
        <ScaleButtons scaleChange={props.scaleChange} mode={props.mode} />
      </div>
      <ul className="WeatherInfo-overview">
        <li>
          <Time
            dateTime={props.data.datetime.localDatetime}
            mode={props.mode}
          />
        </li>
        <li>
          <Date dateTime={props.data.datetime.localDatetime} />
        </li>
        <li className="WeatherInfo-description">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 col-sm-7 WeatherInfo-main">
          <WeatherIcon code={props.data.icon} size={80} mode={props.mode} />
          <Temperature temp={props.data.temp} scale={props.scale} />
        </div>
        <div className="col-6 col-sm-5">
          <WeatherInfoExtra data={props.data} mode={props.mode} />
        </div>
      </div>
    </div>
  );
}
