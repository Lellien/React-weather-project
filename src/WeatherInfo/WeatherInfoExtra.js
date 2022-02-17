import React from "react";
import Wind from "./Wind";
import Visibility from "./Visibility";

import "./WeatherInfoExtra.css";

export default function WeatherInfoExtra(props) {
  return (
    <div className="WeatherInfoExtra">
      <ul className={props.mode === "day" ? null : "night"}>
        <li>
          Humidity: <span id="humidity">{props.data.humidity}%</span>
        </li>
        <li>
          <Wind wind={props.data.wind} />
        </li>
        <li>
          <Visibility visibility={props.data.visibility} />
        </li>
      </ul>
    </div>
  );
}
