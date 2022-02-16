import React from "react";

export default function Temperature(props) {
  if (props.scale === "metric") {
    return (
      <div className="Temperature">
        <strong>{props.temp}</strong>
        <span className="Temperature-unit">°C</span>
      </div>
    );
  } else {
    let fahrenheit = props.temp * 1.8 + 32;
    return (
      <div className="Temperature">
        <strong>{Math.round(fahrenheit)}</strong>
        <span className="Temperature-unit">°F</span>
      </div>
    );
  }
}
