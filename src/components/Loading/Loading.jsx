import React from "react";

function Loading() {
  return (
    <span
      className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin m-20"
      style={{ borderColor: "#FFF #FFF #1d1c1f" }}
    ></span>
  );
}

export default Loading;
