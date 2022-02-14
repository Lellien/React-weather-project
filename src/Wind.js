import React from "react";
import {
  WiDirectionDownLeft,
  WiDirectionDownRight,
  WiDirectionDown,
  WiDirectionLeft,
  WiDirectionRight,
  WiDirectionUpLeft,
  WiDirectionUpRight,
  WiDirectionUp,
} from "weather-icons-react";

export default function Wind(props) {
  function calculateWindDirection(deg) {
    let direction = "";
    let arrow = <></>;
    let size = 40;
    if ((0 <= deg && deg < 11.25) || (348.75 <= deg && deg <= 360)) {
      direction = "N";
      arrow = <WiDirectionDown size={size} />;
    } else if (11.25 <= deg && deg < 33.75) {
      direction = "NNE";
      arrow = <WiDirectionDownLeft size={size} />;
    } else if (33.75 <= deg && deg < 56.25) {
      direction = "NE";
      arrow = <WiDirectionDownLeft size={size} />;
    } else if (56.25 <= deg && deg < 78.75) {
      direction = "ENE";
      arrow = <WiDirectionDownLeft size={size} />;
    } else if (78.75 <= deg && deg < 101.25) {
      direction = "E";
      arrow = <WiDirectionLeft size={size} />;
    } else if (101.25 <= deg && deg < 123.75) {
      direction = "ESE";
      arrow = <WiDirectionUpLeft size={size} />;
    } else if (123.75 <= deg && deg < 146.25) {
      direction = "SE";
      arrow = <WiDirectionUpLeft size={size} />;
    } else if (146.25 <= deg && deg < 168.75) {
      direction = "SSE";
      arrow = <WiDirectionUpLeft size={size} />;
    } else if (168.75 <= deg && deg < 191.25) {
      direction = "S";
      arrow = <WiDirectionUp size={size} />;
    } else if (191.25 <= deg && deg < 213.75) {
      direction = "SSW";
      arrow = <WiDirectionUpRight size={size} />;
    } else if (213.75 <= deg && deg < 236.25) {
      direction = "SW";
      arrow = <WiDirectionUpRight size={size} />;
    } else if (236.25 <= deg && deg < 258.75) {
      direction = "WSW";
      arrow = <WiDirectionUpRight size={size} />;
    } else if (258.75 <= deg && deg < 281.25) {
      direction = "W";
      arrow = <WiDirectionRight size={size} />;
    } else if (281.25 <= deg && deg < 303.75) {
      direction = "WNW";
      arrow = <WiDirectionDownRight size={size} />;
    } else if (303.75 <= deg && deg < 326.25) {
      direction = "NW";
      arrow = <WiDirectionDownRight size={size} />;
    } else if (326.25 <= deg && deg < 348.75) {
      direction = "NNW";
      arrow = <WiDirectionDownRight size={size} />;
    }
    return { direction, arrow };
  }

  let speed = Math.round(props.wind.speed * 2.2369363); //convert to miles
  let windDirection = calculateWindDirection(props.wind.deg);

  return (
    <div className="Wind">
      Wind: <span id="wind-speed">{speed}mph</span>,{" "}
      <span id="wind-direction">
        {windDirection.direction}
        {windDirection.arrow}
      </span>
    </div>
  );
}
