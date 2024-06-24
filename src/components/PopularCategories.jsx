import React from "react";
import elec from "../assets/electronics.png";
import grind from "../assets/grind.png";
import plane from "../assets/plane.png";
import mask from "../assets/mask.png";
import triangle from "../assets/triangle.png";
import { IoIosArrowRoundForward } from "react-icons/io";

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
      <div className="lg:h-36 h-full w-full bg-[#DEDFF3] relative pb-10">
        <div className="font-bold text-[#374557] lg:ml-16 ml-5 mb-5 text-lg">
          <p>popular categories</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:ml-16 ml-20 gap-10 lg:mt-0 mt-5 md:ml-28">
          {categories.map((category) => {
            return (
              <div
                key={category.id}
                className="bg-white w-60 flex p-3 justify-between items-center rounded-xl relative"
              >
                <div className="rounded-full overflow-hidden border-2 border-[#5356FB] p-1">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="rounded-full"
                  />
                </div>
                <div className="mt-2 font-semibold text-[#374557]">
                  <h2>{category.name}</h2>
                </div>
                <div className="absolute  left-44 bottom-">
                  <div
                    style={{ backgroundImage: `url(${triangle})` }}
                    className="bg-no-repeat bg-cover w-28 h-28 "
                  >
                    <IoIosArrowRoundForward className="text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PopularCategories;
