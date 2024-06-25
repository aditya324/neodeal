import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";

const Address = () => {
  return (
    <div className="p-2 bg-gray-100 flex justify-center lg:justify-start flex-col  sm:items-center md:items-center gap-4 lg:flex-row lg:gap-6 h-full relative">
      {/*------------------------------------- Timeline--------------------------------------------*/}
      <div className="flex flex-col items-center ml-6 lg:px-10 mt-5 lg:items-start lg:h-full lg:ml-0 relative lg:top-0 lg:self-start">
        <h1 className="text-2xl text-[#374557] font-semibold">Cart</h1>
        <ol className="relative border-l-2 border-[#5356FB] mt-6">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
              <FaShoppingCart className="w-4 h-4 text-blue-800" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
              Cart
            </h3>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
              <FaAddressCard className="w-4 h-4 text-blue-800" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Address
            </h3>
          </li>
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
              <MdPayment className="w-4 h-4 text-blue-800" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Payment
            </h3>
          </li>
        </ol>
      </div>

      {/* -----------------------Right Side------------------------------ */}
      <div className="w-full md:w-4/5 flex flex-col">
        {/* --------------------------------Address editing section---------------------------------- */}

        <div className="w-full  flex justify-center items-center">
          <div
            className="flex justify-between items-center border-white p-4 lg:w-9/12 w-11/12 mt-4 md:my-3 font-semibold rounded-3xl text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(206,125,240,1) 0%, rgba(192,193,255,1) 69%)",
            }}
          >
            <h1>
              Delivering To <span className="text-[#5356FB]">580030</span>
            </h1>
            <Link to="/address">
              <p className="text-[#5356FB] cursor-pointer">Edit</p>
            </Link>
          </div>
        </div>

        {/* -----------------------Address Form------------------------------ */}

        <div className="flex flex-col ">
          <h4 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold my-3 text-[#C342F9]">
            Address
          </h4>

          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <div className="text-[#374557] font-semibold"> Address 1</div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-[#878F9A] "
                >
                  House no , Building , Area
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" border-0 bg-white text-gray-900 text-sm rounded-3xl focus:ring-[#C342F9] focus:ring-2   block w-full p-2.5 px-4"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <div className="text-[#374557] font-semibold"> Address 2</div>

                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-[#878F9A] "
                >
                  Landmark , Street
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" border-0 bg-white text-gray-900 text-sm rounded-3xl focus:ring-[#C342F9] focus:ring-2   block w-full p-2.5 px-4"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm text-[#374557] font-semibold "
                >
                  State
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" border-0 bg-white text-gray-900 text-sm rounded-3xl focus:ring-[#C342F9] focus:ring-2   block w-full p-2.5 px-4"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm text-[#374557] font-semibold "
                >
                  Country
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" border-0 bg-white text-gray-900 text-sm rounded-3xl focus:ring-[#C342F9] focus:ring-2   block w-full p-2.5 px-4"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm text-[#374557] font-semibold "
                >
                  City
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" border-0 bg-white text-gray-900 text-sm rounded-3xl focus:ring-[#C342F9] focus:ring-2   block w-full p-2.5 px-4"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="visitors"
                  className="block mb-2 text-sm text-[#374557] font-semibold "
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" border-0 bg-white text-gray-900 text-sm rounded-3xl focus:ring-[#C342F9] focus:ring-2   block w-full p-2.5 px-4"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-custom-card hover:bg-custom-gradient-hover focus:ring-[#C342F9] focus:ring-4 focus:outline-none font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center rounded-3xl"
            >
              Save address
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;
