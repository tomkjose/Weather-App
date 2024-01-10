import React from "react";
import { useSelector } from "react-redux";
import { hourFormat, kelvinToCelsius } from "../../utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMoon,
  faSun,
  faTemperatureLow,
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

import { faEye } from "@fortawesome/free-regular-svg-icons";

function TodayHighlights() {
  const current = useSelector((state) => state.weather.current);
  const air = useSelector((state) => state.weather.airPollution);
  // console.log("current", current);
  // console.log("air", air);
  const aqiDescription = {
    1: "Good",
    2: "Fair",
    3: "Moderate",
    4: "Poor",
    5: "Very Poor",
  };

  const aqiValue = air?.list?.[0]?.main?.aqi;
  const aqiText = aqiValue ? aqiDescription[aqiValue] : "";
  let airQualityClass = "";
  if (aqiValue === 1 || aqiValue === 2) {
    airQualityClass = "bg-bgGood";
  } else if (aqiValue === 3 || aqiValue === 4) {
    airQualityClass = "bg-bgModarate";
  } else if (aqiValue === 5) {
    airQualityClass = "bg-bgBad";
  }

  return (
    <div className="bg-cardColor rounded-3xl p-8">
      <h3 className="font-bold text-lg"> Today Highlights</h3>
      <div className="flex items-center xl:flex-col  md:flex-col ">
        <div className="w-1/2 bg-bgCard rounded-3xl p-8 my-8  mr-4 xl:w-full mr-0  md:mr-0  p-2 ">
          <div className="flex justify-between p-4 md:p-2">
            <h4 className="text-subtitle">Air Quality Index</h4>
            {aqiText ? (
              <div
                className={`${airQualityClass} text-textAirStatus rounded-3xl px-2 `}
              >
                {aqiText}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex w-full items-center xl:justify-between md:justify-between	">
            <FontAwesomeIcon
              icon={faWind}
              style={{ color: "#ffffff" }}
              size="2xl"
            />
            <div className="flex md:flex-col">
              <div className="flex  p-4">
                <div className="flex flex-col  p-4  ">
                  {
                    <div className="text-subtitle  md:pr-4">
                      PM<sub>2.5</sub>
                    </div>
                  }
                  {air ? (
                    <div className="text-xl font-semibold">
                      {air?.list?.[0]?.components?.pm2_5}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col  p-4  ">
                  <div className="text-subtitle  md:pr-4">
                    So<sub>2</sub>
                  </div>
                  {air ? (
                    <div className="text-xl font-semibold">
                      {air?.list?.[0]?.components?.so2}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="flex p-4">
                <div className="flex flex-col  p-4  ">
                  <div className="text-subtitle  md:pr-4">
                    No<sub>2</sub>
                  </div>
                  {air ? (
                    <div className="text-xl font-semibold">
                      {air?.list?.[0]?.components?.no2}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col  p-4  ">
                  <div className="text-subtitle  md:pr-4">
                    O<sub>3</sub>
                  </div>
                  {air ? (
                    <div className="text-xl font-semibold">
                      {air?.list?.[0]?.components?.o3}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/2 p-8 md:p-0 bg-bgCard rounded-3xl  xl:w-full m-2">
          <h4 className="py-4 px-4 text-subtitle">Sunrise & Sunset</h4>
          <div className="flex p-8 md:justify-between">
            <div className="flex   w-1/2 items-center px-4  md:w-full pb-4 px-0  ">
              <FontAwesomeIcon
                icon={faSun}
                style={{ color: "#ffffff", paddingRight: "1.2rem" }}
                size="2xl"
              />
              <div className="flex flex-col ">
                <h4 className="text-subtitle">Sunrise</h4>
                {current ? (
                  <div className="text-xl font-semibold">
                    {hourFormat(current?.sys?.sunrise)}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="w-1/2 flex items-center  md:w-full   ">
              <FontAwesomeIcon
                icon={faMoon}
                style={{ color: "#ffffff", paddingRight: "1.2rem" }}
                size="2xl"
              />
              <div className="flex  flex-col">
                <h4 className="text-subtitle">Sunset</h4>
                {current ? (
                  <div className="text-xl font-semibold">
                    {hourFormat(current?.sys?.sunset)}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex xl:flex-col md:flex-col w-full">
        <div className="flex xl:my-4 md:flex-col w-full">
          <div className="flex flex-col w-1/2  bg-bgCard rounded-3xl p-4 mx-2 md:w-full my-4  mx-0 ">
            <h4 className="my-4 text-subtitle">Humidity</h4>
            <div className="flex justify-between md:justify-between">
              <FontAwesomeIcon
                icon={faTint}
                style={{ color: "#ffffff" }}
                size="2xl"
              />

              {current ? (
                <div className="text-xl font-semibold">
                  {current?.main?.humidity} %
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col w-1/2  bg-bgCard rounded-3xl p-4 mx-2 md:w-full my-4">
            <h4 className="my-4 text-subtitle">Pressure</h4>
            <div className="flex  justify-between">
              <img
                src={`/images/weather_icons/50d.png`}
                alt="pressure"
                className="w-8"
              />
              {current ? (
                <div className="text-xl font-semibold">
                  {current?.main?.pressure} hba
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="flex md:flex-col w-full justify-evenly">
          <div className="flex flex-col w-1/2  bg-bgCard rounded-3xl p-4 mx-2 md:w-full my-4">
            <h4 className="my-4 text-subtitle">Visibility</h4>
            <div className="flex  justify-between">
              <FontAwesomeIcon
                icon={faEye}
                style={{ color: "#ffffff" }}
                size="2xl"
              />
              {current ? (
                <div className="text-xl font-semibold">
                  {current?.visibility / 1000} KM
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col w-1/2  bg-bgCard rounded-3xl p-4 mx-2 md:w-full my-4">
            <h4 className="my-4 text-subtitle">Feels Like</h4>
            <div className="flex  justify-between">
              <FontAwesomeIcon
                icon={faTemperatureLow}
                style={{ color: "#ffffff" }}
                size="2xl"
              />
              {current ? (
                <div className="text-xl font-semibold">
                  {kelvinToCelsius(current?.main?.feels_like)}&deg;C
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayHighlights;
