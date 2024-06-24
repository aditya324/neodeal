import React from "react";
// import edmentor from "../assets/edmentor.png";
import { VscSend } from "react-icons/vsc";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import footer from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] px-5 lg:px-10 py-3   ">
    <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-10">
      <div className="text-gray-500">
        <div className="flex items-center mb-3 lg:mr-0 mr-3">
          <img src={footer} className="mr-2 object-contain " alt="Logo" />
          {/* <h1 className="font-semibold text-white text-lg">
              FIZA ENGINEERING <br /> CORPORATION
            </h1> */}
        </div>
        <p className="text-sm text-white">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, but also the leap into essentially unchanged. Lorem Ipsum is
          that it has a more-or-less normal distribution of letters, but also the
          leap into essentially unchanged. Ipsum is that it has a more.
        </p>
      </div>
      <div className="lg:ml-10 ml-3">
        <p className="text-sm font-semibold text-white ">Other Pages</p>
        <ul className="text-white mt-2 space-y-2 lg:ml-3">
          <li className="list-disc">Home</li>
          <li className="list-disc">Our services</li>
          <li className="list-disc">About us</li>
          <li className="list-disc">Products</li>
          <li className="list-disc">Contact us</li>
        </ul>
      </div>
      <div>
        <p className="text-sm font-semibold text-white">Get in touch</p>
        <p className="text-xs text-white my-2">
          Just thank the customer for choosing you and add a subscription
          confirmation button.
        </p>
        <div className="relative my-3">
          <input
            type="email"
            className="block w-full p-3 pl-8 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-[#0060B8] hover:bg-blue-800 text-white font-medium rounded-lg focus:ring-4 focus:outline-none flex items-center justify-center"
          >
            <VscSend className="text-sm" />
          </button>
        </div>
  
        <div className="flex space-x-3">
          <a
            href="#"
            className="shadow border rounded p-2 inline-flex items-center justify-center bg-[#0060B8] text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="shadow border rounded p-2 inline-flex items-center justify-center bg-[#0060B8] text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="shadow border rounded p-2 inline-flex items-center justify-center bg-[#0060B8] text-white"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-[#0060B88A] py-1 mt-3">
      <div className="container mx-auto text-center text-white mt-3">
        <p className="">
          Copyright Neodeals ©2024 | All Rights Reserved |
          Developed by <span className="text-[#0060B8]">ORBIT TECHNOLOGYS</span>
        </p>
      </div>
    </div>
  </footer>
  
  );
};
export default Footer;
