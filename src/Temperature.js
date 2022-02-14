import React from "react";

export default function Temperature(props) {
  if (props.scale === "metric") {
    return (
      <div className="Temperature">
        <strong className="temp">{props.temp}</strong>
        <span className="tempUnit">°C</span>
      </div>
    );
  } else {
    let fahrenheit = props.temp * 1.8 + 32;
    return (
      <div className="Temperature">
        <strong className="temp">{Math.round(fahrenheit)}</strong>
        <span className="tempUnit">°F</span>
      </div>
    );
  }
}
