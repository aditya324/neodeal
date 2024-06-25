import React from "react";
import wish from "../assets/wish.png";
import { ImCross } from "react-icons/im";
import cross from "../assets/cross.png";
import { Link } from "react-router-dom";

const Wishlist = () => {
  // Sample data for the wishlist items
  const items = [
    {
      id: 1,
      name: "Hululu Scheme",
      description: "Apple iPhone 14 | 256 GB | Grey",
      price: 66840,
      originalPrice: 82200,
      image: wish,
    },
    // Add more items here
    {
      id: 2,
      name: "Hululu Scheme",
      description: "Apple iPhone 14 | 256 GB | Grey",
      price: 66840,
      originalPrice: 82200,
      image: wish,
    },
    {
      id: 3,
      name: "Hululu Scheme",
      description: "Apple iPhone 14 | 256 GB | Grey",
      price: 66840,
      originalPrice: 82200,
      image: wish,
    },
    {
      id: 4,
      name: "Hululu Scheme",
      description: "Apple iPhone 14 | 256 GB | Grey",
      price: 66840,
      originalPrice: 82200,
      image: wish,
    },
  ];

  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-28  xl:px-32 bg-[#DEDFF3] ">
        <div className="flex justify-between p-3 text-2xl">
          <h1 className="text-[#374557] font-semibold">Wishlist</h1>
          <p className="text-[#5356FB] font-semibold">{items.length} items</p>
        </div>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col  md:flex-row gap-5 mt-5 relative lg:flex-row bg-[#EBE4FF] border border-white p-5 rounded-2xl"
          >
            <div className="flex-shrink-0 w-full sm:w-32 md:w-40 lg:w-auto ">
              <img src={item.image} alt={item.name} className="w-full" />
            </div>
            <div className="flex flex-col gap-2 flex-grow mt-2">
              <h1 className="bg-[#5356FB] w-max rounded-md text-white px-2">
                {item.name}
              </h1>
              <p className="font-semibold">{item.description}</p>
              <p className="text-[#5356FB] font-semibold">
                ₹ {item.price}/-{" "}
                <span className="text-[#EB5757]  line-through">
                  ₹ {item.originalPrice}/-
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-between lg:mb-0 mb-10">
              {/* <ImCross className="text-[#5356FB] font-light cursor-pointer lg:absolute lg:right3 lg:top-0 lg:mt-3 lg:block md:block hidden" /> */}
              <img
                className="text-[#5356FB] font-light cursor-pointer lg:absolute lg:right3 lg:top-0 lg:mt-3 lg:block md:block hidden h-3"
                src={cross}
                alt=""
              />
              <Link to="/cart">
                <button className="bg-gradient font-semibold lg:w-32 md:w-28  w-60  rounded-2xl h-9 text-white mt-2 md:mt-0 lg:absolute lg:right-3 lg:top-20 ">
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-20">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Cart
            </h3>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Address
            </h3>
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Payment
            </h3>
          </li>
        </ol> */}
    </>
  );
};

export default Wishlist;
