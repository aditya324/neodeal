import React from "react";
import elec from "../assets/electronics.png";
import grind from "../assets/grind.png";
import plane from "../assets/plane.png";
import mask from "../assets/mask.png";
import triangle from "../assets/triangle.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: elec,
    },
    { id: 2, name: "Home Appliances", image: grind },
    { id: 3, name: "Travelling", image: plane },
    { id: 4, name: "Entertainment", image: mask },
  ];

  return (
    <>
      <div className="lg:h-36 h-full w-full bg-[#DEDFF3] relative pb-10 ">
        <div className="font-semibold text-xl text-[#374557] lg:ml-24 ml-5 mb-5 ">
          <p>popular categories</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:ml-20 ml-20  lg:mt-0 mt-5 md:ml-28">
          {categories.map((category) => {
            return (
              <Link
                to="/categories"
                key={category.id}
                className="bg-white w-52 flex p-3 justify-start items-center rounded-xl relative  "
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
                  {/* <div style={{backgroundImage:`url(${triangle})`}} className="">
                  <IoIosArrowRoundForward />
                  </div> */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PopularCategories;
