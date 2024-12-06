import React, { useEffect, useState } from "react";

export default function Section() {
  const [data, setData] = useState();

  async function getProducts() {
    const res = await fetch("https://dummyjson.com/products?limit=10");
    setData(await res.json());
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="Categorie py-10 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10">
            {data?.products?.slice(0, 3).map((product) => (
              <div
                className="cursor-pointer transition duration-300 ease-in-out transform hover:drop-shadow-2xl"
                key={product.id}
              >
                <img
                  className="w-64 md:w-72 h-64 md:h-72 object-cover"
                  src={product.thumbnail}
                  alt={product.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="Featured">
          <h1 className="text-center py-10 md:py-20 text-4xl font-bold text-black">
            Featured Products
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-20">
            {data?.products?.slice(0, 3).map((product) => (
              <a
                href={"/product?id=" + product.id}
                className="cursor-pointer transition duration-300 ease-in-out
                transform hover:-translate-y-1 hover:drop-shadow-2xl"
                key={product.id}
              >
                <img
                  className="w-60 md:w-80 h-72 object-cover"
                  src={product.thumbnail}
                  alt={product.name}
                />
                <div className="text-black py-4">
                  <p className="text-xl md:text-2xl">{product.title}</p>
                  <p className="text-lg">{product.rating} stars</p>
                  <p className="text-sm">${product.price}.00</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="Latest pb-10 md:pb-20">
          <h1 className="text-center my-20 md:py-10 text-4xl font-bold text-black">
            Latest Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-20">
            {data?.products?.slice(0, 8).map((product) => (
              <a
                href={"/product?id=" + product.id}
                className="flex flex-col p-2.5 cursor-pointer transition
                duration-300 ease-in-out transform hover:-translate-y-1
                hover:shadow-2xl"
                key={product.id}
              >
                <img
                  className="w-full h-48 md:h-64 object-cover"
                  src={product.thumbnail}
                  alt={product.name}
                />
                <div className="text-black py-5">
                  <p className="text-xl md:text-2xl font-semibold">
                    {product.title}
                  </p>
                  <p className="text-lg">{product.rating} stars</p>
                  <p className="text-sm">${product.price}.00</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
