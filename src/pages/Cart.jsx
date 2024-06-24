import React from "react";
import { ImCross } from "react-icons/im";
// Import your image here
import wish from "../assets/wish.png"; // Ensure the correct path to your image
import { FaShoppingCart } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import cross from "../assets/cross.png";

const Cart = () => {
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
      <div className="bg-[#DEDFF3] p-2">
        <div
          className="flex justify-between border-white p-4 w-11/12 md:w-2/3 lg:ml-72 ml-auto mr-auto mt-5 font-semibold rounded-3xl text-base"
          style={{
            background:
              "linear-gradient(90deg, rgba(206,125,240,1) 0%, rgba(192,193,255,1) 69%)",
          }}
        >
          <h1>
            Delivering To <span className="text-[#5356FB]">580030</span>
          </h1>
          <p className="text-[#5356FB] cursor-pointer">Edit</p>
        </div>
        <div className="flex flex-col lg:flex-row bg-[#DEDFF3]">
          <div>
            <h1 className="text-2xl absolute left-12 lg:left-24 text-[#374557] top-40 lg:top-28 font-semibold">
              Cart
            </h1>
            <ol className="relative border-l-2 border-[#5356FB] ml-12 lg:ml-20 mt-16 lg:mt-10">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FaShoppingCart className="w-4 h-4 text-blue-800 dark:text-blue-300" />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Cart
                </h3>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FaAddressCard className="w-4 h-4 text-blue-800 dark:text-blue-300" />
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Address
                </h3>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <MdPayment className="w-4 h-4 text-blue-800 dark:text-blue-300" />
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Payment
                </h3>
              </li>
            </ol>
          </div>

          <div className="flex flex-col justify-around mt-7 lg:flex-row lg:w-full">
            <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-32 lg:w-full">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row gap-5 mt-5 relative lg:flex-row bg-white p-3 rounded-2xl"
                >
                  <div className="flex-shrink-0 w-full sm:w-32 md:w-40 lg:w-auto">
                    <img src={item.image} alt={item.name} className="w-full" />
                  </div>
                  <div className="flex flex-col gap-2 flex-grow">
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
                  <div className="flex items-center justify-end lg:mb-0 mb-10">
                    {/* <ImCross className="text-[#5356FB] font-light cursor-pointer absolute right-2 top-2" /> */}
                    <img
                      className="text-[#5356FB] font-light cursor-pointer absolute right-2 top-2 lg:block md:block hidden h-4"
                      src={cross}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-1/4 px-4 sm:px-8 md:px-16 lg:px-4 lg:mr-28 xl:px-8 bg-white lg:h-80 rounded-lg lg:mt-6 mt-5">
              <div>
                <h1 className="text-[#374557] font-semibold text-center lg:text-left lg:mt-3">
                  Order Summary
                </h1>
              </div>
              <div className="flex justify-between mt-4">
                <h1>Total MRP</h1>
                <p>₹ 6,06,840</p>
              </div>
              <div className="flex justify-between mt-2">
                <h1>Discount</h1>
                <p>20%</p>
              </div>
              <div className="flex justify-between mt-2">
                <h1>Shipping fee</h1>
                <p>--</p>
              </div>
              <div className="flex justify-between mt-2">
                <h1>Shipping fee</h1>
                <p>--</p>
              </div>
              <p className="flex justify-center my-4">
                ----------------------------
              </p>
              <div className="flex justify-between text-[#5356FB]">
                <h1>Total</h1>
                <p>₹ 6,06,840/- </p>
              </div>
              <div className="mt-5 flex justify-center">
                <button className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-800 lg:w-52 md:w-28 w-60 rounded-2xl h-8 text-white mt-2 md:mt-0">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
