import React from "react";
import UrbanDay from "./UrbanDay";
import UrbanNight from "./UrbanNight";

export default function UrbanImage(props) {
  if (props.mode === "day") {
    return (
      <div className="UrbanImage">
        <UrbanDay />
      </div>
    );
  } else {
    return (
      <div className="UrbanImage">
        <UrbanNight />
      </div>
    );
  }
}
