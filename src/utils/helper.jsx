export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject("Error occurred while retrieving location: " + error.message);
        }
      );
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
};

export const kelvinToCelsius = (kelivinValue) => {
  const celsiusValue = Math.floor(kelivinValue - 273.15);
  return celsiusValue;
};

export const formatDateFromTimestamp = (timestamp) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
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

  const date = new Date(timestamp * 1000);

  const dayOfWeek = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];

  return `${dayOfWeek} ${dayOfMonth} ${month}`;
};

export const formatTimestamp = (timestamp) => {
  const months = [
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

  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const monthIndex = date.getMonth();

  const formattedDate = `${day} ${months[monthIndex]}`;
  return formattedDate;
};

export const getDayOfWeek = (timestamp) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(timestamp * 1000);
  const dayOfWeek = daysOfWeek[date.getDay()];
  return dayOfWeek;
};

export const hourFormat = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const period = hours < 12 ? "AM" : "PM";

  const formattedMinutes = (minutes < 10 ? "0" : "") + minutes;

  const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
  return formattedTime;
};

export const mPerSecToKmPerSec = (value) => {
  return (value * 18) / 5;
};
