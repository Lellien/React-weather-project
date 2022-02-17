import React from "react";

import "./Time.css";

export default function Time(props) {
  function formatTime(timestamp) {
    let currentHours = timestamp.getHours();
    currentHours = currentHours.toString().padStart(2, "0");

    let currentMinutes = timestamp.getMinutes();
    currentMinutes = currentMinutes.toString().padStart(2, "0");

    return `${currentHours}:${currentMinutes}`;
  }

  let localTime = formatTime(props.dateTime);

  if (props.mode === "day") {
    return (
      <div className="Time">
        Local time: <span>{localTime}</span>
      </div>
    );
  } else {
    return (
      <div className="Time">
        Local time: <span className="night">{localTime}</span>
      </div>
    );
  }
}
