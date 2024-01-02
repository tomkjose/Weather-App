const API_ROOT = "https://api.openweathermap.org/data";

const API_KEY = process.env.REACT_APP_API_KEY;

export const API_URLS = {
  currentForcast: (lat, lon) =>
    `${API_ROOT}/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  fiveDayForcast: (lat, lon) =>
    `${API_ROOT}/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  airPollution: (lat, lon) =>
    `${API_ROOT}/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  reverseGeocoding: (lat, lon) =>
    `${API_ROOT}/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${API_KEY}`,
};
