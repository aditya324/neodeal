import React from "react";
import elec from "../assets/electronics.png";
import grind from "../assets/grind.png";
import plane from "../assets/plane.png";
import mask from "../assets/mask.png";
import triangle from "../assets/triangle.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const PopularCategories = () => {
 

  return (
    <>
      <div className="lg:h-44 h-full md:w-full w-full bg-[#DEDFF3] relative pb-10 overflow-hidden  ">
        <div className="font-semibold text-xl text-[#374557] lg:ml-16 ml-20 mb-5 pt-8 md:ml-10 ">
          <p>popular categories</p>
        </div>
        {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:ml-10 ml-20 lg:px-10 lg:mt-0 mt-5 lg:gap-0 md:gap-10  gap-8 md:ml-28">
          {categories.map((category) => {
            return (
              <Link
                to="/categories"
                key={category.id}
                className="bg-white w-56 flex p-3 justify-start items-center rounded-xl relative  "
              >
                <div className="rounded-full overflow-hidden border-2 border-[#5356FB] p-1">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="rounded-full"
                  />
                </div>
                <div className=" font-semibold text-[#374557] ml-3 ">
                  <h2>{category.name}</h2>
                </div>
                <div className=" ">
                  <div style={{backgroundImage:`url(${triangle})`}} className="">
                  <IoIosArrowRoundForward />
                  </div>
                </div>
              </Link>
            );
          })}
        </div> */}
        <div className="lg:flex lg:justify-evenly mr-16 md:grid grid md:grid-cols-2 grid-cols-1 lg:gap-0 lg:ml-0 ml-20  gap-10   md:ml-28 md:gap-10">
          {/* electronics */}
          <div className="relative overflow-hidden w-64 h-20 bg-white border rounded-xl flex items-center">
      <div className="absolute right-0 top-0 h-20 w-16">
        <div className="bg-[#5356FB] rotate-45 px-10 h-8 text-center text-white font-semibold py-1 w-[120px]">
          <IoIosArrowRoundForward
            className="text-white relative font-bold"
            style={{ transform: "rotate(-45deg)", fontSize: "1.5rem" }}
          />
        </div>
      </div>
      <div className="rounded-full overflow-hidden border-2 border-[#5356FB] p-1 ml-4">
        <img
          src={elec}
          alt="Electronics"
          className="rounded-full"
        />
      </div>
      <div className="font-semibold text-[#374557] text-base ml-5">
        <h2>Electronics</h2>
      </div>
    </div>
    {/* home appliances */}
    <div className="relative overflow-hidden w-64 h-20 bg-white border rounded-xl flex items-center">
      <div className="absolute right-0 top-0 h-20 w-16">
        <div className="bg-[#5356FB] rotate-45 px-10 h-8 text-center text-white font-semibold py-1 w-[120px]">
          <IoIosArrowRoundForward
            className="text-white relative font-bold"
            style={{ transform: "rotate(-45deg)", fontSize: "1.5rem" }}
          />
        </div>
      </div>
      <div className="rounded-full overflow-hidden border-2 border-[#5356FB] p-1 ml-4">
        <img
          src={grind}
          alt="Electronics"
          className="rounded-full"
        />
      </div>
      <div className="font-semibold text-[#374557] text-base ml-5">
        <h2>home appliances</h2>
      </div>
    </div>
        {/* travel */}
        <div className="relative overflow-hidden w-64 h-20 bg-white border rounded-xl flex items-center">
      <div className="absolute right-0 top-0 h-20 w-16">
        <div className="bg-[#5356FB] rotate-45 px-10 h-8 text-center text-white font-semibold py-1 w-[120px]">
          <IoIosArrowRoundForward
            className="text-white relative font-bold"
            style={{ transform: "rotate(-45deg)", fontSize: "1.5rem" }}
            />
        </div>
      </div>
      <div className="rounded-full overflow-hidden border-2 border-[#5356FB] p-1 ml-4">
        <img
          src={plane}
          alt="Electronics"
          className="rounded-full"
          />
      </div>
      <div className="font-semibold text-[#374557] text-base ml-5">
        <h2>Travelling</h2>
      </div>
    </div>
    {/* entertainment */}
    <div className="relative overflow-hidden w-64 h-20 bg-white border rounded-xl flex items-center">
      <div className="absolute right-0 top-0 h-20 w-16">
        <div className="bg-[#5356FB] rotate-45 px-10 h-8 text-center text-white font-semibold py-1 w-[120px]">
          <IoIosArrowRoundForward
            className="text-white relative font-bold"
            style={{ transform: "rotate(-45deg)", fontSize: "1.5rem" }}
            />
        </div>
      </div>
      <div className="rounded-full overflow-hidden border-2 border-[#5356FB] p-1 ml-4">
        <img
          src={mask}
          alt="Electronics"
          className="rounded-full"
          />
      </div>
      <div className="font-semibold text-[#374557] text-base ml-5">
        <h2>Home</h2>
      </div>
    </div>
      </div>
          </div>
    </>
  );
};

export default PopularCategories;
