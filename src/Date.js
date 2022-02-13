import React from "react";

export default function Date(props) {
  function formatDate(date) {
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

  let localDate = formatDate(props.dateTime);
  return <div className="Date">{localDate}</div>;
}
