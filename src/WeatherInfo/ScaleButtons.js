import React from "react";

import "./ScaleButtons.css";

export default function ScaleButtons(props) {
  function toCelsius() {
    props.scaleChange("metric");
  }

  function toFahrenheit() {
    props.scaleChange("imperial");
  }

  return (
    <span
      className={props.mode === "day" ? "ScaleButtons" : "ScaleButtons night"}
    >
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
          onClick={toCelsius}
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
          onClick={toFahrenheit}
        />
        <label className="btn unit-btn" htmlFor="fahrenheit-button">
          °F
        </label>
      </div>
    </span>
  );
}
