import React from "react";
import Wind from "./Wind";
import Visibility from "./Visibility";

export default function WeatherExtraInfo(props) {
  return (
    <div className="WeatherExtraInfo">
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
