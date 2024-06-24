import React from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import profile from "../assets/profile 1.png";
import cover from "../assets/cover.png";
import { HiMiniPencilSquare } from "react-icons/hi2";

const PersonalInfo = () => {
  return (
    <div className="bg-gray-200 xl:px-32 lg:px-14 px-3 py-5">
      <div className="flex justify-between">
        <p className="text-blue font-semibold text-xl">Personal Info</p>
        {/* <button className="w-40 h-10 bg-blue text-white text-sm rounded-3xl">
          Edit info
        </button> */}
      </div>
      <form action="" className="bg-gray-100 p-5 mt-3 rounded-3xl grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* -------------------------- left section --------------------------------------- */}
        <div className="lg:col-span-2 lg:p-5 lg:border-l-2 lg:border-l-gray-300 lg:pl-8">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-bold text-textGrey">
                First Name
              </label>
              <input
                type="text"
                placeholder="Mr. John"
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-bold text-textGrey">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Wick"
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-bold text-textGrey">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91"
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-bold text-textGrey">
                Email
              </label>
              <input
                type="email"
                placeholder="mrjohnwick@gmail.com"
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
              />
              <small className="mt-2 outline-none ml-5 text-textGrey text-sm font-normal">
                Your email for <span className="text-purple">neo</span>{" "}
                <span className="text-blue">deals</span> notifications
              </small>
            </div>
          </div>
          <h2 className="mt-8 font-bold text-base text-purple">Address</h2>
          <div className="mt-5">
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-bold text-textGrey">
                Address 1
              </label>
              <small className="mt-1 text-textGrey text-sm font-normal">
                House no , Building , Area
              </small>
              <input
                type="tel"
                placeholder=""
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-bold text-textGrey">
                Address 2
              </label>
              <small className="mt-1 text-textGrey text-sm font-normal">
                Landmark , Street
              </small>
              <input
                type="tel"
                placeholder=""
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 sm:mt-10 mt-2">
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-bold text-textGrey">
                City
              </label>
              <input
                type="text"
                placeholder="Hubli"
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-bold text-textGrey">
                Postal
              </label>
              <input
                type="number"
                placeholder="876540"
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-bold text-textGrey">
                State
              </label>
              <input
                type="text"
                placeholder="Karnataka"
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-bold text-textGrey">
                Country
              </label>
              <input
                type="text"
                placeholder="India"
                className="mt-2 outline-none h-12 rounded-3xl pl-5"
              />
            </div>
          </div>
          <div className="mt-10 h-12 rounded-3xl bg-white relative p-2 flex items-center">
            <input
              type="checkbox"
              className="w-6 h-6 mr-3"
            />
            <h2 className="text-sm sm:text-base">
              Save as my default address
            </h2>
          </div>
          
        </div>

        {/* -------------------------- right section --------------------------------------- */}

        <div className="lg:p-5">
          <p className="text-lg font-bold text-textGrey tracking-wide flex items-center">
            Update Profile&nbsp; <FaCircleQuestion />
          </p>

          <p className="w-56 text-gray-500 mt-1">
            Profile of at least Size{" "}
            <span className="text-textGrey">300x300.</span> Gifs work too.{" "}
            <span className="text-textGrey">Max 5mb.</span>
          </p>

          <div className="flex items-end mt-3">
            <img src={profile} alt="" className="w-52 h-52" />
            <HiMiniPencilSquare className="text-textGrey text-xl" />
          </div>

          <p className="text-lg font-bold text-textGrey tracking-wide flex items-center mt-5">
            Cover Photo&nbsp; <FaCircleQuestion />
          </p>

          <p className="w-56 text-gray-500 mt-2">
            Cover of at least Size{" "}
            <span className="text-textGrey">1170x920</span>
          </p>

          <div className="flex items-end lg:w-72 h-20">
            <img src={cover} alt="" className="h-16 xl:w-72" />
            <HiMiniPencilSquare className="text-textGrey text-xl" />
          </div>
        </div>

        <div className="flex jb gap-5 mt-5 w-full">
            <button className="w-56 h-10 sm:h-12 rounded-3xl border border-purple flex items-center justify-center text-center hover:text-white text-purple text-sm hover:bg-Btn-bg font-semibold">
              Save Address
            </button>
            <button className="w-56 h-10 sm:h-12 rounded-3xl border border-purple flex items-center justify-center text-center hover:text-white text-purple text-sm hover:bg-Btn-bg font-semibold">
              Update Profile
            </button>
          </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
