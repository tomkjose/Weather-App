import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import CurrentLocation from "../CurrentLocation/CurrentLocation";
import logo from "../../images/logo.png";
function Navbar() {
  return (
    <div className="flex justify-between p-8 ">
      <img src={logo} alt="logo" className="w-24" />
      <Searchbar />
      <CurrentLocation />
    </div>
  );
}

export default Navbar;
