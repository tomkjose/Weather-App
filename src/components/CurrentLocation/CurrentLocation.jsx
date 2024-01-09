import React, { useState } from "react";
import { getCurrentLocation } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/locationRedux/locAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

function CurrentLocation() {
  const dispatch = useDispatch();
  const fetchCurrentLocation = async () => {
    try {
      const location = await getCurrentLocation();
      dispatch(setLocation(location.latitude, location.longitude));
      localStorage.setItem("latitude", JSON.stringify(location.latitude));
      localStorage.setItem("longitude", JSON.stringify(location.longitude));
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  return (
    <div>
      <button
        onClick={fetchCurrentLocation}
        className="bg-locationBtn hover:bg-purple-400 text-locationBtnText font-medium py-3 px-4 rounded-full"
      >
        <FontAwesomeIcon icon={faLocationCrosshairs} size="lg" />
        <span className="pr-2 pl-4 md:hidden pl-0">Current Location</span>
      </button>
    </div>
  );
}

export default CurrentLocation;
