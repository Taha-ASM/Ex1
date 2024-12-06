import Navbar from "../components/Navbar";
import Bannerproducts from "../components/Bannerproducts";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";

export default function Products() {
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
      <Bannerproducts />
      <div className="bg-white py-20">
        <div className="container Latest pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20">
            {data?.products?.map((product) => (
              <div key={product.id}>
                <a href={"/product?id=" + product.id}>
                  <div className="flex flex-col p-2.5 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
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
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
