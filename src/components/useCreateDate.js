import React from "react";

const useCreateDate = () => {
  const dateObj = new Date();
  let month = dateObj.getMonth();
  let monthName;

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  if (month >= 0 && month < monthNames.length) {
    monthName = monthNames[month];
  }

  const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`;
  return date;
};

export default useCreateDate;
