import React from "react";
import UrbanDay from "./UrbanDay";
import UrbanNight from "./UrbanNight";

export default function UrbanImage(props) {
  if (props.mode === "day") {
    return <UrbanDay />;
  } else {
    return <UrbanNight />;
  }
}
