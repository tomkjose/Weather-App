const API_ROOT = "https://api.openweathermap.org/data/2.5";

const API_KEY = process.env.REACT_APP_API_KEY;
export const API_URLS = {
  currentForcast: (lat, lon) =>
    `${API_ROOT}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  fiveDayForcast: (lat, lon) =>
    `${API_ROOT}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
};
