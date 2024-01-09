import React from "react";
import { useSelector } from "react-redux";
import {
  formatTimestamp,
  getDayOfWeek,
  kelvinToCelsius,
} from "../../utils/helper";

function FiveDayForecast() {
  const forecasts = useSelector((state) => state.weather.forecast);
  // console.log("first", forecasts);
  return (
    <div>
      <h4 className="py-8 font-bold text-lg	">5 Days Forecast</h4>
      <div className="bg-cardColor rounded-3xl p-8 xl:px-8">
        {" "}
        {forecasts.list
          ? forecasts.list.map((forecast, index) => {
              if (index % 8 === 0) {
                return (
                  <table className="flex text-center py-4" key={index}>
                    {forecasts ? (
                      <tr className="flex w-1/3 ">
                        <img
                          alt="weather"
                          src={`/images/weather_icons/${forecast.weather[0].icon}.png`}
                          className="w-7"
                        />
                        <div className="pl-2">
                          {kelvinToCelsius(forecast.main.temp_min)}
                          <sup>o</sup>C
                        </div>
                      </tr>
                    ) : (
                      ""
                    )}
                    {forecast.dt ? (
                      <tr className="text-subtitle w-1/3">
                        {formatTimestamp(forecast.dt)}
                      </tr>
                    ) : (
                      ""
                    )}
                    {forecast.dt ? (
                      <tr className=" w-1/3 text-right text-subtitle">
                        {getDayOfWeek(forecast.dt)}
                      </tr>
                    ) : (
                      ""
                    )}
                  </table>
                );
              } else {
                return null;
              }
            })
          : ""}
      </div>
    </div>
  );
}

export default FiveDayForecast;
