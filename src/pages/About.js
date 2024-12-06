import Bannerabout from "../components/Bannerabout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutImage from "../image/img/about.webp";
import adstVideo from "../image/video/ads.mp4";
import { useState, useEffect } from "react";

export default function About() {
  const [data, setData] = useState();

  async function getProducts() {
    const res = await fetch("https://dummyjson.com/products");
    setData(await res.json());
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Navbar />
      <Bannerabout />
      <div className="bg-white p-20">
        <div className="container flex justify-center items-center gap-10 p-8">
          <div className="image-side flex-1">
            <img src={AboutImage} alt="" />
          </div>
          <div className="text-side flex-1">
            <h1 className="text-6xl text-black pb-5 font-bold">Who We Are?</h1>
            <p className="mt-4 text-[#878787]">
              Amet fugiat est amet tempor consequat magna do ea dolor ad ad eu
              non elit. Mollit est sunt dolor cillum culpa magna reprehenderit
              id commodo. Veniam amet eu reprehenderit exercitation ut do
              consequat Lorem Lorem nisi elit reprehenderit sint. Tempor
              occaecat elit tempor aliquip excepteur laboris nisi aute magna
              ipsum. Non elit ullamco in sunt. Qui et est velit aute voluptate
              non et. Reprehenderit pariatur est ipsum Lorem consectetur ut
              culpa. Irure
            </p>
            <p className="pt-7 text-[#383838] relative">
              Create stunning images with as much or as little control as you
              like thanks to a choice of Basic and Creative modes
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#383838] to-[#383838] rounded-full"></span>
            </p>
            <p className="bg-gray-300 animate-pulse px-1 mt-4 text-[#232323]">
              Create stunning images with as much or as little control as you
              like thanks to a choice of Basic and Creative modes
            </p>
          </div>
        </div>
        <div className="ads p-20">
          <h1 className="text-6xl text-center py-20 font-bold text-black">
            Download Our{" "}
            <span className="text-purple-900 border-b-2 border-purple-900">
              App
            </span>
          </h1>
          <div className="p-20 flex items-center justify-center bg-[#1e1e1e] rounded-3xl">
            <video autoPlay muted src={adstVideo} />
          </div>
        </div>
        <div className="categorie">
          <div className="flex gap-10">
            {data?.products?.slice(0, 6).map((product) => (
              <div key={product.id} className=" border border-[#b3b3b3] p-5">
                <img
                  className="w-full h-48 md:h-64 object-cover"
                  src={product.thumbnail}
                  alt={product.name}
                />
                <div className="bg-red-400 mt-8 px-8 py-2 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#c63434]">
                  <p className="text-center text-white">{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
