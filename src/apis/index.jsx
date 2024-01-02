import axios from "axios";
import { API_URLS } from "../utils/contstant";

export const getCurrentWeather = async (lan, lon) => {
  const response = await axios.get(API_URLS.currentForcast(lan, lon));
  //   console.log("response.data", response);
  return response.data;
};

export const getFiveDayForcast = async (lan, lon) => {
  const response = await axios.get(API_URLS.fiveDayForcast(lan, lon));
  //   console.log("response.data", response);
  return response.data;
};

export const getAirPollution = async (lan, lon) => {
  const response = await axios.get(API_URLS.airPollution(lan, lon));
  //   console.log("response.data", response);
  return response.data;
};

export const getReverseGeocoding = async (lan, lon) => {
  const response = await axios.get(API_URLS.reverseGeocoding(lan, lon));
  //   console.log("response.data", response);
  return response.data;
};
