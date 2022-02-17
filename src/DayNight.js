export function checkDayNight(data) {
  let datetime = data.dt * 1000;
  let timezone = data.timezone * 1000;
  let localTime = datetime + timezone;
  let sunrise = data.sys.sunrise * 1000;
  let localSunrise = sunrise + timezone;
  let sunset = data.sys.sunset * 1000;
  let localSunset = sunset + timezone;
  if (localTime > localSunrise && localTime < localSunset) {
    return "day";
  } else {
    return "night";
  }
}
