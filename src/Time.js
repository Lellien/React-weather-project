import React from "react";

export default function Time(props) {
  function formatTime(timestamp) {
    let currentHours = timestamp.getHours();
    currentHours = currentHours.toString().padStart(2, "0");

    let currentMinutes = timestamp.getMinutes();
    currentMinutes = currentMinutes.toString().padStart(2, "0");

    return `${currentHours}:${currentMinutes}`;
  }

  let localTime = formatTime(props.dateTime);

  return (
    <div className="Time">
      Local time: <span>{localTime}</span>
    </div>
  );
}
