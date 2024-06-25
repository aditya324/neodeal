import React from "react";
import { Link } from "react-router-dom";
// import { GrCreditCard } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import cardImage from "../assets/PaymentCardImage.png";
import byCash from "../assets/BycashImage.png";
import byGooglePay from "../assets/Googleimage.png";
import byRazorPay from "../assets/RazorPayImage.png";

const Payment = () => {
  const generateYears = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  const years = generateYears(new Date().getFullYear(), 2100);
  return (
    <div className="p-2 bg-gray-100 flex justify-center flex-col  sm:items-center md:items-center gap-4 lg:flex-row lg:gap-0 h-full ">
      {/*------------------------------------- Timeline--------------------------------------------*/}
      <div className="flex flex-col items-center ml-6 lg:ml-6 lg:px-10 mt-8  lg:mt-10 lg:self-start">
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

      {/*--------------------------------Payment method-------------------------------------- */}
      <div className=" flex flex-col justify-center items-center w-full gap-2 ">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 place-content-between">
          <button
            type="button"
            className="text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2.5 text-center me-2 mb-2 flex items-center justify-center gap-2"
          >
            {/* <GrCreditCard /> */}
            <img src={byCash} alt="" />
            Cash
          </button>
          <button
            type="button"
            className="text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2.5 text-center me-2 mb-2 flex items-center justify-center gap-2"
          >
            {/* <GrCreditCard /> */}
            <img src={byGooglePay} alt="" />
            Google Pay
          </button>
          <button
            type="button"
            className="text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2.5 text-center me-2 mb-2 flex items-center justify-center gap-2"
          >
            {/* <GrCreditCard /> */}
            <img src={byRazorPay} alt="" />
          </button>
          <button
            type="button"
            className="text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2.5 text-center me-2 mb-2 flex items-center justify-center gap-2"
          >
            {/* <GrCreditCard /> */}
            <img src={cardImage} alt="" />
            Debit Card
          </button>
        </div>
        <div className="w-full px-3 flex flex-col items-center justify-center">
          <div className="grid gap-6 mb-6 md:grid-cols-2 w-full ">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm text-[#374557] font-semibold "
              >
                Card number
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
                htmlFor="last_name"
                className="block mb-2 text-sm text-[#374557] font-semibold "
              >
                Cvv number
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
                htmlFor="expiry_month"
                className="block mb-2 text-sm text-[#374557] font-semibold"
              >
                Expiry month
              </label>
              <select
                className="border-0 bg-white text-gray-900 text-sm rounded-3xl focus:ring-[#C342F9] focus:ring-2 block w-full p-2.5 px-4"
                required
              >
                <option value="" disabled selected>
                  Select month
                </option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="expiry_year"
                className="block mb-2 text-sm text-[#374557] font-semibold"
              >
                Expiry year
              </label>
              <select
                className="border-0 bg-white text-gray-900 text-sm rounded-3xl focus:ring-[#C342F9] focus:ring-2 block w-full p-2.5 px-4"
                required
              >
                <option value="" disabled selected>
                  Select year
                </option>

                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-custom-card hover:bg-custom-gradient-hover focus:ring-[#C342F9] focus:ring-4 focus:outline-none font-medium text-sm w-auto md:w-52 px-5 py-2.5 text-center rounded-3xl"
          >
            Place Order
          </button>
        </div>
      </div>

      {/* ----------------------------------ORDER SUMMARY----------------------------------  */}

      {/* <div className="w-full flex justify-center items-center">
        <div className="max-w-sm p-6 w-full bg-[#EBE4FF] border border-white rounded-xl shadow  lg:w-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Order Summary
          </h5>
          <div className="flex justify-between items-center">
            <p>Total MRP</p> <p className="font-semibold">₹ 66,480 </p>
          </div>
          <div className="flex justify-between items-center">
            <p>Discount</p> <p className="font-semibold">20% </p>
          </div>
          <div className="flex justify-between items-center">
            <p>Shipping fee</p> <p className="font-semibold">-- </p>
          </div>
          <div className="flex justify-between items-center">
            <p>Platform fee</p> <p className="font-semibold">--</p>
          </div>
          <div className="flex justify-center items-center ">
            <p>-----------------------------------------------</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-semibold text-[#5356FB]">Total</p>{" "}
            <p className="font-semibold text-[#5356FB]">₹ 66,840/-</p>
          </div>
        </div>
      </div> */}
      <div className=" w-full lg:w-1/4 px-4 sm:px-8 md:px-16 lg:px-4 lg:mr-10 xl:px-8 bg-white lg:h-80 rounded-lg lg:mt-6 mt-5 ">
        <div>
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
          <Link to="/payment" className="my-5 flex justify-center">
            <button className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-800 lg:w-52 md:w-28 w-60 rounded-2xl h-8 text-white mt-2 md:mt-0">
              Buy now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
