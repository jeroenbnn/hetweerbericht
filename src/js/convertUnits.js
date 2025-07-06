export const roundDegree = async (degree) => {
  if ((Math.round(degree * 10) / 10) % 1 === 0) {
    return `${(Math.round(degree * 10) / 10).toFixed(1)}°C`;
  } else {
    return `${Math.round(degree * 10) / 10}°C`;
  }
};

export const formatDate = async (unixTimestamp, type) => {
  const daysOfWeek = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
  const monthsOfYear = [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december",
  ];

  const daysOfWeekShortened = ["zon", "ma", "di", "woe", "don", "vrij", "zat"];
  const monthsOfYearShortened = ["jan", "feb", "maa", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];

  const date = new Date(unixTimestamp * 1000);
  const dayOfMonth = date.getDate();
  const monthIndex = date.getMonth();
  const dayOfWeekIndex = date.getDay();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${dayOfMonth} ${monthsOfYear[monthIndex]} ${daysOfWeek[dayOfWeekIndex]}`;
  const formattedDateShortened = `${dayOfMonth} ${monthsOfYearShortened[monthIndex]} ${daysOfWeekShortened[dayOfWeekIndex]}`;

  if (type === "day") {
    return daysOfWeek[dayOfWeekIndex];
  } else if (type === "hour") {
    return `${hours}:${minutes}`;
  } else if (type === "short") {
    return formattedDateShortened;
  } else {
    return formattedDate;
  }
};

export const mpsToKmh = async (mps) => {
  return `${Math.round(mps * 3.6)} km/h`;
};

export const metersToKm = async (meters) => {
  return `${meters / 1000} km`;
};

export const capitalize = async (str) => {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
};
