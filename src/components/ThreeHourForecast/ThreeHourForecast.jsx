import React from "react";
import { useSelector } from "react-redux";
import {
  hourFormat,
  kelvinToCelsius,
  mPerSecToKmPerSec,
} from "../../utils/helper";

function ThreeHourForecast() {
  const forecasts = useSelector((state) => state.weather.forecast);
  // console.log("forecasts", forecasts);
  return (
    <div className="flex flex-col">
      <h3 className="my-8">Today At</h3>
      <div className="flex flex-col overflow-x-hidden  xl:overflow-x-auto md:overflow-x-auto">
        <div className="flex ">
          {forecasts
            ? forecasts?.list?.slice(0, 8).map((forecast, index) => (
                <div
                  className="flex flex-col p-4 items-center bg-cardColor rounded-3xl  mx-2"
                  key={index}
                >
                  <div className="w-20 text-center">
                    {hourFormat(forecast.dt)}
                  </div>
                  <img
                    alt="weather"
                    src={`/images/weather_icons/${forecast.weather[0].icon}.png`}
                    className="w-12"
                  />
                  <div>{kelvinToCelsius(forecast.main.temp)} &deg;</div>
                </div>
              ))
            : ""}
        </div>
        <div className="flex py-4">
          {forecasts
            ? forecasts?.list?.slice(0, 8).map((forecast, index) => {
                const rotationStyle = {
                  transform: `rotate(${forecast.wind.deg - 180}deg)`,
                };

                return (
                  <div
                    className="flex flex-col p-4 items-center bg-cardColor rounded-3xl  mx-2 "
                    key={index}
                  >
                    <div className="w-20 text-center	">
                      {hourFormat(forecast.dt)}
                    </div>

                    <img
                      style={rotationStyle}
                      alt="weather"
                      src={`/images/weather_icons/direction.png`}
                    />
                    <div>
                      {Math.round(mPerSecToKmPerSec(forecast.wind.speed))} Km/h
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default ThreeHourForecast;
