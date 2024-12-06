import React from "react";
import Navbar from "../components/Navbar";
import Bannercontact from "../components/Bannercontact";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { ReactComponent as ClockIcon } from "../image/icons/clock.svg";
import { ReactComponent as PhoneIcon } from "../image/icons/phone.svg";
import { ReactComponent as MessageIcon } from "../image/icons/message.svg";
import { ReactComponent as MapIcon } from "../image/icons/map.svg";

export default function Contact() {
  const [user, setUsers] = useState([]);

  async function getUsers() {
    const res = await fetch("https://api.github.com/users");
    setUsers(await res.json());
  }

  useEffect(() => {
    getUsers();
  });

  return (
    <div>
      <Navbar />
      <Bannercontact />
      <div className="bg-white p-6 md:p-20">
        <div className="container flex flex-col md:flex-row justify-center items-center gap-10 p-8">
          <div className="text-side flex-1">
            <p className="text-black">GET IN TOUCH</p>
            <h1 className="text-4xl text-black py-5 font-semibold">
              Visit one of our agency locations or contact us today
            </h1>
            <h2 className="text-2xl text-black font-semibold">Head Office</h2>
            <div className="flex flex-col text-[#6b6b6b] pt-10">
              <div className="flex items-center mb-4">
                <MapIcon className="w-6 h-6 mr-5" />
                <p className="inline-block">
                  56 Glassford Street Glasgow G11UL New York
                </p>
              </div>
              <div className="flex items-center mb-4">
                <MessageIcon className="w-6 h-6 mr-5" />
                <p className="inline-block">contact@example.com</p>
              </div>
              <div className="flex items-center mb-4">
                <PhoneIcon className="w-6 h-6 mr-5" />
                <p className="inline-block">contact@example.com</p>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-6 h-6 mr-5" />
                <p className="inline-block">
                  Monday to Saturday: 9:00am to 16:00pm
                </p>
              </div>
            </div>
          </div>
          <div className="map-side flex-1">
            <p className="maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3449.131613637334!2d-9.490080351192269!3d30.176234127474494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3ea7a0ae3b9d1%3A0xd55d088983948078!2z2KfZhNiq2KzYp9ix2Yog2YjZgdinINio2YbZgw!5e0!3m2!1sen!2sma!4v1717089378644!5m2!1sen!2sma"
                width="700"
                height="500"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
        </div>
        <div className="container flex flex-col md:flex-row justify-between py-8 my-10 border">
          <div className="flex-1 md:w-2/3 mb-8 md:mb-0">
            <p className="text-black">GET IN TOUCH</p>
            <h1 className="text-4xl text-black pt-5 font-semibold">
              We love to hear from you
            </h1>
            <form className="py-10">
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full text-black px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full text-black px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full text-black px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full text-black px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-green-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="flex-1 md:w-1/3">
            <div className="flex justify-center items-center">
              <div className="max-w-xs mx-4 bg-white rounded-lg overflow-hidden">
                {user?.slice(0, 3).map((product) => (
                  <div
                    className="flex cursor-pointer transition duration-300 ease-in-out transform hover:drop-shadow-2xl"
                    key={product.id}
                  >
                    <img
                      className="w-20 h-20 object-cover rounded-full"
                      src={product.avatar_url}
                      alt={product.name}
                    />
                    <div className="px-6 pb-4">
                      <h1 className="text-gray-700 mb-2 text-xl">
                        {product.login}
                      </h1>
                      <p className="text-gray-700">Senior Marketing Manager</p>
                      <p className="text-gray-700">Phone +000 123 000 77 88</p>
                      <p className="text-gray-700">contact@example.com</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
