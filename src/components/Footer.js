import React from "react";
import playstoreImage from "../image/img/playstore.png";
import appsotreImage from "../image/img/appstore.png";
import logoImage from "../image/img/logo.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black">
      <div className="container mx-auto p-6 md:p-20 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="left-side flex-1 sm:mr-8 sm:flex sm:flex-col sm:items-center text-center">
          <h1 className="text-white text-2xl md:text-3xl pb-8">
            Download Our App
          </h1>
          <p className="text-white">
            Download App for Android and iOS mobile phones
          </p>
          <div className="flex items-center gap-2 py-5 md:flex md:justify-center">
            <img
              className="cursor-pointer w-28 md:w-40 h-10 md:h-12 mx-auto"
              src={playstoreImage}
              alt="Play Store"
            />
            <img
              className="cursor-pointer rounded-md w-28 md:w-40 h-10 md:h-12 mx-auto"
              src={appsotreImage}
              alt="App Store"
            />
          </div>
        </div>
        <div className="center-side flex-1 md:mx-8 flex flex-col items-center">
          <img
            className="w-auto h-8 md:h-10 cursor-pointer"
            src={logoImage}
            alt="Logo"
            onClick={scrollToTop}
          />
          <p className="text-white text-center pt-7">
            Laboris consequat sunt do ut qui consectetur. Occaecat anim est sunt
            in exercitation est eu enim elit id. Ea aliquip sint dolor.
          </p>
        </div>
        <div className="right-side flex-1 md:ml-8 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6 md:gap-20">
          <div>
            <h1 className="text-white text-xl md:text-2xl pb-4">
              Useful Links
            </h1>
            <ul className="leading-7 text-center">
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Coupons
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Blog Post
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Join Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-white text-xl md:text-2xl pb-4">
              Social Media
            </h1>
            <ul className="leading-7 text-center">
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="text-center flex justify-center p-4 md:p-6 text-white">
        Copyright 2020 - Easy Tutorials
      </span>
    </div>
  );
}
