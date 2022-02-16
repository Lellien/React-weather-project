import React from "react";

export default function Visibility(props) {
  function calculateVisibilityIndex(meters) {
    let vis = "";
    if (meters < 1000) {
      vis = "VP";
    } else if (meters >= 1000 && meters < 4000) {
      vis = "P";
    } else if (meters >= 4000 && meters < 10000) {
      vis = "M";
    } else if (meters >= 10000 && meters < 20000) {
      vis = "G";
    } else if (meters >= 20000 && meters < 40000) {
      vis = "VG";
    } else if (meters > 40000) {
      vis = "E";
    }
    // Very Poor, Poor, Medium, Good, Very Good, Excellent.
    return vis;
  }
  let km = Math.round(props.visibility / 1000);
  let visibilityIndex = calculateVisibilityIndex(props.visibility);

  return (
    <div className="Visibility">
      Visibility:{" "}
      <span id="visibility">
        {km}km, {visibilityIndex}
      </span>
    </div>
  );
}
