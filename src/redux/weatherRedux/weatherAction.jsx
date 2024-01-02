import { useSelector } from "react-redux";
import {
  getAirPollution,
  getCurrentWeather,
  getFiveDayForcast,
} from "../../apis";

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

export const fetchWeatherData = (latitude, longitude) => {
  return async (dispatch) => {
    try {
      const current = await getCurrentWeather(latitude, longitude);
      const forecast = await getFiveDayForcast(latitude, longitude);
      const airPollution = await getAirPollution(latitude, longitude);
      dispatch(fetchDataSuccess({ current, forecast, airPollution }));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
};
