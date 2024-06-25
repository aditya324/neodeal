import React from "react";
import { IoClose } from "react-icons/io5";
import car from "../assets/car.png";
import { FaDownload } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
const TrackingOrder = () => {
  return (
    <div className="bg-[#dadbef] w-full h-full">
      <div className="bg-[#dadbef] w-full h-full flex flex-col lg:flex-row justify-center items-center gap-10">
        <div>
          <div className="bg-[#EBE4FF] rounded-2xl overflow-hidden shadow-lg max-w-5xl lg:mx-0 mx-14 border border-white mt-6">
            <div className="flex justify-end mr-1 mt-1">
              <IoClose className="w-5 h-5" />
            </div>
            <div className="flex flex-col md:flex-row  rounded-lg shadow-md overflow-hidden ">
              <div className="flex-shrink-0 flex justify-center md:justify-start lg:mb-5 p-4 md:p-0 md:pl-4">
                <img
                  src={car}
                  alt="car.png"
                  className="lg:w-40 h-44 lg:h-36 object-cover md:w-48 md:h-48 rounded-2xl"
                />
              </div>
              <div className="flex flex-col justify-start px-10 py-2">
                <div className="mb-4 bg-[#5356FB] text-white p-2 rounded-lg w-fit">
                  <p className="text-lg px-2 font-semibold">BMW CAR</p>
                </div>
                <ul className="list-disc font-bold text-lg space-y-2 font-serif">
                  <p>BMW Sport GT / 2022 / Turbo / 1.5 Petrol</p>
                  <p>
                    <span className="text-[#5356FB]">₹ 66,840/-</span>
                    <span className="text-red-500 text-sm ml-4 line-through">
                      ₹ 82200/-
                    </span>
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[25rem] pt-4 relative px-5 md:px-0 lg:px-0">
            <div className="absolute left-7 top-[3.5rem] h-[calc(100%-7rem)] w-[5px] bg-gray-200"></div>
            <div className="absolute left-7 top-[3.5rem] h-[50%] w-[5px] bg-blue-500"></div>{" "}
            {/* This line indicates progress */}
            <Timeline>
              {/* Order Placed */}
              <TimelineItem className="h-28 relative">
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <div className="relative flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1 ml-4">
                      <Typography variant="h6" color="blue-gray">
                        Order Placed
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        22 DEC 7:20 PM
                      </Typography>
                    </div>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              {/* Order Confirmed */}
              <TimelineItem className="h-28 relative">
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <div className="relative flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1 ml-4">
                      <Typography variant="h6" color="blue-gray">
                        Order Confirmed
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        21 DEC 11 PM
                      </Typography>
                    </div>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              {/* In Transit */}
              <TimelineItem className="h-28 relative">
                <TimelineHeader className="relative rounded-xl border border-blue-500 bg-blue-500 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <div className="relative flex items-center">
                    <div className="w-6 h-6 bg-blue-500 border-2 border-white rounded-full"></div>
                    <div className="flex flex-col gap-1 ml-4 text-white">
                      <Typography variant="h6">In Transit</Typography>
                      <Typography variant="small" className="font-normal">
                        20 DEC 2:20 AM
                      </Typography>
                    </div>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              {/* Delivery */}
              <TimelineItem className="h-28 relative">
                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                  <div className="relative flex items-center">
                    <div className="w-6 h-6 border-2 border-gray-500 rounded-full"></div>
                    <div className="flex flex-col gap-1 ml-4">
                      <Typography variant="h6" color="blue-gray">
                        Delivery
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        19 DEC 4:20 PM
                      </Typography>
                    </div>
                  </div>
                </TimelineHeader>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
        <div>
          <div class="max-w-sm px-6 py-3 w-full bg-[#EBE4FF] border border-white rounded-xl shadow  lg:w-full my-4">
            <h5 class="mb-2 text-xl font-semibold  text-gray-900 ">
              Order Summary
            </h5>
            <div className="flex justify-between items-center mb-2">
              <p>Total MRP</p> <p className="font-semibold">₹ 66,480 </p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Discount</p> <p className="font-semibold">20% </p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Shipping fee</p> <p className="font-semibold">-- </p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Platform fee</p> <p className="font-semibold">--</p>
            </div>
            <div className="flex justify-center items-center ">
              <p>-----------------------------------------------</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-[#5356FB]">Total</p>{" "}
              <p className="font-semibold text-[#5356FB]">₹ 66,840/-</p>
            </div>
            <button
              type="submit"
              class="w-full mt-5 text-center text-white bg-custom-card hover:bg-custom-gradient-hover focus:ring-[#C342F9] focus:ring-4 focus:outline-none font-medium text-sm px-5 py-2.5 rounded-3xl"
            >
              Buy Now
            </button>
          </div>
          <div className="max-w-sm px-6 py-3 w-full bg-[#EBE4FF] border border-white rounded-xl shadow  lg:w-full my-5 text-center">
            <div className="flex justify-center">
              <p>Download Invoice</p>
              <FaDownload className="w-5 h-5 ml-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 w-[25rem] ml-3 md:ml-8 lg:ml-40">
        <p className="font-bold text-2xl ">Updates Sent To</p>
        <div className="flex text-gray-500 font-semibold items-center my-4">
          <FaPhoneAlt />
          <p className="ml-2">+91 9876543210</p>
        </div>
        <div className="flex text-gray-500 font-semibold items-center">
          <IoMdMail />
          <p className="ml-2">User@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default TrackingOrder;
