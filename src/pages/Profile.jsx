import React from "react";
import profile from "../assets/profilebg.png";
import profc from "../assets/profcd.png";

const Profile = () => {
  return (
    <>
      <div className="lg:overflow-x-hidden bg-[#DEDFF3] lg:h-full lg:w-full  md:overflow-x-hidden h-screen w-screen ">
        <div className="flex justify-center">
          <img src={profile} alt="" className="" />
        </div>
        <div>
          <img
            className="relative bottom-20 lg:left-40 left-1/2 transform -translate-x-1/2 lg:bottom-24 md:bottom-20 md:left-80 md:-translate-x-0 sm:bottom-16 sm:left-1/4 sm:-translate-x-0 lg:w-48 w-40 "
            src={profc}
            alt=""
          />

          <button className="absolute right-4 md:right-96  sm:right-4 bg-[#5356FB] text-white w-28 py-2 rounded-2xl bottom-72 lg:bottom-52 lg:right-28 md:bottom-auto  sm:bottom-12">
            Edit Profile
          </button>

          <div className="relative bottom-20 lg:left-40 left-1/2 lg:bottom-28 transform -translate-x-1/2 md:bottom-16 md:left-80 md:-translate-x-0 sm:bottom-12 sm:left-1/4 sm:-translate-x-0 text-center md:text-left">
            {/* <h1 className="text-[#374557] text-2xl font-bold">Mr John Wick</h1> */}
            <button className="mt-3 text-[#5356FB] font-bold">
              12 Schemes <span className="text-gray-400"> |</span> 05 Orders
            </button>
          </div>
        </div>
        <div className="flex justify-center text-[#878F9A] mt-4 mb-20">
          <h1>Account created on 24th April, 2024.</h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
