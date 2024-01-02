import React, { useEffect, useState } from "react";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import FiveDayForecast from "../components/FiveDayForecast/FiveDayForecast";
import TodayHighlights from "../components/TodayHighlights/TodayHighlights";
import ThreeHourForecast from "../components/ThreeHourForecast/ThreeHourForecast";
import { getCurrentWeather, getFiveDayForcast } from "../apis";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../redux/weatherRedux/weatherAction";

function Home() {
  const [currentWeather, setCurrentWeather] = useState();
  const { latitude, longitude } = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const { current, forecast, airPollution } = useSelector(
    (state) => state.weather
  );
  useEffect(() => {
    dispatch(fetchWeatherData(latitude, longitude));
  }, [latitude, longitude]);

  // console.log("forcastWeather", forcastWeather);
  return (
    <div className="flex flex-col md:flex-row p-8">
      <aside>
        <CurrentWeather />
        <FiveDayForecast />
      </aside>
      <main>
        <TodayHighlights />
        <ThreeHourForecast />
      </main>
    </div>
  );
}

export default Home;
