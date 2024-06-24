import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./style.css";
import { GoHeartFill } from "react-icons/go";
import MainIcon from "../assets/Main Icon.png";
// import { IoClose } from "react-icons/io5";
// import { IoMenu } from "react-icons/io5";
import { IoMdSearch, IoMdHome } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";
import { HiViewGrid } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <>
      <div className=" ">
        <nav className=" border-gray-200 bg-black">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={MainIcon} className="h-8" alt="Flowbite Logo" />
            </a>
            <div className="flex items-center justify-between md:order-2">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-gray-500  hover:bg-gray-700 focus:outline-none focus:ring-2  focus:ring-gray-500 rounded-lg text-sm p-2.5 me-1"
              >
                <IoMdSearch className="text-gray-500" size={30} />
                <span className="sr-only">Search</span>
              </button>
              <div className="relative hidden md:flex md:gap-3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <IoMdSearch className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border  rounded-lg  focus:ring-blue-500 focus:border-blue-500 bg-white border-gray-600 placeholder-gray-400"
                  placeholder="Search Products"
                />

                <Link>
                  <div className="bg-[#37317C] h-9 w-9 rounded-full flex items-center justify-center">
                    <GoHeartFill className="text-white" />
                  </div>
                </Link>

                <Link>
                  <div className="bg-[#37317C] h-9 w-9 rounded-full flex items-center justify-center">
                    <FaShoppingCart className="text-white" />
                  </div>
                </Link>

                <Link
                  className="flex items-center relative"
                  onClick={handleDropdownToggle}
                >
                  <button onClick={handleDropdownToggle}>
                    <div className="bg-[#37317C] h-9 w-9 rounded-full flex items-center justify-center">
                      <FaUser className="text-white" />
                    </div>
                  </button>
                  <span className="text-xl text-white">▾</span>
                </Link>
                <div
                  id="userProfile"
                  className={`z-10 ${
                    isUserDropdownOpen ? "block" : "hidden"
                  } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute `}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 absolute"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2  hover:bg-gray-700 focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border  rounded-lg   focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400  focus:ring-blue-500"
                  placeholder="Search..."
                />
              </div>
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-black  border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-500 flex gap-0"
                    aria-current="page"
                  >
                    <IoMdHome className="text-white mr-1" size={25} />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                  to='/schemes'
                    className="py-2 px-3 rounded md:p-0 text-white hover:bg-gray-700 hover:text-white flex gap-2"
                  >
                    <RiDiscountPercentFill className="text-white " size={25} />
                    Schemes
                  </Link>
                </li>
                <li className="flex justify-center items-center">
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center w-full gap-2 py-2 px-3 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto text-white  focus:text-white hover:bg-gray-700 "
                  >
                    <HiViewGrid size={25} />
                    All Categories <span className="text-xl">▾</span>
                  </button>
                  <div
                    id="dropdownNavbar"
                    className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 "
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                        >
                          Earnings
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="block md:hidden">
                  <a
                    href="#"
                    className="py-2 px-3 rounded md:p-0 text-white hover:bg-gray-700 hover:text-white flex items-center"
                  >
                    <FaShoppingCart className="text-white mr-3" /> Cart
                  </a>
                </li>
                <li className="block md:hidden">
                  <a
                    href="#"
                    className="py-2 px-3 rounded md:p-0 text-white hover:bg-gray-700 hover:text-white flex items-center"
                  >
                    <GoHeartFill className="text-white mr-3" /> Favorites
                  </a>
                </li>
                <li className="block md:hidden">
                  <a
                    href="#"
                    className="py-2 px-3 rounded md:p-0 text-white hover:bg-gray-700 hover:text-white flex items-center"
                  >
                    <FaUser className="text-white mr-3" />
                    Profile <span className="text-xl">▾</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
