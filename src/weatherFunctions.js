export function calculateVisibilityIndex(meters) {
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

export function calculateWindDirection(deg) {
  let direction = "";
  if ((0 <= deg && deg < 11.25) || (348.75 <= deg && deg <= 360)) {
    direction = "N";
  } else if (11.25 <= deg && deg < 33.75) {
    direction = "NNE";
  } else if (33.75 <= deg && deg < 56.25) {
    direction = "NE";
  } else if (56.25 <= deg && deg < 78.75) {
    direction = "ENE";
  } else if (78.75 <= deg && deg < 101.25) {
    direction = "E";
  } else if (101.25 <= deg && deg < 123.75) {
    direction = "ESE";
  } else if (123.75 <= deg && deg < 146.25) {
    direction = "SE";
  } else if (146.25 <= deg && deg < 168.75) {
    direction = "SSE";
  } else if (168.75 <= deg && deg < 191.25) {
    direction = "S";
  } else if (191.25 <= deg && deg < 213.75) {
    direction = "SSW";
  } else if (213.75 <= deg && deg < 236.25) {
    direction = "SW";
  } else if (236.25 <= deg && deg < 258.75) {
    direction = "WSW";
  } else if (258.75 <= deg && deg < 281.25) {
    direction = "W";
  } else if (281.25 <= deg && deg < 303.75) {
    direction = "WNW";
  } else if (303.75 <= deg && deg < 326.25) {
    direction = "NW";
  } else if (326.25 <= deg && deg < 348.75) {
    direction = "NNW";
  }
  return direction;
}
