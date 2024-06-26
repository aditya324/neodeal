import React from "react";
import phone from "../assets/phone.png";
import correct from "../assets/Green correct Icon.png";

const Cancellation2 = () => {
  return (
    <div className="main bg-[#DADBEF]">
      <div className="submain flex flex-col justify-center items-center">
        {/* Cancellation Initiated Icon */}
        <div className="my-12 flex flex-col justify-center items-center">
          <p className="text-[#262626] mb-8 font-semibold ">
            Cancellation initiated
          </p>
          <img src={correct} alt="" />
        </div>

        {/* Item is cancelled */}
        <div className="w-full flex flex-col items-center p-4 sm:p-6 lg:p-0 lg:py-6">
          <div className="w-full max-w-3xl flex flex-col items-start mb-3">
            <div className="flex items md:mx-5">
              <p className="font-semibold">1 item is cancelled</p>
            </div>
          </div>

          {/* Item */}
          <div className="w-full max-w-3xl h-auto bg-[#EBE4FF] rounded-2xl p-4 my-2">
            <div className="flex flex-col md:flex-row justify-between font-semibold">
              <div className="flex flex-col mb-4 md:mb-0">
                <p>
                  Status:{" "}
                  <span className="bg-[#BEBFFF] px-2 py-1 rounded-2xl">
                    In transit
                  </span>
                </p>
                <p className="mt-3">
                  Delivered On: <span>13/2/24</span>
                </p>
              </div>
              <div className="flex flex-col text-left md:text-right">
                <p>
                  Order Id : <span>fqagqn340</span>
                </p>
                <p className="mt-2">
                  Date of Order : <span>11/2/24</span>
                </p>
              </div>
            </div>
            <div className="mt-4">
              <div className="max-w-full h-auto rounded-2xl bg-[#F6F6F6] p-3 flex flex-col sm:flex-row font-semibold">
                <div className="flex-shrink-0">
                  <img
                    src={phone}
                    alt="Phone Image"
                    className="h-28 w-20 mx-auto sm:mx-0"
                  />
                </div>
                <div className="flex flex-col justify-center pl-0 sm:pl-3 mt-3 sm:mt-0 text-center sm:text-left">
                  <p>Apple iPhone 14 | 256 GB | Grey</p>
                  <div className="flex flex-col sm:flex-row items-center mt-2">
                    <label htmlFor="qty" className="mr-2">
                      Qty:
                    </label>
                    <select
                      id="qty"
                      name="qty"
                      className="rounded px-2 py-1 bg-[#F6F6F6]"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center mt-2">
                    <label htmlFor="size" className="mr-2">
                      Size:
                    </label>
                    <select
                      id="size"
                      name="size"
                      className="rounded px-2 py-1 bg-[#F6F6F6]"
                    >
                      <option value="64gb">64 GB</option>
                      <option value="128gb">128 GB</option>
                      <option value="256gb">256 GB</option>
                      <option value="512gb">512 GB</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What next div */}
        <div className="w-full max-w-3xl flex flex-col items-start my-4 mx-6 p-4 sm:p-6 rounded-lg sm:my-0 ">
          <p className="font-semibold text-lg sm:text-xl mb-2">What next?</p>
          <p className="text-sm sm:text-base mb-4">
            We will initiate refund of <span>₹300</span> once the cancellation
            is confirmed.
          </p>
          <div className="bg-[#EBE4FF] px-3 py-3 rounded-md">
            <p className="text-[#484848] text-sm sm:text-base">
              <span className="font-semibold">Note:</span> Please refuse the
              order if delivery is attempted.
            </p>
          </div>
        </div>

        <button
          className="text-white bg-custom-card hover:bg-custom-gradient-hover focus:ring-[#C342F9] focus:ring-4 focus:outline-none font-medium text-sm w-auto md:w-52 px-20 md:px-36 lg:px-44 py-2.5 text-center rounded-3xl my-4 flex items-center justify-center"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Cancellation2;
