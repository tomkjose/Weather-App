import React, { useEffect } from "react";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import FiveDayForecast from "../components/FiveDayForecast/FiveDayForecast";
import TodayHighlights from "../components/TodayHighlights/TodayHighlights";
import ThreeHourForecast from "../components/ThreeHourForecast/ThreeHourForecast";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../redux/weatherRedux/weatherAction";
import Loading from "../components/Loading/Loading";
function Home() {
  const { latitude, longitude } = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  useEffect(() => {
    dispatch(fetchWeatherData(latitude, longitude));
  }, [latitude, longitude, dispatch]);

  return (
    <div>
      {weather.forecast.list ? (
        <div className="flex p-8 pt-0 lg:flex-col">
          <aside className="w-1/4  lg:w-full mb-8 mr-8 ml-0 md:w-full mb-8 mr-8   ">
            <CurrentWeather />
            <FiveDayForecast />
          </aside>
          <main className="ml-8 w-3/4 xl:ml-0 lg:w-full ml-0 md:w-full ml-0">
            <TodayHighlights />
            <ThreeHourForecast />
          </main>
        </div>
      ) : (
        <div className="p-8 flex justify-center">
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Home;
