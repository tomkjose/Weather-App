import React from "react";
import { Link } from "react-router-dom";

function Fof() {
  return (
    <div className="flex justify-center items-center w-full h-100vh">
      <div className="flex flex-col items-center">
        <div className="text-6xl font-bold">404</div>
        <div className="pb-4 text-2xl">Page not found!</div>
        <Link to="/">
          <button className="p-4 bg-fofBtn text-locationBtnText rounded-xl ">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Fof;
