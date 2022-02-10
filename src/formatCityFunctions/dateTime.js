export function formatDate(date) {
  function addDateSuffix(dateValue) {
    let firstDates = [1, 21, 31];
    let secondDates = [2, 22];
    let thirdDates = [3, 23];
    let dateSuffix = "";
    if (firstDates.includes(dateValue)) {
      dateSuffix = "st";
    } else if (secondDates.includes(dateValue)) {
      dateSuffix = "nd";
    } else if (thirdDates.includes(dateValue)) {
      dateSuffix = "rd";
    } else {
      dateSuffix = "th";
    }
    return dateSuffix;
  }
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = weekDays[date.getDay()];

  let currentDate = date.getDate();
  let dateSuffix = addDateSuffix(currentDate);

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentMonth = months[date.getMonth()];

  return `${currentDay}, ${currentDate}${dateSuffix} of ${currentMonth}`;
}

export function formatTime(timestamp) {
  let currentHours = timestamp.getHours();
  currentHours = currentHours.toString().padStart(2, "0");

  let currentMinutes = timestamp.getMinutes();
  currentMinutes = currentMinutes.toString().padStart(2, "0");

  return `${currentHours}:${currentMinutes}`;
}
