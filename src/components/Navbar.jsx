import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import MainIcon from "../assets/footer logo.png";
import { IoMdSearch, IoMdHome } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";
import { HiViewGrid } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser, FaBoxOpen } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Logout from "../assets/Logout.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleCategoriesDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsUserDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <>
      <div className="">
        <nav className="border-gray-200 bg-black z-50">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={MainIcon} className="h-10" alt="MainIcon" />
            </Link>
            <div className="flex items-center justify-between md:order-2">
              <button
                type="button"
                aria-controls="navbar-search"
                aria-expanded={isMenuOpen ? "true" : "false"}
                className="lg:hidden text-gray-500 focus:outline-none focus:ring-2 rounded-lg text-sm p-2.5 me-1"
=======
                className="lg:hidden text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg text-sm p-2.5 me-1"
>>>>>>> d549ea0fdf5e26edd3d5d7164b516cdef4363214
                onClick={handleMenuToggle}
              >
                <IoMdSearch className="text-gray-500" size={30} />
                <span className="sr-only">Search</span>
              </button>

              <div className="relative hidden lg:flex lg:gap-3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <IoMdSearch className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-white border rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-800 border-gray-600 placeholder-gray-200"
                  placeholder="Search Products"
                />

                <NavLink to="/wishlist">
                  {({ isActive }) => (
                    <div className="bg-[#37317C] h-9 w-9 rounded-full flex items-center justify-center">
                      <GoHeartFill
                        className={isActive ? "text-[#F8A926]" : "text-white"}
                      />
                    </div>
                  )}
                </NavLink>

                <NavLink to="/cart">
                  {({ isActive }) => (
                    <div className="bg-[#37317C] h-9 w-9 rounded-full flex items-center justify-center">
                      <FaShoppingCart
                        className={isActive ? "text-[#F8A926]" : "text-white"}
                      />
                    </div>
                  )}
                </NavLink>
                <NavLink
                  className="flex items-center relative"
                  onClick={handleDropdownToggle}
                >
                  <button onClick={handleDropdownToggle}>
                    <div className="bg-[#37317C] h-9 w-9 rounded-full flex items-center justify-center">
                      <FaUser className="text-white" />
                    </div>
                  </button>
                  <span className="text-xl text-white">▾</span>
                  <div
                    id="userProfile"
                    ref={dropdownRef}
                    className={`z-10 ${
                      isUserDropdownOpen ? "block" : "hidden"
                    } font-normal divide-y divide-gray-100 rounded-md shadow w-44 absolute left-1/2 transform -translate-x-1/2 top-full -ml-24`}
                  >
                    <ul
                      className="py-2 text-sm bg-white absolute rounded-xl w-64"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <div className="flex p-7 justify-start items-center font-semibold border-b border-gray-300 h-10 text-lg w-full">
                        My Profile
                      </div>
                      <li className="border-b ">
                        <Link
                          to="/cart"
                          className="flex items-center gap-4 px-4 py-2 border-b border-gray-100 hover:text-[#C342F9]"
                        >
                          <div className="rounded-full p-3 bg-[#FEECFF] text-center">
                            <FaShoppingCart
                              className="text-[#5356FB]"
                              size={20}
                            />
                          </div>
                          <p className="text-lg">Cart</p>
                        </Link>
                      </li>
                      <li className="border-b ">
                        <NavLink
                          to="/wishlist"
                          className="flex items-center gap-4 px-4 py-2 border-b border-gray-100 hover:text-[#C342F9]"
                        >
                          <div className="rounded-full p-3 bg-[#FEECFF] text-center">
                            <GoHeartFill className="text-[#9747FF]" size={20} />
                          </div>
                          <p className="text-lg">Wishlist</p>
                        </NavLink>
                      </li>
                      <li className="border-b ">
                        <Link
                          to="/orders"
                          className="flex items-center gap-4 px-4 py-2 border-b border-gray-100 hover:text-[#C342F9]"
                        >
                          <div className="rounded-full p-3 bg-[#EFFAFE] text-center">
                            <FaBoxOpen className="text-[#3366FF]" size={20} />
                          </div>
                          <p className="text-lg">My Orders</p>
                        </Link>
                      </li>
                      <li className="border-b ">
                        <Link
                          to="/profile"
                          className="flex items-center gap-4 px-4 py-2 border-b border-gray-100 hover:text-[#C342F9]"
                        >
                          <div className="rounded-full p-3 bg-[#EFFAFE] text-center">
                            <FaUser className="text-[#5356FB]" size={20} />
                          </div>
                          <p className="text-lg">My Profile</p>
                        </Link>
                      </li>
                      <li className="border-b ">
                        <a
                          href="#"
                          className="flex items-center gap-4 px-4 py-2 hover:text-[#C342F9]"
                        >
                          <div className="rounded-full p-2 bg-[#FDEFEF] text-center">
                            <img src={Logout} />
                          </div>
                          <p className="text-lg">Log Out</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </NavLink>
              </div>
              <button
                type="button"
                className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 ${
                  isMenuOpen ? "focus:ring-transparent" : "focus:ring-gray-600"
                }`}
                aria-controls="navbar-search"
                aria-expanded={isMenuOpen ? "true" : "false"}
                onClick={handleMenuToggle}
                style={{
                  backgroundColor: isMenuOpen ? "transparent" : "",
                  border: isMenuOpen ? "none" : "",
                }}
              >
                <span className="sr-only">Open main menu</span>
                <IoMenu
                  size={70}
                  className={isMenuOpen ? "text-[#F8A926]" : "text-gray-500"}
                />
              </button>
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
              id="navbar-search"
            >
              <div className="relative mt-3 lg:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-white border rounded-lg focus:border-yellow-500 focus:ring-yellow-500 bg-gray-700 border-gray-600 placeholder-gray-400"
                  placeholder="Search..."
                />
              </div>
              <ul className="flex flex-col p-4 lg:p-0 lg:items-center mt-4 font-medium border rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 bg-black border-gray-700">
                <li className="group hover:text-[#F8A926]">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `py-2 px-3 rounded lg:bg-transparent lg:p-0 flex lg:items-center gap-0 ${
                        isActive ? "text-[#F8A926]" : "text-white"
                      } ${isActive ? "bg-transparent" : ""}`
                    }
                    aria-current="page"
                  >
                    <IoMdHome
                      className="mr-1 group-hover:text-[#F8A926]"
                      size={25}
                    />
                    Home
                  </NavLink>
                </li>
                <li className="hover:text-[#F8A926]">
                  <NavLink
                    to="/schemes"
                    className={({ isActive }) =>
                      ` ${isActive ? "text-[#F8A926]" : "text-white"} ${
                        isActive ? "bg-transparent" : ""
                      }py-2 px-3 rounded lg:p-0 hover:text-[#F8A926] flex gap-2`
                    }
                  >
                    <RiDiscountPercentFill
                      className="hover:text-[#F8A926]"
                      size={25}
                    />
                    Schemes
                  </NavLink>
                </li>
                <li className="flex flex-col justify-center items-center hover:text-[#F8A926]">
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center w-full gap-2 py-2 px-3 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#F8A926] lg:p-0 lg:w-auto text-white"
                    onClick={handleCategoriesDropdownToggle}
                  >
                    <HiViewGrid size={25} />
                    All Categories <span className="text-xl">▾</span>
                  </button>
                  <div
                    id="dropdownNavbar"
                    className={`z-10 ${
                      isDropdownOpen ? "block" : "hidden"
                    } font-normal bg-white divide-y absolute divide-gray-100 rounded-lg shadow w-44`}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 font-semibold"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:text-[#C342F9]"
                        >
                          Category 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:text-[#C342F9]"
                        >
                          Category 2
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="block lg:hidden">
                  <Link
                    to="/cart"
                    className="py-2 px-3 rounded lg:p-0 text-white hover:bg-gray-700 hover:text-white flex items-center"
                  >
                    <FaShoppingCart className="text-white mr-3" /> Cart
                  </Link>
                </li>
                <li className="block lg:hidden">
                  <NavLink
                    to="/wishlist"
                    className={({ isActive }) =>
                      `py-2 px-3 rounded lg:p-0 flex items-center ${
                        isActive
                          ? "text-[#F8A926] bg-transparent"
                          : "text-white"
                      }`
                    }
                  >
                    <GoHeartFill className="mr-3" size={20} />
                    Wishlist
                  </NavLink>
                </li>
                <li className="block lg:hidden">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `  ${isActive ? "text-[#F8A926]" : "text-white"} ${
                        isActive ? "bg-transparent" : ""
                      } text-white   py-2 px-3 rounded lg:p-0  flex items-center`
                    }
                    onClick={handleDropdownToggle}
                  >
                    <FaUser className=" mr-3" />
                    Profile <span className="text-xl">▾</span>
                  </NavLink>
                  <div
                    id="userProfile"
                    ref={dropdownRef}
                    className={`z-10 ${
                      isUserDropdownOpen ? "block" : "hidden"
                    } font-normal divide-y divide-gray-100 rounded-md shadow w-44 absolute left-1/2 transform -translate-x-1/2 top-full -ml-28`}
                  >
                    <ul
                      className="py-2 text-sm bg-white absolute rounded-xl w-64"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <div className="flex p-7 justify-start items-center font-semibold border-b border-gray-300 h-10 text-lg w-full">
                        My Profile
                      </div>
                      <li className="border-b ">
                        <Link
                          to="/cart"
                          className="flex items-center gap-4 px-4 py-2 border-b border-gray-100 hover:text-[#C342F9]"
                        >
                          <div className="rounded-full p-3 bg-[#FEECFF] text-center">
                            <FaShoppingCart
                              className="text-[#5356FB]"
                              size={20}
                            />
                          </div>
                          <p className="text-lg">Cart</p>
                        </Link>
                      </li>
                      <li className="border-b ">
                        <Link
                          to="/wishlist"
                          className="flex items-center gap-4 px-4 py-2 border-b border-gray-100 hover:text-[#C342F9]"
                        >
                          <div className="rounded-full p-3 bg-[#FEECFF] text-center">
                            <GoHeartFill className="text-[#9747FF]" size={20} />
                          </div>
                          <p className="text-lg">Wishlist</p>
                        </Link>
                      </li>
                      <li className="border-b ">
                        <Link
                          to="/orders"
                          className="flex items-center gap-4 px-4 py-2 border-b border-gray-100 hover:text-[#C342F9]"
                        >
                          <div className="rounded-full p-3 bg-[#EFFAFE] text-center">
                            <FaBoxOpen className="text-[#3366FF]" size={20} />
                          </div>
                          <p className="text-lg">My Orders</p>
                        </Link>
                      </li>
                      <li className="border-b ">
                        <Link
                          to="/profile"
                          className="flex items-center gap-4 px-4 py-2 border-b border-gray-100 hover:text-[#C342F9]"
                        >
                          <div className="rounded-full p-3 bg-[#EFFAFE] text-center">
                            <FaUser className="text-[#5356FB]" size={20} />
                          </div>
                          <p className="text-lg">My Profile</p>
                        </Link>
                      </li>
                      <li className="border-b ">
                        <a
                          href="#"
                          className="flex items-center gap-4 px-4 py-2 hover:text-[#C342F9]"
                        >
                          <div className="rounded-full p-2 bg-[#FDEFEF] text-center">
                            <img src={Logout} />
                          </div>
                          <p className="text-lg">Log Out</p>
                        </a>
                      </li>
                    </ul>
                  </div>
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
