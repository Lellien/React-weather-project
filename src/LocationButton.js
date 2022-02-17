import React from "react";
import axios from "axios";

export default function LocationButton(props) {
  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let unit = "metric";

    let apiKey = "0392c3c6a728319e4bcd5bed20b65b72";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;

    axios.get(apiUrl).then(props.showResponse);
  }

  function getGeolocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  return (
    <div className="LocationButton">
      <button title="Your location" onClick={getGeolocation}>
        <i className="fas fa-location-arrow"></i>
      </button>
    </div>
  );
}
