import React from "react";
import phone from "../assets/phone1.png";
import ReactStars from "react-rating-stars-component";

const YourScheme = () => {
  return (
    <div className="bg-gray-300 h-full lg:px-32 px-3 py-5">
      <h2 className="font-semibold text-2xl leading-5 my-5">
        Your Scheme (Number){" "}
      </h2>
      <div className="bg-[#EBE4FF] w-full p-5 rounded-2xl mt-3">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-base">
              Schemes{" "}
              <button className="bg-[#5356FB] text-white px-2 py-1 text-xs rounded-2xl ">
                Hulululu
              </button>
            </p>
            <p className="text-sm font-semibold mt-3">Delivered on:13/2/24</p>
          </div>
          <h2 className="font-bold text-base text-blue">Your ND number: 300</h2>
        </div>
        <div className="lg:max-w-full h-auto rounded-2xl bg-[#F6F6F6] p-3 flex flex-col items-center sm:flex-row mt-3 font-semibold">
          <div className="flex-shrink-0">
            <img
              src={phone}
              alt="Phone Image"
              className="h-28 lg:w-full mx-auto sm:mx-0"
            />
          </div>
          <div className="flex flex-col  sm:justify-center text-left">
            <p className="font-semibold text-base mt-2">
              Apple iPhone 14 | 256 GB | Grey
            </p>
            <p className="font-semibold text-sm text-[#262626] mt-2">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries,
            </p>
            <p className="mt-2 text-sm text-[#262626]">
              Status: <span className="text-[#00A010]">In Progress</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#EBE4FF] w-full p-5 rounded-2xl mt-3">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-base">
              Schemes{" "}
              <button className="bg-[#5356FB] text-white px-2 py-1 text-xs rounded-2xl ">
                Hulululu
              </button>
            </p>
            <p className="text-sm font-semibold mt-3">Delivered on:13/2/24</p>
          </div>
          <h2 className="font-bold text-base text-blue">Your ND number: 300</h2>
        </div>
        <div className="lg:max-w-full h-auto rounded-2xl bg-[#F6F6F6] p-3 flex flex-col items-center sm:flex-row mt-3 font-semibold">
          <div className="flex-shrink-0">
            <img
              src={phone}
              alt="Phone Image"
              className="h-28 lg:w-full mx-auto sm:mx-0"
            />
          </div>
          <div className="flex flex-col  sm:justify-center text-left">
            <p className="font-semibold text-base mt-2">
              Apple iPhone 14 | 256 GB | Grey
            </p>
            <p className="font-semibold text-sm text-[#262626] mt-2">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries,
            </p>
            <p className="mt-2 text-sm text-[#262626]">
              Status: <span className="text-[#00A010]">In Progress</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#EBE4FF] w-full p-5 rounded-2xl mt-3">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-base">
              Schemes{" "}
              <button className="bg-[#5356FB] text-white px-2 py-1 text-xs rounded-2xl ">
                Hulululu
              </button>
            </p>
            <p className="text-sm font-semibold mt-3">Delivered on:13/2/24</p>
          </div>
          <h2 className="font-bold text-base text-blue">Your ND number: 300</h2>
        </div>
        <div className="lg:max-w-full h-auto rounded-2xl bg-[#F6F6F6] p-3 flex flex-col items-center sm:flex-row mt-3 font-semibold">
          <div className="flex-shrink-0">
            <img
              src={phone}
              alt="Phone Image"
              className="h-28 lg:w-full mx-auto sm:mx-0"
            />
          </div>
          <div className="flex flex-col  sm:justify-center text-left">
            <p className="font-semibold text-base mt-2">
              Apple iPhone 14 | 256 GB | Grey
            </p>
            <p className="font-semibold text-sm text-[#262626] mt-2">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries,
            </p>
            <p className="mt-2 text-sm text-[#262626]">
              Status: <span className="text-[#00A010]">In Progress</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourScheme;
