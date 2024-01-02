import React from "react";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import FiveDayForecast from "../components/FiveDayForecast/FiveDayForecast";
import TodayHighlights from "../components/TodayHighlights/TodayHighlights";
import ThreeHourForecast from "../components/ThreeHourForecast/ThreeHourForecast";
import { API_URLS } from "../utils/contstant";

function Home() {
  console.log("API_URLS", API_URLS.currentForcast());
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
