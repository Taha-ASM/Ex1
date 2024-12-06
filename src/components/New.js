import WatchImage from "../image/img/Watch.png";
import React from "react";

export default function New() {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 py-10 md:py-28">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20">
        <div className="image-side flex-1 flex justify-center md:justify-start">
          <img className="w-full md:w-8/12" src={WatchImage} alt="" />
        </div>
        <div className="text-side flex-1 text-black flex-col items-center md:items-baseline">
          <p className="Stock pb-5 md:pb-10 text-[#eaeaea]">
            Exclusively Available on RedStre
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center md:text-left">
            Smart Band 4
          </h1>
          <p className="py-5 md:py-10 text-white text-base md:text-xl text-center md:text-left">
            The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED
            color full-touch display with adjustable brightness. so everything
            is clear as can be
          </p>
          <button className="bg-orange-600 text-white px-6 md:px-8 py-3 rounded-full text-center hover:bg-orange-800 ease-in duration-150">
            Buy Now →
          </button>
        </div>
      </div>
    </div>
  );
}
