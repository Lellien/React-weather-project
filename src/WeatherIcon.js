import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiDayShowers,
  WiNightAltShowers,
  WiDayRain,
  WiNightRain,
  WiDayThunderstorm,
  WiNightAltThunderstorm,
  WiSnowflakeCold,
  WiDayFog,
  WiNightFog,
} from "weather-icons-react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": WiDaySunny,
    "01n": WiNightClear,
    "02d": WiDayCloudy,
    "02n": WiNightAltCloudy,
    "03d": WiCloud,
    "03n": WiCloud,
    "04d": WiCloudy,
    "04n": WiCloudy,
    "09d": WiDayShowers,
    "09n": WiNightAltShowers,
    "10d": WiDayRain,
    "10n": WiNightRain,
    "11d": WiDayThunderstorm,
    "11n": WiNightAltThunderstorm,
    "13d": WiSnowflakeCold,
    "13n": WiSnowflakeCold,
    "50d": WiDayFog,
    "50n": WiNightFog,
  };

  return React.createElement(
    codeMapping[props.code],
    { size: 80, color: "rgba(19, 116, 197, 1)" },
    null
  );
}
