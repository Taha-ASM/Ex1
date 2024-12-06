import LogoImage from "../image/img/logo.png";
import { ReactComponent as BagIcon } from "../image/icons/bag.svg";
import { ReactComponent as BurgerIcon } from "../image/icons/burger.svg";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 navbar p-4 flex justify-between items-center flex-col md:p-9">
      <div className="container">
        <div className="flex items-center justify-between md:justify-start w-full">
          <a href="./home">
            <img
              className="w-auto h-10 cursor-pointer"
              src={LogoImage}
              alt="logoimage"
            />
          </a>
          <button
            className="block md:hidden h-8 w-8"
            onClick={() => setShowMenu(!showMenu)}
          >
            <BurgerIcon />
          </button>
        </div>
        <div
          className={`md:flex flex-col md:flex-row items-center gap-9 text-white ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <a href="./home" className="relative group decoration-none">
            <span>Home</span>
            <div className="w-full h-0.5 bg-white transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </a>
          <a href="./products" className="relative group">
            <span>Products</span>
            <div className="w-full h-0.5 bg-white transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </a>
          <a href="./about" className="relative group">
            <span>About</span>
            <div className="w-full h-0.5 bg-white transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </a>
          <a href="./contact" className="relative group">
            <span>Contact</span>
            <div className="w-full h-0.5 bg-white transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </a>
          <a href="./account" className="relative group">
            <span>Account</span>
            <div className="w-full h-0.5 bg-white transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </a>
          <button className="group relative w-5 h-8">
            <BagIcon className="relative w-full h-full" />
            <div className="absolute w-full h-0.5 bg-white transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
