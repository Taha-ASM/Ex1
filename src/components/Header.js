import React from "react";
import headerImage from "../image/img/header-image.png";

export default function Header() {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 md:p-24">
      <div className="container navbar flex flex-col md:flex-row justify-center items-center md:justify-between gap-10">
        <div className="text-side flex-1 text-black flex flex-col items-center md:items-baseline md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center md:text-left">
            Give Your Workout A New Style!
          </h1>
          <p className="py-6 text-white text-lg md:text-xl text-center md:text-left">
            Success isn't always about greatness. it's about consistency.
            Consistent hard work gains success. Greatness will come.
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full text-center hover:bg-orange-800 ease-in duration-150">
            Explore Now →
          </button>
        </div>
        <div className="image-side flex-1 flex justify-center">
          <img className="w-full md:max-w-lg" src={headerImage} alt="" />
        </div>
      </div>
    </div>
  );
}
