import React from "react";
import { VscSend } from "react-icons/vsc";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import Logo from "../assets/footer logo.png";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
  };

  return (
    <footer className="bg-[#1E1E1E] xl:h-96 lg:py-10 xl:px-32 lg:px-16 md:px-10 px-3 py-5 ">
      <div className="mx-auto flex flex-wrap justify-between">
        <div className="text-gray-500 lg:w-2/5 w-full">
          <div className="flex items-center w-56 mb-3 lg:mr-0 mr-3 h-16">
            <img src={Logo} className="mr-2 w-fullobject-contain" alt="Logo" />
          </div>
          <p className="text-[#BCBCBC] leading-7 text-base mt-7 font-normal">
            Address Ipsum has been the industry's dummy text to use as content.
            The industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, 
          </p>
          <div className="flex items-center text-white mt-4">
            <IoMdMail className="text-2xl" />
            <p className="ml-1">Neodeals@gmail.com</p>
          </div>
        </div>

        <div className="lg:w-1/6 w-full">
          <div className="lg:ml-3 lg:pl-10 mt-5 lg:mt-0">
            <ul className="text-[#BCBCBC] space-y-5 lg:space-y-8">
              <li onClick={scrollToTop}>
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/">Contact Us</Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/consumerPolicy">Consumer Policy</Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/helpCenter">Help Center</Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/privacyPolicy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:w-2/5 w-full lg:pl-16 lg:mt-0 mt-5">
          <p className="text-2xl text-white font-medium">Get in touch</p>
          <div className="relative my-3">
            <input
              type="email"
              className="block w-full p-3 pl-5 text-xs text-gray-900 rounded-lg bg-gray-50 focus:border-none focus:outline-none"
              placeholder="Enter your mail here"
              required
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 h-10 w-32 bg-Custom-btn-bg hover:bg-blue-800 text-white font-medium rounded-lg rounded-l-none focus:ring-4 focus:outline-none flex items-center justify-center"
            >
              Submit
            </button>
          </div>
          <p className=" text-[#BCBCBC] lg:leading-7 my-2 font-normal text-base">
            Address Ipsum has been the industry's dummy text to use as content.
            The industry's standard dummy text ever since the 1500s, when an
            unknown printer
          </p>

          <div className="flex space-x-1">
            <a
              href="#"
              className="shadow p-2 inline-flex items-center justify-center text-white"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="shadow p-2 inline-flex items-center justify-center text-white"
            >
              <RiInstagramFill />
            </a>
            <a
              href="#"
              className="shadow p-2 inline-flex items-center justify-center text-white"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="#"
              className="shadow p-2 inline-flex items-center justify-center text-white"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#0060B88A] py-1 mt-5">
        <div className="container mx-auto text-center text-white mt-5">
          <p className="text-[#5B5B5B]">
            Copyright Neodeals ©2024 | All Rights Reserved | Developed by{" "}
            <span className="text-[#775BE5]">ORBIT TECHNOLOGYS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
