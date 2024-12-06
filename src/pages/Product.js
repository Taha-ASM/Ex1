import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

export default function Product() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const [allProducts, setAllProducts] = useState([]);
  const [data, setData] = useState();

  const getProducts = useCallback(async () => {
    const res = await fetch("https://dummyjson.com/products?limit=10");
    setAllProducts(await res.json());
    const product =
      allProducts?.products?.find((i) => i.id == id) || "makaynch";
    setData(product);
  }, [allProducts?.products, id]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  // check data first
  if (data === "makaynch") return <p>your product is not exist</p>;
  if (data === undefined) return <p>loading...</p>;
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto p-6 md:p-20">
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="md:w-1/2 image-item relative bg-[#e1fdfd]">
            <img
              src={data.thumbnail}
              alt={data.name}
              className="w-full md:w-4/5"
            />
          </div>
          <div className="md:w-1/2 text-side md:pl-4">
            <p className="text-black py-3">home / makeup</p>
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-black text-4xl md:text-5xl font-semibold">
                {data.title}
              </h1>
              <p className="text-black text-2xl md:text-3xl py-5 font-bold">
                ${data.price}
              </p>
            </div>
            <div className="flex items-center gap-2 py-7">
              <input
                type="number"
                id="quantity"
                min="1"
                className="text-black p-2 w-16 h-12 rounded-md bg-white border border-black bg-transparent"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg mx-3">
                Add to Cart
              </button>
            </div>
            <div>
              <h2 className="text-black text-3xl md:text-4xl font-semibold">
                {data.category}
              </h2>
              <p className="text-black text-lg md:text-xl py-5">
                {data.description}
              </p>
            </div>
          </div>
        </div>
        <div className="Featured">
          <h1 className="text-center pt-20 text-4xl md:text-6xl font-bold text-black">
            Featured Products
          </h1>
          <p className="text-center pt-5 text-lg md:text-xl text-[#7a7a7a]">
            New Collection Modern Makeup
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20">
            {allProducts?.products?.slice(0, 4).map((product) => (
              <a
                href={"/product?id=" + product.id}
                className="cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:drop-shadow-2xl"
                key={product.id}
              >
                <img
                  className="w-full md:w-80 h-72 md:h-96 object-cover"
                  src={product.thumbnail}
                  alt={product.name}
                />
                <div className="text-black py-4">
                  <p className="text-xl md:text-2xl">{product.title}</p>
                  <p className="text-sm md:text-base pt-3">${product.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
