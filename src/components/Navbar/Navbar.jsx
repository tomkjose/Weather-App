import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import CurrentLocation from "../CurrentLocation/CurrentLocation";

function Navbar() {
  return (
    <div className="flex justify-between p-12 items-center ">
      <img src={"/images/logo.png"} alt="logo" className="w-46 h-8 " />
      {/* <Searchbar /> */}
      <CurrentLocation />
    </div>
  );
}

export default Navbar;
