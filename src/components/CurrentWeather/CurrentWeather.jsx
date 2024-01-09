import React from "react";
import { useSelector } from "react-redux";
import { formatDateFromTimestamp, kelvinToCelsius } from "../../utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function CurrentWeather() {
  const current = useSelector((state) => state.weather.current);
  const forecast = useSelector((state) => state.weather.forecast);
  // console.log("current", current);
  return (
    <div className="bg-cardColor flex flex-col rounded-3xl p-8">
      <h3 className="py-2">Now</h3>
      <div className="flex justify-between">
        <span className="text-6xl font-bold">
          {current ? kelvinToCelsius(current.main?.temp) : ""}
          <sup>&deg;</sup>
          <span className="text-4xl">C</span>
        </span>
        {current && current.weather && current.weather.length > 0 ? (
          <img
            src={`../../images/weather_icons/${current?.weather[0]?.icon}.png`}
            alt="weather"
            className="w-20"
          />
        ) : (
          ""
        )}
      </div>
      <hr className="my-4 border-grey-100" />
      <div className="flex items-center text-subtitle">
        <FontAwesomeIcon
          icon={faCalendar}
          className="fa-light pr-4"
          size="sm"
        />
        {current && current.weather && current.weather.length > 0 ? (
          <span>{formatDateFromTimestamp(current.dt)}</span>
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center  text-subtitle">
        <FontAwesomeIcon icon={faLocationDot} size="sm" className="pr-4" />
        {current &&
        current.weather &&
        current.weather.length > 0 &&
        forecast &&
        forecast.city &&
        forecast.city.name.length > 0 ? (
          <span>
            {forecast.city.name},{current.sys.country}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CurrentWeather;
